const activities = {
    ACTIVITIES: [
        { id: 0, name: 'Basketball', days: [0, 2, 4], times: [1], description: 'Basketball is a team sport in which two teams, most commonly of five players each, opposing one another on a rectangular court, compete with the primary objective of shooting a basketball through the defender\'s hoop while preventing the opposing team from shooting through their own hoop.' },
        { id: 1, name: 'Soccer', days: [1, 3], times: [0, 2], description: 'Soccer is a team sport played with a spherical ball between two teams of 11 players. It is played by approximately 250 million players in over 200 countries and dependencies, making it the world\'s most popular sport.' },
        { id: 2, name: 'Swimming', days: [2, 3, 4], times: [3], description: 'Swimming is an individual or team racing sport that requires the use of one\'s entire body to move through water. The sport takes place in pools or open water.' },
        { id: 3, name: 'Tennis', days: [0, 2, 4], times: [0, 2], description: 'Tennis is a racket sport that can be played individually against a single opponent or between two teams of two players each. Each player uses a tennis racket that is strung with cord to strike a hollow rubber ball covered with felt over or around a net and into the opponent\'s court.' },
        { id: 4, name: 'Volleyball', days: [1, 3], times: [1], description: 'Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team\'s court under organized rules.' },
        { id: 5, name: 'Baseball', days: [0, 2, 4], times: [1], description: 'Baseball is a bat-and-ball game played between two opposing teams who take turns batting and fielding. The game proceeds when a player on the fielding team, called the pitcher, throws a ball which a player on the batting team tries to hit with a bat.' },
        { id: 6, name: 'Football', days: [1, 3], times: [0, 2], description: 'Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. Unqualified, the word football normally means the form of football that is the most popular where the word is used.' },
        { id: 7, name: 'Golf', days: [0, 1, 2], times: [3], description: 'Golf is a club-and-ball sport in which players use various clubs to hit balls into a series of holes on a course in as few strokes as possible.' },
        { id: 8, name: 'Hockey', days: [0, 2, 4], times: [0, 2], description: 'Hockey is a sport in which two teams play against each other by trying to manoeuvre a ball or a puck into the opponent\'s goal using a hockey stick.' },

    ],
    DAYS: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
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
    },
    searchActivities: function(name, days, time) {
        console.log("searchActivities", name, days, time);
        console.log(name, days, time);
        
        if (name === "") {
            name = null;
        }
        if (days.length === 0) {
            days = null;
        }

        const filteredActivities = this.ACTIVITIES.filter(activity => {
            if (name !== null && !activity.name.toLowerCase().includes(name.toLowerCase())) {
            return false;
            }
            // if days is not null and the activity does not include all of the days, return false
            if (days !== null && !days.every(day => activity.days.includes(day))) {
            return false;
            }
            time = parseInt(time);
            if (time !== -1 && !activity.times.includes(time)) {
            console.log("time is not null", time);
            return false;
            }
            return true;
        });

        return filteredActivities;
    }
};

export default activities;
