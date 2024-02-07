var services = [
    {
        "id": 1,
        "name": "Brake pad",
        "value": "brakePad",
        "price": 100,
    },
    {
        "id": 2,
        "name": "Seat replacement",
        "value": "seatReplacement",
        "price": 200,
    },
    {
        "id": 3,
        "name": "Bike wash",
        "value": "bikeWash",
        "price": 50,
    },
    {
        "id": 4,
        "name": "Tire change",
        "value": "tireChange",
        "price": 150,
    },
    {
        "id": 5,
        "name": "Chain replacement",
        "value": "chainReplacement",
        "price": 100,
    },
    {
        "id": 6,
        "name": "Tire change",
        "value": "tireChange",
        "price": 150,
    },
    {
        "id": 7,
        "name": "Oil change",
        "value": "oilChange",
        "price": 100,
    }
]

var bookings = []

function bookService(value, time) {
    var service = services.find(s => s.value === value);

    var found = bookings.find(b => b.time === time);

    if (!found) {
        bookings.push({
            time: time,
            services: [service]
        });
        return true;
    }

    return false;
}