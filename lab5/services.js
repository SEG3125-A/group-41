var services = [
    {
        "id": 1,
        "name": "Brake pad",
        "value": "brakePad",
        "price": 39.99,
        "technicians": [
            {
                "id": 5,
            },
        ]
    },
    {
        "id": 2,
        "name": "Performance Upgrades",
        "value": "performanceUpgrades",
        "price": 69.99,
        "technicians": [
            {
                "id": 2,
            },
            {
                "id": 1,
            }
        ]
    },
    {
        "id": 3,
        "name": "Wheel Truing and Alignment",
        "value": "turingAndAlignment",
        "price": 19.99,
        "technicians": [
            {
                "id": 1,
            },
            {
                "id": 2,
            }
        ]
    },
    {
        "id": 4,
        "name": "Seat replacement",
        "value": "seatReplacement",
        "price": 9.99,
        "technicians": [
            {
                "id": 3,
            }
        ]
    },
    {
        "id": 5,
        "name": "Gear adjustment",
        "value": "gearAdjustment",
        "price": 15.99,
        "technicians": [
            {
                "id": 4,
            }
        ]
    },
    {
        "id": 6,
        "name": "Tire and tube change",
        "value": "tireTubeChange",
        "price": 150,
        "technicians": [
            {
                "id": 6,
            }
        ]
    }
]

var technicians = [
    {
        "id": 1,
        "name": "Addy Vargas",
        "value": "addyVargas",
    },
    {
        "id": 2,
        "name": "Mikael Johnson",
        "value": "mikaelJohnson",
    },
    {
        "id": 3,
        "name": "Paul Smith",
        "value": "paulSmith",
    },
    {
        "id": 4,
        "name": "Joe Doe",
        "value": "joeDoe",
    },
    {
        "id": 5,
        "name": "Mike Vick",
        "value": "mikeVick",
    },
    {
        "id": 6,
        "name": "Tony Stark",
        "value": "tonyStark",
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

function getTechniciansByService(value) {
    var service = services.find(s => s.value === value);

    if (service) {
        return service.technicians.map(t => technicians.find(tech => tech.id === t.id));
    }

    return [];
}