const toggleSwitch = document.querySelector("#theme-switch-input");

document.documentElement.setAttribute("app-theme", "light");
toggleSwitch.checked = false;

const switchTheme = (e) => {
  const theme = e.target.checked ? "dark" : "light";
  document.documentElement.setAttribute("app-theme", theme);
};

toggleSwitch.addEventListener("change", switchTheme, false);

/* ---------------------------------------------------------------------- */

const leftArrow = document.querySelector("#table-left-arrow");
const rightArrow = document.querySelector("#table-right-arrow");

const tableHeaderValue = document.querySelector("#exchange-table__header");
const leftColumnValues = document.querySelectorAll(".exchange-table__first-column");
const rightColumnValues = document.querySelectorAll(".exchange-table__second-column--value");
const rightColumnIcons = document.querySelectorAll(".exchange-table__second-column--icon");
const tableFooter = document.querySelector("#exchange-table__footer");
const tableFooterValue = document.querySelector("#exchange-table__footer-value");

let tableIndex = 0;
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

leftArrow.style.visibility = "hidden";

const handleTableChange = (change) => {
  tableIndex += change;
  const currentData = tableData[tableIndex];

  tableHeaderValue.innerHTML = currentData.type;
  leftColumnValues.forEach((leftContent, index) => {
    leftContent.innerHTML = currentData.data[index].name;
  });
  rightColumnValues.forEach((rightContent, index) => {
    rightContent.innerHTML = currentData.data[index].value;
  });
  tableFooterValue.innerHTML = currentData.updatedAt;

  if (tableIndex === 0) {
    leftArrow.style.visibility = "hidden";
    tableHeaderValue.classList.replace(
      "exchange-table__header--commission",
      "exchange-table__header--currency"
    );
    rightColumnIcons.forEach((img) => {
      img.style.visibility = "visible";
    });
    tableFooter.classList.replace(
      "exchange-table__footer--commission",
      "exchange-table__footer--currency"
    );
    rightArrow.style.visibility = "visible";
  } else if (tableIndex === tableData.length - 1) {
    leftArrow.style.visibility = "visible";
    tableHeaderValue.classList.replace(
      "exchange-table__header--currency",
      "exchange-table__header--commission"
    );
    rightColumnIcons.forEach((img) => {
      img.style.visibility = "collapse";
    });
    tableFooter.classList.replace(
      "exchange-table__footer--currency",
      "exchange-table__footer--commission"
    );
    rightArrow.style.visibility = "hidden";
  } else {
    leftArrow.style.visibility = "visible";
    rightArrow.style.visibility = "visible";
  }
};

leftArrow.addEventListener("click", () => handleTableChange(-1));
rightArrow.addEventListener("click", () => handleTableChange(1));
