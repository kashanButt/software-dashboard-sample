const data = {
  labels: ["Week #1", "Week #2", "Week #3", "Week #4"],
  datasets: [
    {
      label: "2 Months Ago",
      data: [0, 12, 39, 30],
      borderColor: "rgba(255, 255, 255)",
      borderWidth: 2,
      pointBorderWidth: 5,
    },
    {
      label: "Last Month",
      data: [12, 4, 19, 14],
      borderColor: "palevioletred",
      borderWidth: 2,
      pointBorderWidth: 5,
    },
    {
      label: "This Month",
      data: [19, 30, 24, 40],
      borderColor: "#8a53f8",
      pointBorderWidth: 5,
      borderWidth: 2,
    },
  ],
};

const ctx = document.getElementById("myChart");
Chart.defaults.color = "white";
new Chart(ctx, {
  type: "line",
  data: data,
  options: {
    scales: {
      r: {
        ticks: {
          backdropPadding: {
            x: 200,
            y: 100,
          },
        },
      },
    },
    plugins: {
      colors: "white",
      legend: {
        display: false,
        position: "bottom",
      },
    },
    scales: {
      y: {
        min: 0,
        max: 45,
      },
    },
  },
});
