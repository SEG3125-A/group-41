var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

function openForm(service, name, price) {
  var modal = document.getElementsByClassName("modal")[0];
  modal.style.display = "block";
  let subtitle = price + " from " + name;
  document.getElementById('formTitle').innerHTML = service;
  document.getElementById('formSub').innerHTML = subtitle;

  var technician = document.getElementById("technician");
  technician.innerHTML = "";
  var option = document.createElement("option");
  option.text = "Select a technician";
  option.disabled = true;
  option.selected = true;
  technician.appendChild(option);    


  var techList = getTechniciansByService(service);
  for (var i = 0; i < techList.length; i++) {
    option = document.createElement("option");
    option.value = techList[i].id;
    option.text = techList[i].name;
    technician.appendChild(option);
  }

  technician.onchange = function () {
    availableDays(techList[technician.selectedIndex - 1]);
  };
  
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  var formService = document.getElementById("formService");
  formService.onsubmit = function (e) {
    var valid = formValidation();
    if (!valid) {
        e.preventDefault();
        return;
    }
    
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var bookingDay = document.getElementById("bookingDay").value;
    var bookingTime = document.getElementById("time").value;
    var technician = document.getElementById("technician").value;
    var cvv = document.getElementById("cvv").value;
    var cc = document.getElementById("cc").value;
    var exp = document.getElementById("exp").value;
    var registrationInfo = {
        name: fname,
        lname: lname,
        email: email,
        phoneNumber: phoneNumber,
        cc: cc,
        exp: exp,
        cvv: cvv,
        technician: technician,
        day: bookingDay,
        time: bookingTime
    };

    createService(registrationInfo, service);
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("time").value = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("ccError").innerHTML = "";
    document.getElementById("expError").innerHTML = "";
    document.getElementById("cvvError").innerHTML = "";
    document.getElementById("cc").value = "";
    document.getElementById("exp").value = "";
    document.getElementById("cvv").value = "";
    document.getElementById("bookingDay").value = "";
    modal.style.display = "none";
    e.preventDefault();
  };
}

function availableDays(technician) {
  var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  // Remove the days that are off for the technician
  for (var i = 0; i < technician.offDays.length; i++) {
    var index = technician.offDays[i];
    if (index > -1) {
      days.splice(index, 1);
    }
  }
  var select = document.getElementById("bookingDay");
  select.innerHTML = "";
  var option = document.createElement("option");
  option.text = "Select a date";
  option.disabled = true;
  option.selected = true;
  select.appendChild(option);

  for (var i = 0; i < days.length; i++) {
    option = document.createElement("option");
    option.value = days[i];
    option.text = days[i];
    select.appendChild(option);
  }
}

function formValidation() {
    // check if phone number is valid with regex
    var phone = document.getElementById("phoneNumber").value;
    var phoneRegex = /^\d{10}$/;
    if (!phone.match(phoneRegex)) {
        document.getElementById("phoneError").innerHTML = "Please enter a valid phone number (10 digits)";
        return false;
    } else {
        document.getElementById("phoneError").innerHTML = "";
    }

    // check if credit card is valid with regex
    var cc = document.getElementById("cc").value;
    var ccRegex = /^\d{16}$/;
    if (!cc.match(ccRegex)) {
      document.getElementById("ccError").innerHTML = "Please enter a valid credit card number (16 digits)";
      return false;
    } else {
        document.getElementById("ccError").innerHTML = "";
    }

    // check if expiration date is in the future Month Year format ex May, 2023
    var exp = document.getElementById("exp").value;
    var today = new Date();
    var currentYear = today.getFullYear();
    var currentMonth = today.getMonth() + 1;
    var expYear = parseInt(exp.split("-")[0]);
    var expMonth = parseInt(exp.split("-")[1]);
    if (expYear < currentYear || (expYear === currentYear && expMonth <= currentMonth)) {
        document.getElementById("expError").innerHTML = "Please enter a valid expiration date";
        return false;
    } else {
        document.getElementById("expError").innerHTML = "";
    }

    // check if cvv is valid with regex
    var cvv = document.getElementById("cvv").value;
    var cvvRegex = /^\d{3}$/;
    if (!cvv.match(cvvRegex)) {
        document.getElementById("cvvError").innerHTML = "Please enter a valid CVV number (3 digits)";
        return false;
    } else {
        document.getElementById("cvvError").innerHTML = "";
    }

    return true;
}

