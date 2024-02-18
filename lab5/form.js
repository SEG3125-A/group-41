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
  
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function () {
    resetForm();
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

$(document).ready(function() {
  $('#datepicker').datepicker({
    beforeShowDay: $.datepicker.noWeekends
  });

  $("#technician").change(updateDatepicker);

  updateDatepicker();

  $.validator.addMethod("phoneNumber", function(value, element) {
      return this.optional(element) || /^\(\d{3}\)\s\d{3}-\d{4}$/.test(value);
  }, "Please enter a valid phone number in the format (xxx) xxx-xxxx");
  
  $.validator.addMethod("noNumbers", function(value, element) {
    return this.optional(element) || !/\d/.test(value);
  }, "This field cannot contain numbers");

  $.validator.addMethod("nochar", function(value, element) {
    return this.optional(element) || /^([^0-9]*)$/.test(value);
  }, "This field should only contain numbers");

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
            nochar: true,
            ccNumber: true
        },
        exp: {
            required: true,
            expirationDate: true
        },
        cvv: {
            required: true,
            nochar: true,
            cvv: true
        },
        email: {
            required: true,
            email: true
        },
        technician: {
            required: true
        },
        datepicker: {
            required: true
        },
        time: {
            required: true
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
        },
        technician: {
            required: "Technician is required"
        },
        time: {
            required: "Time is required"
        },
        datepicker: {
            required: "Date is required"
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
          } else if (element.attr("name") == "technician") {
              error.appendTo("#technicianError");
          } else if (element.attr("name") == "datepicker") {
              error.appendTo("#dateError");
          } else if (element.attr("name") == "time") {
              error.appendTo("#timeError");
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
          var bookingDate = document.getElementById("datepicker").value;
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
              date: bookingDate,
              time: bookingTime
          };
          var service = document.getElementById("formTitle").innerText.trim();
          createService(registrationInfo, service);
          resetForm();
      }
  });
});

function resetForm() {
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
  document.getElementById("datepicker").value = "";
  document.getElementById("time").value = "";
  // Clear elements inside small with error attributes
  var smalls = document.getElementsByTagName("small");
  for (var i = 0; i < smalls.length; i++) {
      smalls[i].innerHTML = "";
  }

  var modal = document.getElementsByClassName("modal")[0];
  modal.style.display = "none";
}

function updateDatepicker() {
  document.getElementById("datepicker").value = "";
  var selectedTechnician = parseInt($('#technician').val());
  var offDays = getOffDaysByTechnician(selectedTechnician);

  $('#datepicker').datepicker('option', 'beforeShowDay', function(date) {
      console.log("date: " + date);
      var day = date.getDay();
      // Disable weekends and off-days
      if (offDays.length === 0)
          return [day !== 0 && day !== 6];
      else
          return [day !== 0 && day !== 6 && !offDays.includes(day)];
  });
}