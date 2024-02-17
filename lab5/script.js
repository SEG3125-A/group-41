function createService(registrationInfo, service){
    console.log("ooo");
    var book = bookService(service, registrationInfo);
    
    if (book) {
        alert("Service booked successfully");
    } else {
        alert("Service already booked for this time");
    }

}