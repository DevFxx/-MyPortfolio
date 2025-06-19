document.querySelector(".noJs").style.display = "none";

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const tabButtons = document.querySelectorAll(".nav-item");
  let currentTab = document.querySelector(".tab.active");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (this.classList.contains("active")) return;

      tabButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      const targetTabId = this.getAttribute("data-tab");
      const targetTab = document.getElementById(targetTabId);

      currentTab.classList.remove("active");
      currentTab.classList.add("leaving");

      setTimeout(() => {
        currentTab.classList.remove("leaving");
        targetTab.classList.add("active");
        currentTab = targetTab;
      }, 500);
    });
  });
});
