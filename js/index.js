const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

document.documentElement.setAttribute("app-theme", "light");
toggleSwitch.checked = false;

const switchTheme = (e) => {
  e.target.checked
    ? document.documentElement.setAttribute("app-theme", "dark")
    : document.documentElement.setAttribute("app-theme", "light");
};

toggleSwitch.addEventListener("change", switchTheme, false);
