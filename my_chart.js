const ctx = document.getElementById('myChart').getContext('2d');
const earnings = document.getElementById('earnings').getContext('2d');
const youtube = document.getElementById('youtube').getContext('2d');
const customer = document.getElementById('customer').getContext('2d');

new Chart(ctx, {
  type: 'polarArea',
  data: {
    labels: ['Youtube', 'Insta', 'Facebook', 'Threads', 'Twitter', 'Linkdin'],
    datasets: [{
      label: 'Traffic Source',
      data: [3100, 2800, 1900, 300, 900, 1100],
      backgroundColor: [
        'rgba(165, 165, 141, 1)',
        'rgba(101, 109, 74, 1)',
        'rgba(242, 212, 146, 1)',
        'rgba(42, 111, 151, 1)',
        'rgba(132, 169, 140, 1)',
        'rgba(101, 69, 151, 1)'
      ],
    }]
  },
  
});

new Chart(earnings, {
  type: 'bar',
  data: {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [{
    label: 'Earning',
    data: [900, 800, 500, 200, 700, 100, 300, 500, 450, 370, 190, 680],
    backgroundColor: [
      'rgba(165, 165, 141, 1)',
      'rgba(242, 212, 146, 1)',
      'rgba(101, 109, 74, 1)',
      'rgba(132, 169, 140, 1)',
      'rgba(42, 111, 151, 1)',
      'rgba(101, 69, 151, 1)',
      'rgba(165, 165, 141, 1)',
      'rgba(242, 212, 146, 1)',
      'rgba(101, 109, 74, 1)',
      'rgba(132, 169, 140, 1)',
      'rgba(42, 111, 151, 1)',
      'rgba(101, 69, 151, 1)'
    ],

  }]

  },

});


new Chart(youtube, {
  type: 'line',
  data: {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [{
    label: 'Youtube Per Month Views',
    data: [900, 800, 500, 200, 700, 100, 300, 500, 450, 370, 190, 680],
    fill: false,
    borderColor: 'rgba(127, 79, 36, 1)',
    tension: 0.1,

  }]

  },

});


const mixedChart = new Chart(customer, {
  data: {
    datasets: [{
        type: 'bar',
        label: 'Bar Dataset',
        data: [100, 256, 492, 321, 303, 590, 420, 204, 330, 579, 445, 601],
        backgroundColor: 'rgba(165, 165, 141, 0.6)'
    }, {
        type: 'line',
        label: 'Line Dataset',
        data: [100, 256, 492, 321, 303, 590, 420, 204, 330, 579, 445, 601],
        borderColor: 'rgba(242, 149, 89, 1)'
    }],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },

});