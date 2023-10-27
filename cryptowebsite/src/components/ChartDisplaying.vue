<template>
    <div class="crypto-chart">
      <h2>1-Hour Candlestick Chart for {{ symbol }}</h2>
      <div class="chart-container">
        <!-- Use 'data' prop instead of 'chart-data' -->
        <line-chart :data="chartData" :options="chartOptions"></line-chart>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { Line } from 'vue-chartjs';
  
  // Register the 'time' scale here
  import { TimeScale, LinearScale, CategoryScale, Title, Tooltip } from 'chart.js';
  
  Chart.register(TimeScale, LinearScale, CategoryScale, Title, Tooltip);
  
  export default {
    components: {
      LineChart: Line,
    },
    data() {
      return {
        symbol: 'BTCUSDT',
        interval: '1h',
        chartData: {
          labels: [], // Initialize labels with an empty array
          datasets: [
            {
              label: 'Price',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              data: [],
            },
          ],
        },
        chartOptions: {
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'hour',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Price',
              },
            },
          },
        },
      };
    },
    mounted() {
      this.fetchCryptoChartData();
    },
    methods: {
      fetchCryptoChartData() {
        const url = `https://api.binance.com/api/v3/klines?symbol=${this.symbol}&interval=${this.interval}`;
  
        axios
          .get(url)
          .then((response) => {
            const chartData = this.chartData;
            chartData.labels = response.data.map((item) => new Date(item[0]));
            chartData.datasets[0].data = response.data.map((item) => parseFloat(item[1]));
  
            // Update the chart
            this.$refs.lineChart.update();
          })
          .catch((error) => {
            console.error('Error fetching chart data:', error);
          });
      },
    },
  };
  </script>
  