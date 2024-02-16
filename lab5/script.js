function createService(firstName, lastName, email, phoneNumber, time, service){
    var clientInfo = {
        name: firstName,
        lname: lastName,
        email: email,
        phoneNumber: phoneNumber
    }

    var book = bookService(service, time, clientInfo);
    
    if (book) {
        alert("Service booked successfully");
    } else {
        alert("Service already booked for this time");
    }

}