document.addEventListener("DOMContentLoaded", function () {
  loadSavedData();
  const btn = document.getElementById("btn");
  btn.addEventListener("click", function () {
      const name = document.getElementById("name").value;
      const numFields = parseInt(document.getElementById("numbefields").value);
      const work = document.getElementById("work").value;
      const date = document.getElementById("date").value;
      const errorMsg = document.getElementById("errorMsg");
      

      if (name && numFields > 0 && date && work !== "Select") {
          addDataRow(name, work, numFields, date);
          updateTotal(numFields);
          saveDataToLocalStorage(name, work, numFields, date);
          resetInputs();
          errorMsg.innerHTML = "";
      } else {
          errorMsg.innerHTML = " সব ক্ষেত্র পূর্ণ করুন: ";
      }
  });
});

function addDataRow(name, work, numFields, date) {
  const tableBody = document.getElementById("showdata");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${date}</td>
    <td>${name}</td>
    <td>${work}</td>
    <td>${numFields}</td>
    <td><i class="fa-regular fa-trash-can" style="cursor:pointer;"></i></td>
  `;
  const deleteIcon = row.querySelector('.fa-trash-can');
  deleteIcon.addEventListener('click', function () {
      deleteItem(row, name, numFields, date);
  });

  tableBody.appendChild(row);
}
function updateTotal(numFields) {
  const totalElement = document.getElementById("total");
  let currentTotal = parseInt(totalElement.textContent);
  currentTotal += numFields;
  totalElement.textContent = currentTotal;
}
function saveDataToLocalStorage(name, work, numFields, date) {
  let savedData = JSON.parse(localStorage.getItem("savedData")) || [];
  savedData.push({ name, work, numFields, date});
  localStorage.setItem("savedData", JSON.stringify(savedData));
}

function loadSavedData() {
  const savedData = JSON.parse(localStorage.getItem("savedData")) || [];
  let total = 0;
  savedData.forEach(item => {
      addDataRow(item.name, item.work, item.numFields, item.date);
      total += item.numFields;
  });
  document.getElementById("total").textContent = total;
}

function resetInputs() {
  document.getElementById("name").value = "";
  document.getElementById("numbefields").value = "";
  document.getElementById("work").value = "Select";
  document.getElementById("date").value = "";
}
function deleteItem(row, name, numFields, date) {
  row.remove();
  updateTotal(-numFields);
  let savedData = JSON.parse(localStorage.getItem("savedData")) || [];
  savedData = savedData.filter(item => item.name !== name || item.numFields !== numFields || item.date !== date);
  localStorage.setItem("savedData", JSON.stringify(savedData));
}
