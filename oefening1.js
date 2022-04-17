// Maak hier oefening 1
const form = document.getElementById("formJavascrible");
form.addEventListener("submit", validateForm);

function validateForm(e) {
  e.preventDefault();

  const form = e.currentTarget;

  const firstName = form.elements["inputFirstName"].value;
  const lastName = form.elements["inputName"].value;
  const email = form.elements["inputEmail"].value;
  const address = form.elements["inputAddress"].value;
  const country = form.elements["inputCountry"].value;
  const province = form.elements["inputProvince"].value;
  const postalCode = parseInt(form.elements["inputPostalCode"].value);
  const validationField = document.getElementById("validation");

  console.log(
    firstName,
    lastName,
    email,
    address,
    country,
    province,
    postalCode
  );
  if (errormessage() === "") {
    validationField.classList.remove("alert-danger");
    validationField.classList.add("alert-success");
    validationField.innerHTML =
      "<h2>Good shit</br></h2> You just successfully subscribed";
  } else {
    validationField.classList.remove("alert-success");
    validationField.classList.add("alert-danger");
    validationField.innerHTML =
      "<h2>You messsed up...</br></h2>" + errormessage();
  }

  function errormessage() {
    let errormessage = "";
    if (isEmpty(firstName)) {
      errormessage += "First name is required.</br>";
    }
    if (isEmpty(lastName)) {
      errormessage += "Name is required.</br>";
    }
    if (isEmpty(email)) {
      errormessage += "Email is required.</br>";
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        errormessage += "Email is not valid.</br>";
      }
    }
    if (isEmpty(address)) {
      errormessage += "Address is required.</br>";
    }
    if (isEmpty(country)) {
      errormessage += "Country is required.</br>";
    }
    if (isEmpty(province)) {
      errormessage += "Province is required.</br>";
    }
    if (isEmpty(postalCode)) {
      errormessage += "Postal code is required.</br>";
    } else {
      if (postalCode < 1000 || postalCode > 9999) {
        errormessage += "Postal code is not valid.</br>";
      }
      return errormessage;
    }

    function isEmpty(strValue) {
      return strValue === "";
    }
  }
}
