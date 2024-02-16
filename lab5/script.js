function createService(registrationInfo, service){
    var book = bookService(service, registrationInfo);
    
    if (book) {
        alert("Service booked successfully");
    } else {
        alert("Service already booked for this time");
    }

}