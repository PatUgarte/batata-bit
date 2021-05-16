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

const tableHeader = document.querySelector(".main-exchange__table-header");
const tableFooter = document.querySelector(".main-exchange__table-footer");

const leftColumns = document.querySelectorAll(
  ".main-exchange__table--first-column"
);
const rightColumnValues = document.querySelectorAll(
  ".main-exchange__table--second-column span"
);
const rightColumnTrends = document.querySelectorAll(
  ".main-exchange__table--second-column img"
);

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

  tableHeader.innerHTML = currentData.type;
  leftColumns.forEach((leftContent, index) => {
    leftContent.innerHTML = currentData.data[index].name;
  });
  rightColumnValues.forEach((rightContent, index) => {
    rightContent.innerHTML = `$ ${currentData.data[index].value}`;
  });
  tableFooter.innerHTML = `<b>Actualizado:</b> ${currentData.updatedAt}`;

  if (tableIndex === 0) {
    leftArrow.style.visibility = "hidden";
    tableHeader.classList.replace("commission-header", "currency-header");
    rightColumnTrends.forEach((img) => {
      img.style.visibility = "visible";
    });
    tableFooter.classList.replace("commission-footer", "currency-footer");
    rightArrow.style.visibility = "visible";
  } else if (tableIndex === tableData.length - 1) {
    leftArrow.style.visibility = "visible";
    tableHeader.classList.replace("currency-header", "commission-header");
    rightColumnTrends.forEach((img) => {
      img.style.visibility = "collapse";
    });
    tableFooter.classList.replace("currency-footer", "commission-footer");
    rightArrow.style.visibility = "hidden";
  } else {
    leftArrow.style.visibility = "visible";
    rightArrow.style.visibility = "visible";
  }
};

leftArrow.addEventListener("click", () => handleTableChange(-1));
rightArrow.addEventListener("click", () => handleTableChange(1));
