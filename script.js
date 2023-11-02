var startButton = document.getElementById("startButton");
var popupBackground = document.getElementById("popupBackground");
var popup = document.getElementById("popup");
var submitButton = document.getElementById("submitButton");
var dataContainer = document.getElementById("dataContainer");

startButton.addEventListener("click", function () {
  openPopup();
});

function openPopup() {
  popupBackground.style.display = "block";
  popup.style.display = "block";
}

function closePopup() {
  popupBackground.style.display = "none";
  popup.style.display = "none";
}

function submitForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var age = document.getElementById("age").value;
  var address = document.getElementById("address").value;

  var data = {
    name: name,
    email: email,
    phone: phone,
    age: age,
    address: address,
  };

  displayData(data);
  closePopup();
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("age").value = "";
  document.getElementById("address").value = "";
}

function displayData(data) {
  var dataItem = document.createElement("div");
  dataItem.classList.add("dataItem");
  dataItem.innerHTML = JSON.stringify(data);
  dataContainer.appendChild(dataItem);
}
