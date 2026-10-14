const slider = document.getElementById("slider");
const tabs = document.querySelectorAll(".tab");

// Click a tab -> slide to that panel
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const panel = document.getElementById(tab.dataset.target);
    slider.scrollTo({ left: panel.offsetLeft, behavior: "smooth" });
  });
});

// Swipe or scroll the slider -> highlight the matching tab
slider.addEventListener("scroll", () => {
  const panels = slider.querySelectorAll(".panel");
  let current = 0;
  panels.forEach((p, i) => {
    if (Math.abs(p.offsetLeft - slider.scrollLeft) <
        Math.abs(panels[current].offsetLeft - slider.scrollLeft)) {
      current = i;
    }
  });
  tabs.forEach((t, i) => t.classList.toggle("active", i === current));
});