import { View } from "./view.js";

import { createTOCView } from "./tree.js";
import { createMenu } from "./menu.js";

const isZip = async (file) => {
  const arr = new Uint8Array(await file.slice(0, 4).arrayBuffer());
  return (
    arr[0] === 0x50 && arr[1] === 0x4b && arr[2] === 0x03 && arr[3] === 0x04
  );
};

const makeZipLoader = async (file) => {
  const { configure, ZipReader, BlobReader, TextWriter, BlobWriter } =
    await import("./zip.js");
  configure({ useWebWorkers: false });
  const reader = new ZipReader(new BlobReader(file));
  const entries = await reader.getEntries();
  const map = new Map(entries.map((entry) => [entry.filename, entry]));
  const load =
    (f) =>
    (name, ...args) =>
      map.has(name) ? f(map.get(name), ...args) : null;
  const loadText = load((entry) => entry.getData(new TextWriter()));
  const loadBlob = load((entry, type) => entry.getData(new BlobWriter(type)));
  const getSize = (name) => map.get(name)?.uncompressedSize ?? 0;
  return { entries, loadText, loadBlob, getSize };
};

const getFileEntries = async (entry) =>
  entry.isFile
    ? entry
    : (
        await Promise.all(
          Array.from(
            await new Promise((resolve, reject) =>
              entry.createReader().readEntries(
                (entries) => resolve(entries),
                (error) => reject(error)
              )
            ),
            getFileEntries
          )
        )
      ).flat();

const makeDirectoryLoader = async (entry) => {
  const entries = await getFileEntries(entry);
  const files = await Promise.all(
    entries.map(
      (entry) =>
        new Promise((resolve, reject) =>
          entry.file(
            (file) => resolve([file, entry.fullPath]),
            (error) => reject(error)
          )
        )
    )
  );
  const map = new Map(
    files.map(([file, path]) => [path.replace(entry.fullPath + "/", ""), file])
  );
  const decoder = new TextDecoder();
  const decode = (x) => (x ? decoder.decode(x) : null);
  const getBuffer = (name) => map.get(name)?.arrayBuffer() ?? null;
  const loadText = async (name) => decode(await getBuffer(name));
  const loadBlob = (name) => map.get(name);
  const getSize = (name) => map.get(name)?.size ?? 0;
  return { loadText, loadBlob, getSize };
};

const isCBZ = ({ name, type }) =>
  type === "application/vnd.comicbook+zip" || name.endsWith(".cbz");

const isFB2 = ({ name, type }) =>
  type === "application/x-fictionbook+xml" || name.endsWith(".fb2");

const isFBZ = ({ name, type }) =>
  type === "application/x-zip-compressed-fb2" ||
  name.endsWith(".fb2.zip") ||
  name.endsWith(".fbz");

const getView = async (file, emit) => {
  let book;
  if (file.isDirectory) {
    const loader = await makeDirectoryLoader(file);
    const { EPUB } = await import("./epub.js");
    book = await new EPUB(loader).init();
  } else if (!file.size) throw new Error("File not found");
  else if (await isZip(file)) {
    const loader = await makeZipLoader(file);
    if (isCBZ(file)) {
      console.warn("CBZ format not fully supported yet");
      throw new Error("CBZ format not supported");
    } else if (isFBZ(file)) {
      console.warn("FBZ format not fully supported yet");
      throw new Error("FBZ format not supported");
    } else {
      const { EPUB } = await import("./epub.js");
      book = await new EPUB(loader).init();
    }
  } else {
    console.warn("Non-ZIP formats not fully supported yet");
    throw new Error("File type not supported");
  }
  if (!book) throw new Error("File type not supported");
  const view = new View(book, emit);
  const element = await view.display();
  document.body.append(element);
  return view;
};

// Enhanced CSS function with complete text color overrides
const getCSS = ({ spacing, justify, hyphenate }) => `
    @namespace epub "http://www.idpf.org/2007/ops";
    
    /* ROOT COLOR SCHEME */
    html {
        color-scheme: light dark;
    }
    
    /* DETECT CURRENT THEME MODE */
    body {
        background-color: var(--epub-bg, Canvas) !important;
        color: var(--epub-text, CanvasText) !important;
    }
    
    /* FORCE LIGHT MODE COLORS */
    @media (prefers-color-scheme: light) {
        :root {
            --epub-bg: #ffffff;
            --epub-text: #000000;
            --epub-link: #1d4ed8;
            --epub-heading: #111827;
            --epub-muted: #6b7280;
        }
        
        /* UNIVERSAL COLOR OVERRIDE - LIGHT MODE */
        html, body {
            background-color: #ffffff !important;
            color: #000000 !important;
        }
        
        /* ALL TEXT ELEMENTS - DARK TEXT ON WHITE */
        *, *::before, *::after,
        p, div, span, h1, h2, h3, h4, h5, h6,
        li, td, th, blockquote, pre, code,
        strong, b, em, i, u, mark, small, big,
        sup, sub, caption, label, legend,
        article, section, header, footer, nav,
        aside, main, figure, figcaption {
            color: #111827 !important;
            background-color: transparent !important;
        }
        
        /* HEADINGS - DARKER FOR BETTER HIERARCHY */
        h1, h2, h3, h4, h5, h6 {
            color: #0f172a !important;
            background-color: transparent !important;
        }
        
        /* LINKS - BLUE FOR VISIBILITY */
        a, a:link, a:visited {
            color: #1d4ed8 !important;
            background-color: transparent !important;
        }
        
        a:hover, a:active {
            color: #1e40af !important;
            background-color: transparent !important;
        }
        
        /* EMPHASIZED TEXT */
        strong, b, em, i, mark {
            color: #0f172a !important;
            background-color: transparent !important;
        }
        
        /* CODE AND PREFORMATTED */
        code, pre, kbd, samp {
            color: #374151 !important;
            background-color: #f9fafb !important;
        }
        
        /* TABLES */
        table, th, td {
            color: #111827 !important;
            background-color: transparent !important;
            border-color: #d1d5db !important;
        }
        
        /* FORM ELEMENTS */
        input, textarea, select, button {
            color: #111827 !important;
            background-color: #ffffff !important;
        }
    }
    
    /* FORCE DARK MODE COLORS */
    @media (prefers-color-scheme: dark) {
        :root {
            --epub-bg: #111827;
            --epub-text: #e5e7eb;
            --epub-link: #60a5fa;
            --epub-heading: #f9fafb;
            --epub-muted: #9ca3af;
        }
        
        /* UNIVERSAL COLOR OVERRIDE - DARK MODE */
        html, body {
            background-color: #111827 !important;
            color: #e5e7eb !important;
        }
        
        /* ALL TEXT ELEMENTS - LIGHT TEXT ON DARK */
        *, *::before, *::after,
        p, div, span, h1, h2, h3, h4, h5, h6,
        li, td, th, blockquote, pre, code,
        strong, b, em, i, u, mark, small, big,
        sup, sub, caption, label, legend,
        article, section, header, footer, nav,
        aside, main, figure, figcaption {
            color: #e5e7eb !important;
            background-color: transparent !important;
        }
        
        /* HEADINGS - BRIGHTER FOR BETTER HIERARCHY */
        h1, h2, h3, h4, h5, h6 {
            color: #f9fafb !important;
            background-color: transparent !important;
        }
        
        /* LINKS - LIGHT BLUE FOR VISIBILITY */
        a, a:link, a:visited {
            color: #60a5fa !important;
            background-color: transparent !important;
        }
        
        a:hover, a:active {
            color: #93c5fd !important;
            background-color: transparent !important;
        }
        
        /* EMPHASIZED TEXT */
        strong, b, em, i, mark {
            color: #f3f4f6 !important;
            background-color: transparent !important;
        }
        
        /* CODE AND PREFORMATTED */
        code, pre, kbd, samp {
            color: #d1d5db !important;
            background-color: #374151 !important;
        }
        
        /* TABLES */
        table, th, td {
            color: #e5e7eb !important;
            background-color: transparent !important;
            border-color: #4b5563 !important;
        }
        
        /* FORM ELEMENTS */
        input, textarea, select, button {
            color: #e5e7eb !important;
            background-color: #1f2937 !important;
        }
    }
    
    /* MANUAL THEME OVERRIDES FOR THEME TOGGLE */
    body[data-theme="light"] {
        background-color: #ffffff !important;
        color: #000000 !important;
    }
    
    body[data-theme="light"] *,
    body[data-theme="light"] *::before,
    body[data-theme="light"] *::after {
        color: #111827 !important;
        background-color: transparent !important;
    }
    
    body[data-theme="light"] h1,
    body[data-theme="light"] h2,
    body[data-theme="light"] h3,
    body[data-theme="light"] h4,
    body[data-theme="light"] h5,
    body[data-theme="light"] h6 {
        color: #0f172a !important;
    }
    
    body[data-theme="light"] a,
    body[data-theme="light"] a:link,
    body[data-theme="light"] a:visited {
        color: #1d4ed8 !important;
    }
    
    body[data-theme="light"] code,
    body[data-theme="light"] pre {
        color: #374151 !important;
        background-color: #f9fafb !important;
    }
    
    body[data-theme="dark"] {
        background-color: #111827 !important;
        color: #e5e7eb !important;
    }
    
    body[data-theme="dark"] *,
    body[data-theme="dark"] *::before,
    body[data-theme="dark"] *::after {
        color: #e5e7eb !important;
        background-color: transparent !important;
    }
    
    body[data-theme="dark"] h1,
    body[data-theme="dark"] h2,
    body[data-theme="dark"] h3,
    body[data-theme="dark"] h4,
    body[data-theme="dark"] h5,
    body[data-theme="dark"] h6 {
        color: #f9fafb !important;
    }
    
    body[data-theme="dark"] a,
    body[data-theme="dark"] a:link,
    body[data-theme="dark"] a:visited {
        color: #60a5fa !important;
    }
    
    body[data-theme="dark"] code,
    body[data-theme="dark"] pre {
        color: #d1d5db !important;
        background-color: #374151 !important;
    }
    
    /* REMOVE PROBLEMATIC INLINE STYLES */
    [style*="color"]:not(img):not(svg):not(video) {
        color: inherit !important;
    }
    
    [style*="background"]:not(img):not(svg):not(video) {
        background-color: transparent !important;
    }
    
    /* REMOVE PROBLEMATIC CSS CLASSES THAT MIGHT SET COLORS */
    .white, .light, .dark, .black {
        color: inherit !important;
        background-color: transparent !important;
    }
    
    /* TYPOGRAPHY AND LAYOUT */
    p, li, blockquote, dd {
        line-height: ${spacing};
        text-align: ${justify ? "justify" : "start"};
        -webkit-hyphens: ${hyphenate ? "auto" : "manual"};
        hyphens: ${hyphenate ? "auto" : "manual"};
        -webkit-hyphenate-limit-before: 3;
        -webkit-hyphenate-limit-after: 2;
        -webkit-hyphenate-limit-lines: 2;
        hanging-punctuation: allow-end last;
        widows: 2;
    }
    
    /* PRESERVE ALIGNMENT ATTRIBUTES */
    [align="left"] { text-align: left; }
    [align="right"] { text-align: right; }
    [align="center"] { text-align: center; }
    [align="justify"] { text-align: justify; }

    pre {
        white-space: pre-wrap !important;
    }
    
    /* HIDE FOOTNOTES AND ENDNOTES */
    aside[epub|type~="endnote"],
    aside[epub|type~="footnote"],
    aside[epub|type~="note"],
    aside[epub|type~="rearnote"] {
        display: none;
    }
    
    /* ENSURE IMAGES DON'T INTERFERE WITH TEXT VISIBILITY */
    img, svg, video, canvas {
        background-color: transparent !important;
    }
    
    /* ENSURE LIST STYLES ARE VISIBLE */
    ol, ul {
        color: inherit !important;
    }
    
    /* ENSURE QUOTES ARE VISIBLE */
    q, cite {
        color: inherit !important;
    }
`;

const $ = document.querySelector.bind(document);

const locales = "en";
const percentFormat = new Intl.NumberFormat(locales, { style: "percent" });

class Reader {
  #tocView;
  style = {
    spacing: 1.4,
    justify: true,
    hyphenate: true,
  };
  layout = {
    margin: 48,
    gap: 0.05,
    maxColumns: 2,
    maxColumnWidth: 720,
  };

  closeSideBar() {
    $("#dimming-overlay").classList.remove("show");
    $("#side-bar").classList.remove("show");
  }

  constructor() {
    $("#side-bar-button").addEventListener("click", () => {
      $("#dimming-overlay").classList.add("show");
      $("#side-bar").classList.add("show");
    });
    $("#dimming-overlay").addEventListener("click", () => this.closeSideBar());

    const menu = createMenu([
      {
        name: "layout",
        label: "Layout",
        type: "radio",
        items: [
          ["Paginated", "paginated"],
          ["Scrolled", "scrolled"],
        ],
        onclick: (value) => {
          this.layout.flow = value;
          this.setAppearance();
        },
      },
    ]);
    menu.element.classList.add("menu");

    $("#menu-button").append(menu.element);
    $("#menu-button > button").addEventListener("click", () =>
      menu.element.classList.toggle("show")
    );
    menu.groups.layout.select("paginated");

    // Wait for DOM to be ready
    document.addEventListener("DOMContentLoaded", () => {
      this.initializeMenus();
    });
  }

  initializeMenus() {
    console.log("Initializing menus...");

    // Initialize sidebar button
    const sideBarButton = document.getElementById("side-bar-button");
    if (sideBarButton) {
      sideBarButton.addEventListener("click", () => {
        document.getElementById("dimming-overlay").classList.add("show");
        document.getElementById("side-bar").classList.add("show");
      });
    }

    // Initialize dimming overlay
    const dimmingOverlay = document.getElementById("dimming-overlay");
    if (dimmingOverlay) {
      dimmingOverlay.addEventListener("click", () => this.closeSideBar());
    }

    // Initialize settings menu
    const menuButton = document.querySelector("#menu-button > button");
    if (menuButton) {
      console.log("Settings button found, adding event listener");

      menuButton.addEventListener("click", (e) => {
        e.stopPropagation();
        const menu = this.createSettingsMenu();

        // Remove existing menu if any
        const existingMenu = document.querySelector(".menu");
        if (existingMenu) {
          existingMenu.remove();
        }

        // Add new menu
        document.getElementById("menu-button").appendChild(menu);
        menu.classList.toggle("show");

        console.log("Settings menu toggled");
      });
    } else {
      console.error("Settings button not found!");
    }

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      const menu = document.querySelector(".menu");
      const menuButton = document.querySelector("#menu-button");

      if (menu && !menuButton.contains(e.target)) {
        menu.classList.remove("show");
      }
    });
  }

  createSettingsMenu() {
    const menu = document.createElement("ul");
    menu.className = "menu";
    menu.setAttribute("role", "menu");

    // Layout options
    const layoutGroup = document.createElement("li");
    layoutGroup.innerHTML = "Layout";
    layoutGroup.style.fontWeight = "bold";
    layoutGroup.style.padding = "8px 12px";
    menu.appendChild(layoutGroup);

    // Paginated option
    const paginatedOption = document.createElement("li");
    paginatedOption.setAttribute("role", "menuitemradio");
    paginatedOption.setAttribute("aria-checked", "true");
    paginatedOption.innerText = "Paginated";
    paginatedOption.onclick = () => {
      this.layout.flow = "paginated";
      this.setAppearance();
      this.updateMenuSelection(menu, paginatedOption);
    };
    menu.appendChild(paginatedOption);

    // Scrolled option
    const scrolledOption = document.createElement("li");
    scrolledOption.setAttribute("role", "menuitemradio");
    scrolledOption.setAttribute("aria-checked", "false");
    scrolledOption.innerText = "Scrolled";
    scrolledOption.onclick = () => {
      this.layout.flow = "scrolled";
      this.setAppearance();
      this.updateMenuSelection(menu, scrolledOption);
    };
    menu.appendChild(scrolledOption);

    return menu;
  }

  updateMenuSelection(menu, selectedItem) {
    // Update aria-checked for all menu items
    const menuItems = menu.querySelectorAll('[role="menuitemradio"]');
    menuItems.forEach((item) => {
      item.setAttribute(
        "aria-checked",
        item === selectedItem ? "true" : "false"
      );
    });

    // Hide menu
    menu.classList.remove("show");
  }

  async open(file) {
    try {
      this.view = await getView(file, this.#handleEvent.bind(this));
      const { book } = this.view;
      this.setAppearance();
      this.view.renderer.next();

      $("#header-bar").style.visibility = "visible";
      $("#nav-bar").style.visibility = "visible";
      $("#left-button").addEventListener("click", () => this.view.goLeft());
      $("#right-button").addEventListener("click", () => this.view.goRight());

      const slider = $("#progress-slider");
      slider.dir = book.dir;
      slider.addEventListener("input", (e) =>
        this.view.goToFraction(parseFloat(e.target.value))
      );

      const sizes = book.sections
        .filter((s) => s.linear !== "no")
        .map((s) => s.size);
      if (sizes.length < 100) {
        const total = sizes.reduce((a, b) => a + b, 0);
        let sum = 0;
        for (const size of sizes.slice(0, -1)) {
          sum += size;
          const option = document.createElement("option");
          option.value = sum / total;
          $("#tick-marks").append(option);
        }
      }

      document.addEventListener("keydown", this.#handleKeydown.bind(this));

      const title = book.metadata?.title ?? "Untitled Book";
      document.title = title;
      $("#side-bar-title").innerText = title;
      const author = book.metadata?.author;
      $("#side-bar-author").innerText =
        typeof author === "string"
          ? author
          : author
              ?.map((author) =>
                typeof author === "string" ? author : author.name
              )
              ?.join(", ") ?? "";
      Promise.resolve(book.getCover?.())?.then((blob) =>
        blob ? ($("#side-bar-cover").src = URL.createObjectURL(blob)) : null
      );

      const toc = book.toc;
      if (toc) {
        this.#tocView = createTOCView(toc, (href) => {
          this.view.goTo(href).catch((e) => console.error(e));
          this.closeSideBar();
        });
        $("#toc-view").append(this.#tocView.element);
      }
    } catch (error) {
      console.error("Error opening file:", error);
      alert("Error opening file: " + error.message);
    }
  }

  setAppearance = () => {
    this.view?.setAppearance({ css: getCSS(this.style), layout: this.layout });
    const scrolled = this.layout.flow === "scrolled";
    document.documentElement.classList.toggle("scrolled", scrolled);

    // Apply theme to EPUB content when appearance changes
    this.#applyThemeToContent();
  };

  #applyThemeToContent() {
    // Get current theme from the body style or system preference
    const bodyStyle = document.body.style;
    let theme = "light";

    if (
      bodyStyle.background &&
      (bodyStyle.background.includes("#000") ||
        bodyStyle.background.includes("#111"))
    ) {
      theme = "dark";
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      theme = "dark";
    }

    // Apply theme to EPUB iframe if it exists
    setTimeout(() => {
      const iframe = document.querySelector("iframe");
      if (iframe && iframe.contentDocument) {
        const doc = iframe.contentDocument;
        doc.body.setAttribute("data-theme", theme);

        // Force immediate style update
        let style = doc.getElementById("theme-override");
        if (!style) {
          style = doc.createElement("style");
          style.id = "theme-override";
          doc.head.appendChild(style);
        }

        if (theme === "dark") {
          style.textContent = `
            html, body { 
              background-color: #111827 !important; 
              color: #e5e7eb !important; 
            }
            *, *::before, *::after { 
              color: #e5e7eb !important; 
              background-color: transparent !important; 
            }
            h1, h2, h3, h4, h5, h6 { 
              color: #f9fafb !important; 
            }
            a, a:link, a:visited { 
              color: #60a5fa !important; 
            }
            strong, b, em, i { 
              color: #f3f4f6 !important; 
            }
            code, pre { 
              color: #d1d5db !important; 
              background-color: #374151 !important; 
            }
          `;
        } else {
          style.textContent = `
            html, body { 
              background-color: #ffffff !important; 
              color: #111827 !important; 
            }
            *, *::before, *::after { 
              color: #111827 !important; 
              background-color: transparent !important; 
            }
            h1, h2, h3, h4, h5, h6 { 
              color: #0f172a !important; 
            }
            a, a:link, a:visited { 
              color: #1d4ed8 !important; 
            }
            strong, b, em, i { 
              color: #0f172a !important; 
            }
            code, pre { 
              color: #374151 !important; 
              background-color: #f9fafb !important; 
            }
          `;
        }
      }
    }, 100);
  }

  #handleEvent(obj) {
    console.debug(obj);
    switch (obj.type) {
      case "loaded":
        this.#onLoaded(obj);
        break;
      case "relocated":
        this.#onRelocated(obj);
        break;
    }
  }

  #handleKeydown(event) {
    const k = event.key;
    if (k === "ArrowLeft" || k === "h") this.view.goLeft();
    else if (k === "ArrowRight" || k === "l") this.view.goRight();
  }

  #onLoaded({ doc }) {
    doc.addEventListener("keydown", this.#handleKeydown.bind(this));
    // Apply theme immediately when document loads
    this.#applyThemeToContent();
  }

  #onRelocated(obj) {
    const { fraction, location, tocItem, pageItem } = obj;
    const percent = percentFormat.format(fraction);
    const loc = pageItem ? `Page ${pageItem.label}` : `Loc ${location.current}`;
    const slider = $("#progress-slider");
    slider.style.visibility = "visible";
    slider.value = fraction;
    slider.title = `${percent} · ${loc}`;
    if (tocItem?.href) this.#tocView?.setCurrentHref?.(tocItem.href);
  }
}

const open = async (file) => {
  document.body.removeChild($("#drop-target"));
  const reader = new Reader();
  globalThis.reader = reader;
  await reader.open(file);
};

const dragOverHandler = (e) => e.preventDefault();
const dropHandler = (e) => {
  e.preventDefault();
  const item = Array.from(e.dataTransfer.items).find(
    (item) => item.kind === "file"
  );
  if (item) {
    const entry = item.webkitGetAsEntry();
    open(entry.isFile ? item.getAsFile() : entry).catch((e) =>
      console.error(e)
    );
  }
};

const dropTarget = $("#drop-target");
dropTarget.addEventListener("drop", dropHandler);
dropTarget.addEventListener("dragover", dragOverHandler);

$("#file-input").addEventListener("change", (e) =>
  open(e.target.files[0]).catch((e) => console.error(e))
);
$("#file-button").addEventListener("click", () => $("#file-input").click());

const params = new URLSearchParams(location.search);
const url = params.get("url");
if (url)
  fetch(url)
    .then((res) => res.blob())
    .then((blob) => open(new File([blob], new URL(url).pathname)))
    .catch((e) => console.error(e));
else dropTarget.style.visibility = "visible";
