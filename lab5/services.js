var services = [
    {
        "id": 1,
        "name": "Brake pad",
        "value": "brakePad",
        "formValue": "Book Brake Pad Replacement",
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
        "formValue": "Book performance Upgrade",
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
        "formValue": "Book Turing And Alignment",
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
        "formValue": "Book Seat Replacement",
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
        "formValue": "Book Gear Adjustment",
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
        "formValue": "Book Tire and Tube Service",
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
        "offDays": [2, 4]
        
    },
    {
        "id": 2,
        "name": "Mikael Johnson",
        "value": "mikaelJohnson",
        "offDays": [3, 1]
    },
    {
        "id": 3,
        "name": "Paul Smith",
        "value": "paulSmith",
        "offDays": [4]
    },
    {
        "id": 4,
        "name": "Joe Doe",
        "value": "joeDoe",
        "offDays": [0]
    },
    {
        "id": 5,
        "name": "Mike Vick",
        "value": "mikeVick",
        "offDays": [2]
    },
    {
        "id": 6,
        "name": "Tony Stark",
        "value": "tonyStark",
        "offDays": [1, 3]
    }
]

var bookings = []

function bookService(value, registrationInfo) {
    var service = services.find(s => s.formValue === value);
    var found = bookings.find(b => b.time === registrationInfo.time 
        && b.date === registrationInfo.date
        && b.technician === registrationInfo.technician);

    if (!found && service) {
        bookings.push({
            time: registrationInfo.time,
            date: registrationInfo.date,
            fname: registrationInfo.name,
            lname: registrationInfo.lname,
            email: registrationInfo.email,
            phoneNumber: registrationInfo.phoneNumber,
            technician: registrationInfo.technician,
            services: [service]
        });
        return true;
    }

    return false;
}

function getTechniciansByService(value) {
    var service = services.find(s => s.formValue === value);

    if (service) {
        return service.technicians.map(t => technicians.find(tech => tech.id === t.id));
    }

    return [];
}

function getOffDaysByTechnician(value) {
    var technician = technicians.find(t => t.id === value);

    if (technician) {
        return technician.offDays;
    }

    return [];
}