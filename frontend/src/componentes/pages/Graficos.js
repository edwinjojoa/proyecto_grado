import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Graficos = () => {
  const pieChartRef = useRef(null);
  const barChartRef = useRef(null);
  const pointChartRef = useRef(null);

  useEffect(() => {
    const renderCharts = () => {
      // Destruir los gráficos anteriores si existen
      if (pieChartRef.current) {
        pieChartRef.current.destroy();
      }

      if (barChartRef.current) {
        barChartRef.current.destroy();
      }

      if (pointChartRef.current) {
        pointChartRef.current.destroy();
      }

      const pieCtx = document.getElementById('pie-chart').getContext('2d');
      const barCtx = document.getElementById('bar-chart').getContext('2d');
      const pointCtx = document.getElementById('point-chart').getContext('2d');

      // Datos y opciones del gráfico de pie
      const pieData = {
        labels: ['Terneros', 'Vacas', 'Toros'],
        datasets: [
          {
            data: [20, 32, 3],
            backgroundColor: [ 'rgba(75, 192, 192, 0.6)', 'orange', '#2ECC71'],
          },
        ],
      };

      const pieOptions = {
        responsive: true,
        maintainAspectRatio: false,
      };

      // Datos y opciones del gráfico de barras
      const barData = {
        labels: ['Holstein', 'Jersey', 'Normando','Pardo suizo'],
        datasets: [
          {
            label: 'cantidad',
            data: [10, 25, 15,5],
            backgroundColor: ['#FF5733', '#F7DC6F', '#2ECC71','#3498DB'],
          },
        ],
      };

      const barOptions = {
        responsive: true,
        maintainAspectRatio: false,
      };

      // Datos y opciones del gráfico de puntos
      const pointData = {
        labels: ['1 semana', '2 semana ', ' 3 semana','4 semana','5 semana'],
        datasets: [
          {
            label: 'litros',
            data: [20, 18, 23,30,20],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointBorderColor: '#fff',
            pointRadius: 5,
            pointHoverRadius: 8,
          },
        ],
      };

      const pointOptions = {
        responsive: true,
        maintainAspectRatio: false,
      };

      pieChartRef.current = new Chart(pieCtx, {
        type: 'pie',
        data: pieData,
        options: pieOptions,
      });

      barChartRef.current = new Chart(barCtx, {
        type: 'bar',
        data: barData,
        options: barOptions,
      });

      pointChartRef.current = new Chart(pointCtx, {
        type: 'line',
        data: pointData,
        options: pointOptions,
      });
    };

    renderCharts();
  }, []);

  return (
    <><br /><br/><div style={{ display: 'flex', justifyContent: 'space-between' }}>
     
      <div style={{ width: '400px', height: '400px' }}>
      <h2> TIPOS CATEGORIAS </h2><br/>
        <canvas id="pie-chart" />
      </div>
      <div style={{ width: '400px', height: '400px' }}>
      <h2> PRODUCCION DE LECHE </h2><br/>
        <canvas id="point-chart" />
      </div>
      <div style={{ width: '400px', height: '400px' }}>
      <h2> TIPO DE RAZAS </h2><br/>
        <canvas id="bar-chart" />
      </div>
    </div><br/><br/>
    <br/><br/>
    </>
  );
};

export default Graficos;
