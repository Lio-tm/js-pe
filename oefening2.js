const rainbow = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];

let oefening2 = () => {
  //   Maak hier oefening 2
  const tableRow = document.getElementById("tableRow");
  tableRow.innerHTML = "";

  for (let index = 0; index < rainbow.length; index++) {
    const td = document.createElement("td");
    td.append(rainbow[index]);
    td.dataset.color = rainbow[index];
    tableRow.appendChild(td);
    td.addEventListener("mouseover", mouseOver);
    td.addEventListener("mouseout", mouseOut);

    td.addEventListener("click", addTablerow);
  }

  function mouseOver(e) {
    const td = e.currentTarget;
    td.style.color = "white";
    td.style.backgroundColor = td.dataset.color;
  }
  function mouseOut(e) {
    const td = e.currentTarget;
    td.style.color = "black";
    td.style.backgroundColor = "transparent";
  }
  function addTablerow(e) {
    const td = e.currentTarget;

    const pos =
      parseInt(
        prompt(`At wich position should I add it (1-${rainbow.length})?`)
      ) - 1;
    if (pos < 0 || pos >= rainbow.length) return;
    const tr = document.createElement("tr");

    for (let index = 0; index < rainbow.length; index++) {
      const newTd =
        index === pos ? td.cloneNode(true) : document.createElement("td");
      tr.appendChild(newTd);
      newTd.addEventListener("click", changeColor);
    }

    const tablebody = document.getElementById("tableBody");
    tablebody.appendChild(tr);
  }
  function changeColor(e) {
    const td = e.currentTarget;

    const color = prompt("Which color would you like to add?");
    td.style.backgroundColor = color;
    td.style.color = "white";
    td.innerHTML = color;
  }
};
