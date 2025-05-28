// Start with light mode as default
var mode = "light";

// Wait for DOM to be ready before setting up event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Initialize with light mode
  document.body.setAttribute("style", "background:#ffffff; color:#111827;");

  // Find the switch-mode button (it's now inside menu-button container)
  var switch_mode = document.getElementById("switch-mode");

  if (switch_mode) {
    // Set initial state
    var sun = document.getElementById("sun");
    var moon = document.getElementById("moon");

    if (sun && moon) {
      sun.setAttribute("style", "display:none;");
      moon.setAttribute("style", "display:block;");
    }

    // Add click event listener
    switch_mode.addEventListener("click", switchMode);
    console.log("Mode toggle initialized successfully");
  } else {
    console.error("Switch mode button not found!");
  }
});

function switchMode() {
  console.log("switchMode called, current mode:", mode);

  var sun = document.getElementById("sun");
  var moon = document.getElementById("moon");

  if (!sun || !moon) {
    console.error("Sun or moon icons not found!");
    return;
  }

  if (mode === "light") {
    // Switch to dark mode
    document.body.setAttribute("style", "background:#111827; color:#e5e7eb;");
    sun.setAttribute("style", "display:block;");
    moon.setAttribute("style", "display:none;");
    mode = "dark";
    console.log("Switched to dark mode");

    // Apply dark theme to EPUB content
    applyThemeToEPUB("dark");
  } else {
    // Switch to light mode
    document.body.setAttribute("style", "background:#ffffff; color:#111827;");
    sun.setAttribute("style", "display:none;");
    moon.setAttribute("style", "display:block;");
    mode = "light";
    console.log("Switched to light mode");

    // Apply light theme to EPUB content
    applyThemeToEPUB("light");
  }

  // Trigger re-rendering of EPUB content with new styles
  if (window.reader && window.reader.setAppearance) {
    window.reader.setAppearance();
  }
}

function applyThemeToEPUB(theme) {
  console.log("Applying theme to EPUB:", theme);

  // Find the EPUB iframe and apply theme
  setTimeout(() => {
    const iframe = document.querySelector("iframe");
    if (iframe && iframe.contentDocument) {
      const doc = iframe.contentDocument;
      doc.body.setAttribute("data-theme", theme);

      // Create or update theme style
      let style = doc.getElementById("manual-theme-override");
      if (!style) {
        style = doc.createElement("style");
        style.id = "manual-theme-override";
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
          a:hover, a:active {
            color: #93c5fd !important;
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
          a:hover, a:active {
            color: #2563eb !important;
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

      console.log("Theme applied to EPUB content:", theme);
    } else {
      console.log("No iframe found or contentDocument not accessible");
    }
  }, 50);
}

// Export for global access
window.switchMode = switchMode;
window.applyThemeToEPUB = applyThemeToEPUB;
window.mode = mode;
