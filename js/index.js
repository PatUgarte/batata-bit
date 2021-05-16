const toggleSwitch = document.querySelector("#theme-switch-input");

document.documentElement.setAttribute("app-theme", "light");
toggleSwitch.checked = false;

const switchTheme = (e) => {
  const theme = e.target.checked ? "dark" : "light";
  document.documentElement.setAttribute("app-theme", theme);
};

toggleSwitch.addEventListener("change", switchTheme, false);

const leftArrow = document.querySelector("#table-left-arrow");
const rightArrow = document.querySelector("#table-right-arrow");

const tableData = [
  {
    type: "Monedas",
    data: [
      { name: "Bitcoin", value: 1.96, state: "down" },
      { name: "Ethereum", value: 0.07, state: "up" },
      { name: "Ripple", value: 2.15, state: "down" },
      { name: "Stellar", value: 4.96, state: "down" },
    ],
    updatedAt: "19 Julio 23:45",
  },
  {
    type: "Comisiones",
    data: [
      { name: "Bitrade", value: 12.96 },
      { name: "Bitpreco", value: 13.07 },
      { name: "Novadax", value: 13.15 },
      { name: "Coinext", value: 14.96 },
    ],
    updatedAt: "19 Julio 23:48",
  },
];
