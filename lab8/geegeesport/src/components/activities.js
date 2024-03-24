const activities = {
  ACTIVITIES: [
    {
      id: 0,
      name: "Basketball",
      days: [0, 2, 4],
      times: [1],
      description:
        "Basketball is a team sport in which two teams, most commonly of five players each, opposing one another on a rectangular court, compete with the primary objective of shooting a basketball through the defender's hoop while preventing the opposing team from shooting through their own hoop.",
    },
    {
      id: 1,
      name: "Soccer",
      days: [1, 3],
      times: [0, 2],
      description:
        "Soccer is a team sport played with a spherical ball between two teams of 11 players. It is played by approximately 250 million players in over 200 countries and dependencies, making it the world's most popular sport.",
    },
    {
      id: 2,
      name: "Swimming",
      days: [2, 3, 4],
      times: [3],
      description:
        "Swimming is an individual or team racing sport that requires the use of one's entire body to move through water. The sport takes place in pools or open water.",
    },
    {
      id: 3,
      name: "Tennis",
      days: [0, 2, 4],
      times: [0, 2],
      description:
        "Tennis is a racket sport that can be played individually against a single opponent or between two teams of two players each. Each player uses a tennis racket that is strung with cord to strike a hollow rubber ball covered with felt over or around a net and into the opponent's court.",
    },
    {
      id: 4,
      name: "Volleyball",
      days: [1, 3],
      times: [1],
      description:
        "Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules.",
    },
    {
      id: 5,
      name: "Baseball",
      days: [0, 2, 4],
      times: [1],
      description:
        "Baseball is a bat-and-ball game played between two opposing teams who take turns batting and fielding. The game proceeds when a player on the fielding team, called the pitcher, throws a ball which a player on the batting team tries to hit with a bat.",
    },
    {
      id: 6,
      name: "Football",
      days: [1, 3],
      times: [0, 2],
      description:
        "Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. Unqualified, the word football normally means the form of football that is the most popular where the word is used.",
    },
    {
      id: 7,
      name: "Golf",
      days: [0, 1, 2],
      times: [3],
      description:
        "Golf is a club-and-ball sport in which players use various clubs to hit balls into a series of holes on a course in as few strokes as possible.",
    },
    {
      id: 8,
      name: "Hockey",
      days: [0, 2, 4],
      times: [0, 2],
      description:
        "Hockey is a sport in which two teams play against each other by trying to manoeuvre a ball or a puck into the opponent's goal using a hockey stick.",
    },
  ],
  DAYS: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  TIMES: [
    "9:00 AM - 11:00 AM",
    "10:00 AM - 12:00 PM",
    "1:00 PM - 3:00 PM",
    "2:00 PM - 4:00 PM",
    "3:00 PM - 5:00 PM",
  ],
  ACTIVITIES_fr: [
    {
      id: 0,
      name: "Basket-ball",
      days: [0, 2, 4],
      times: [1],
      description:
        "Le basket-ball est un sport d'équipe dans lequel deux équipes, le plus souvent composées de cinq joueurs chacune, s'affrontant sur un terrain rectangulaire, s'affrontent avec pour objectif principal de tirer un ballon de basket à travers le cerceau du défenseur tout en empêchant l'équipe adverse de tirer à travers son propre cerceau",
    },
    {
      id: 1,
      name: "Football",
      days: [1, 3],
      times: [0, 2],
      description:
        "Le football est un sport d'équipe joué avec un ballon sphérique entre deux équipes de 11 joueurs. Il est pratiqué par environ 250 millions de joueurs dans plus de 200 pays et dépendances, ce qui en fait le sport le plus populaire au monde.",
    },
    {
      id: 2,
      name: "Natation",
      days: [2, 3, 4],
      times: [3],
      description:
        "La natation est un sport de course individuel ou en équipe qui nécessite l'utilisation de tout le corps pour se déplacer dans l'eau. Ce sport se déroule en piscine ou en eau libre.",
    },
    {
      id: 3,
      name: "Tennis",
      days: [0, 2, 4],
      times: [0, 2],
      description:
        "Le tennis est un sport de raquette qui peut être joué individuellement contre un seul adversaire ou entre deux équipes de deux joueurs chacune. Chaque joueur utilise une raquette de tennis enfilée avec une corde pour frapper une balle creuse en caoutchouc recouverte de feutre sur ou autour d'un filet et dans le camp adverse.",
    },
    {
      id: 4,
      name: "Volley-ball",
      days: [1, 3],
      times: [1],
      description:
        "Le volley-ball est un sport d'équipe dans lequel deux équipes de six joueurs sont séparées par un filet. Chaque équipe tente de marquer des points en faisant atterrir un ballon sur le terrain de l'autre équipe selon des règles organisées.",
    },
    {
      id: 5,
      name: "Base-ball",
      days: [0, 2, 4],
      times: [1],
      description:
        "Le baseball est un jeu de batte et de balle joué entre deux équipes adverses qui frappent et alignent à tour de rôle. Le jeu se déroule lorsqu'un joueur de l'équipe défensive, appelé lanceur, lance une balle qu'un joueur de l'équipe au bâton tente de frapper. avec une batte.",
    },
    {
      id: 6,
      name: "football américain",
      days: [1, 3],
      times: [0, 2],
      description:
        "Le football est une famille de sports d'équipe qui consistent, à des degrés divers, à taper dans un ballon pour marquer un but. Sans réserve, le mot football désigne normalement la forme de football la plus populaire là où le mot est utilisé.",
    },
    {
      id: 7,
      name: "Golf",
      days: [0, 1, 2],
      times: [3],
      description:
        "Le golf est un sport de club et de balle dans lequel les joueurs utilisent différents clubs pour frapper des balles dans une série de trous sur un parcours en aussi peu de coups que possible.",
    },
    {
      id: 8,
      name: "Hockey",
      days: [0, 2, 4],
      times: [0, 2],
      description:
        "Le hockey est un sport dans lequel deux équipes s'affrontent en essayant de manœuvrer une balle ou une rondelle dans le but adverse à l'aide d'un bâton de hockey.",
    },
  ],
  DAYS_FR: [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ],
  getActivities: function () {
    return this.ACTIVITIES;
  },
  getActivitiesByDay: function (day, lang) {
    if (lang === "french") {
      return this.ACTIVITIES_fr.filter((activity) =>
        activity.times.includes(day)
      );
    } else {
      return this.ACTIVITIES.filter((activity) => activity.times.includes(day));
    }
  },
  getActivitiesByTime: function (time, lang) {
    if (lang === "french") {
      return this.ACTIVITIES_fr.filter((activity) =>
        activity.times.includes(time)
      );
    } else {
      return this.ACTIVITIES.filter((activity) =>
        activity.times.includes(time)
      );
    }
  },
  getDay: function (index, lang) {
    if (lang === "french") {
      return this.DAYS_FR[index];
    } else {
      return this.DAYS[index];
    }
  },
  getTime: function (index) {
    return this.TIMES[index];
  },
  getDays: function (lang) {
    if (lang === "french") {
      return this.DAYS_FR;
    } else {
      return this.DAYS;
    }
  },
  getTimes: function () {
    return this.TIMES;
  },
  searchActivities: function (name, days, time, lang) {
    if (name === "") {
      name = null;
    }
    if (days.length === 0) {
      days = null;
    }
    var act = null;
    if (lang === "french") {
      act = this.ACTIVITIES_fr;
    } else {
      act = this.ACTIVITIES;
    }

    const filteredActivities = act.filter((activity) => {
      if (
        name !== null &&
        !activity.name.toLowerCase().includes(name.toLowerCase())
      ) {
        return false;
      }
      // if days is not null and the activity does not include all of the days, return false
      if (days !== null && !days.every((day) => activity.days.includes(day))) {
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
  },
  getUserBookings: function (activities) {
    // Activities looks like this [ { activity_id: 0 } ]
    return this.ACTIVITIES.filter((activity) =>
      activities.some((a) => a.activity_id === activity.id)
    );
  },
};

export default activities;
