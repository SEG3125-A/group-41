const activities = {
    ACTIVITIES: [
        { name: 'Basketball', days: [0, 2, 4], times: [1] },
        { name: 'Soccer', days: [1, 3], times: [0, 2] },
        { name: 'Tennis', days: [3], times: [3] },
        { name: 'Swimming', days: [1], times: [4] },
        { name: 'Volleyball', days: [2], times: [4] },
        { name: 'Golf', days: [0, 4], times: [2] },
        { name: 'Running', days: [0, 2, 4], times: [0] },
        { name: 'Cycling', days: [1, 3], times: [1] },
        { name: 'Hiking', days: [2], times: [2] },
ç    ],
    DAYS: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    TIMES: [
        '9:00 AM - 11:00 AM',
        '10:00 AM - 12:00 PM',
        '1:00 PM - 3:00 PM',
        '2:00 PM - 4:00 PM',
        '3:00 PM - 5:00 PM'
    ],
    getActivities: function() {
        return this.ACTIVITIES;
    },
    getActivitiesByDay: function(day) {
        return this.ACTIVITIES.filter(activity => activity.days.includes(day));
    },
    getActivitiesByTime: function(time) {
        return this.ACTIVITIES.filter(activity => activity.times.includes(time));
    },
    getDay: function(index) {
        return this.DAYS[index];
    },
    getTime: function(index) {
        return this.TIMES[index];
    },
    getDays: function() {
        return this.DAYS;
    },
    getTimes: function() {
        return this.TIMES;
    }
};

