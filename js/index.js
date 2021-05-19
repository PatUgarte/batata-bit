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
const plansCardContainer = document.querySelector("#plans-card-container");
const plansCards = document.querySelectorAll(".plans-card");
const exchangeSecondTable = document.querySelector("#exchange-second-table");

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
rightColumnIcons.forEach((img, index) => {
  const {state} = tableData[0].data[index];
  img.setAttribute("src", `./assets/icons/trending-${state}.svg`);
  img.setAttribute("alt", `Trending ${state}`);
});
plansCardContainer.scrollTo(plansCardContainer.offsetWidth / 2, 0);

const handleTableChange = (index) => {
  tableIndex = index;
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

const handlePlanCardClick = (index) => {
  const position =
    index === 0
      ? 0
      : index === 1
        ? plansCardContainer.offsetWidth / 2
        : plansCardContainer.offsetWidth;
  plansCardContainer.scrollTo(position, 0);
};

let previousWidth = 0;
const reportWindowSize = () => {
  const width = window.innerWidth;
  if (width >= 750) {
    tableIndex = 0;
    leftArrow.style.visibility = "hidden";
    rightArrow.style.visibility = "hidden";
    const data = tableData[0];
    tableHeaderValue.innerHTML = data.type;
    tableHeaderValue.classList.replace(
      "exchange-table__header--commission",
      "exchange-table__header--currency"
    );
    leftColumnValues.forEach((leftContent, index) => {
      leftContent.innerHTML = data.data[index].name;
    });
    rightColumnValues.forEach((rightContent, index) => {
      rightContent.innerHTML = data.data[index].value;
    });
    rightColumnIcons.forEach((img) => {
      img.style.visibility = "visible";
    });
    tableFooterValue.innerHTML = data.updatedAt;
    tableFooter.classList.replace(
      "exchange-table__footer--commission",
      "exchange-table__footer--currency"
    );
  } else if (previousWidth && previousWidth >= 750 && width < 750) {
    rightArrow.style.visibility = "visible";
  }
  previousWidth = window.innerWidth;
};

leftArrow.addEventListener("click", () => handleTableChange(0));
rightArrow.addEventListener("click", () => handleTableChange(1));
plansCards.forEach((singleCard, index) => {
  singleCard.addEventListener("click", () => handlePlanCardClick(index));
});
window.addEventListener("resize", reportWindowSize);
