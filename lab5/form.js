var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

function openForm(service, name, price) {
  var modal = document.getElementsByClassName("modal")[0];
  modal.style.display = "block";
  let subtitle = price + " from " + name;
  // add <i class="fa fa-shopping-cart" aria-hidden="true"></i> to formTitle
  var icon = document.createElement("i");
  icon.className = "fa fa-shopping-cart";
  icon.setAttribute("aria-hidden", "true");
  var formTitle = document.getElementById("formTitle");
  formTitle.innerHTML = "";
  formTitle.appendChild(icon);
  formTitle.innerHTML += " " + service;
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

$(document).ready(function() {
  $.validator.addMethod("phoneNumber", function(value, element) {
      return this.optional(element) || /^\(\d{3}\)\s\d{3}-\d{4}$/.test(value);
  }, "Please enter a valid phone number in the format (xxx) xxx-xxxx");
  
  $.validator.addMethod("noNumbers", function(value, element) {
    return this.optional(element) || !/\d/.test(value);
  }, "This field cannot contain numbers");

  $.validator.addMethod("ccNumber", function(value, element) {
    return this.optional(element) || /^\d{16}$/.test(value);
  }, "Credit card number must be 16 digits long");

  $.validator.addMethod("email", function(value, element) {
    return this.optional(element) || /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value);
  }, "Please enter a valid email address");

  $.validator.addMethod("expirationDate", function(value, element) {
    if (this.optional(element)) {
        return true;
    }
    const [year, month] = value.split("-");
    const expirationDate = new Date(year, month - 1);
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth());
    currentDate.setDate(1);
    return expirationDate >= currentDate;
  }, "Expiration date must be in the future");

  $.validator.addMethod("cvv", function(value, element) {
    return this.optional(element) || /^\d{3}$/.test(value);
  }, "CVV must be 3 digits long");

  $("#formService").validate({
      rules: {
          phoneNumber: {
              required: true,
              phoneNumber: true
          },
          fname: {
            required: true,
            noNumbers: true
        },
        lname: {
            required: true,
            noNumbers: true
        },
        cc: {
            required: true,
            ccNumber: true
        },
        exp: {
            required: true,
            expirationDate: true
        },
        cvv: {
            required: true,
            cvv: true
        },
        email: {
            required: true,
            email: true
        }
      },
      messages: {
          phoneNumber: {
              required: "Phone number is required"
          },
          fname: {
            required: "Please enter your first name",
            noNumbers: "First name cannot contain numbers"
        },
        lname: {
            required: "Please enter your last name",
            noNumbers: "Last name cannot contain numbers"
        },
        cc: {
            required: "Credit card number is required"
        },
        exp: {
            required: "Expiration date is required"
        },
        cvv: {
            required: "CVV is required"
        },
        email: {
            required: "Email is required"
        }
      },
      errorPlacement: function(error, element) {
          if (element.attr("name") == "phoneNumber" ) {
              error.appendTo("#phoneError");
          } else if (element.attr("name") == "fname") {
              error.appendTo("#fnameError");
          } else if (element.attr("name") == "lname") {
              error.appendTo("#lnameError");
          } else if (element.attr("name") == "cc") {
              error.appendTo("#ccError");
          } else if (element.attr("name") == "exp") {
              error.appendTo("#expError");
          } else if (element.attr("name") == "cvv") {
              error.appendTo("#cvvError");
          } else if (element.attr("name") == "email") {
              error.appendTo("#emailError");
          } else {
              error.insertAfter(element);
          }
      }
  });

  $("#formService").submit(function(e) {
      e.preventDefault();

      if ($(this).valid()) {
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
          var service = document.getElementById("formTitle").innerText.trim();
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
          var modal = document.getElementsByClassName("modal")[0];
          modal.style.display = "none";
      }
  });
});
