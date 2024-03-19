const Utils = {
    CHART_COLORS: {
      red: 'rgb(255, 99, 132)',
      orange: 'rgb(255, 159, 64)',
      yellow: 'rgb(255, 205, 86)',
      green: 'rgb(75, 192, 192)',
      blue: 'rgb(54, 162, 235)',
    },
  
    numbers: function(cfg) {
      const data = [];
      for (let i = 0; i < cfg.count; i++) {
        data.push(Math.floor(Math.random() * (cfg.max - cfg.min + 1)) + cfg.min);
      }
      return data;
    }
  };
  
  export default Utils;
  