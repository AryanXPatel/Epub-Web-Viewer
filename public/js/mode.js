document.addEventListener("DOMContentLoaded", function () {
  console.log("Mode.js loaded!");

  var mode = "dark"; // Start in dark mode
  var switch_mode = document.getElementById("switch-mode");

  if (!switch_mode) {
    console.error("Switch mode button not found!");
    return;
  }

  var sun = document.getElementById("sun");
  var moon = document.getElementById("moon");

  // Setup initial state - dark mode
  document.body.style.background = "#111827";
  document.body.style.color = "#e5e7eb";
  if (sun) sun.style.display = "block";
  if (moon) moon.style.display = "none";

  // Add click event
  switch_mode.addEventListener("click", function () {
    console.log("Switch mode clicked! Current mode:", mode);

    if (mode === "light") {
      // Switch to dark mode
      document.body.style.background = "#111827";
      document.body.style.color = "#e5e7eb";
      if (sun) sun.style.display = "block";
      if (moon) moon.style.display = "none";
      mode = "dark";
      console.log("Switched to dark mode");
    } else {
      // Switch to light mode
      document.body.style.background = "#ffffff";
      document.body.style.color = "#111827";
      if (sun) sun.style.display = "none";
      if (moon) moon.style.display = "block";
      mode = "light";
      console.log("Switched to light mode");
    }

    // Apply to EPUB content if reader exists
    if (window.reader && window.reader.setAppearance) {
      window.reader.setAppearance();
    }
  });
});
