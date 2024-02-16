var services = [
    {
        "id": 1,
        "name": "Brake pad",
        "value": "brakePad",
        "price": 100,
    },
    {
        "id": 2,
        "name": "Performance Upgrades",
        "value": "performanceUpgrades",
        "price": 200,
    },
    {
        "id": 3,
        "name": "Wheel Truing and Alignment",
        "value": "turingAndAlignment",
        "price": 50,
    },
    {
        "id": 4,
        "name": "Seat replacement",
        "value": "seatReplacement",
        "price": 150,
    },
    {
        "id": 5,
        "name": "Gear adjustment",
        "value": "gearAdjustment",
        "price": 100,
    },
    {
        "id": 6,
        "name": "Tire and tube change",
        "value": "tireTubeChange",
        "price": 150,
    }
]

var bookings = []

function bookService(value, time, clientInfo) {
    var service = services.find(s => s.value === value);

    var found = bookings.find(b => b.time === time);

    if (!found && service) {
        bookings.push({
            time: time,
            fname: clientInfo.name,
            lname: clientInfo.lname,
            email: clientInfo.email,
            phoneNumber: clientInfo.phoneNumber,
            services: [service]
        });
        return true;
    }

    return false;
}