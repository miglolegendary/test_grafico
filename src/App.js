import './App.css';
import {Bar,Line} from 'react-chartjs-2';


function App() {
  let array = [{"MERCADO":"Primario Privado","CODIGO_MERCADO":"p","TIPO_RENTA":"F","TIPO_TITULO":"P","MONTO":"454000","MONTO_ANTERIOR":"1949387.82","FECHAANTERIOR":"11/11/2020","FECHAACTUAL":"12/11/2020","TIP_MERCA":"pP1"},{"MERCADO":"Primario Pu00fablico","CODIGO_MERCADO":"p","TIPO_RENTA":"F","TIPO_TITULO":"PC","MONTO":"0","MONTO_ANTERIOR":"0","FECHAANTERIOR":"11/11/2020","FECHAACTUAL":"12/11/2020","TIP_MERCA":"pPC1"},{"MERCADO":"Primario Renta Variable Privado","CODIGO_MERCADO":"1","TIPO_RENTA":"V","TIPO_TITULO":"P","MONTO":"0","MONTO_ANTERIOR":"0","FECHAANTERIOR":"11/11/2020","FECHAACTUAL":"12/11/2020","TIP_MERCA":"1P1"},{"MERCADO":"Registro Operaciu00f3n Intl. Privado","CODIGO_MERCADO":"i","TIPO_RENTA":"F","TIPO_TITULO":"P","MONTO":"0","MONTO_ANTERIOR":"0","FECHAANTERIOR":"11/11/2020","FECHAACTUAL":"12/11/2020","TIP_MERCA":"iP1"},{"MERCADO":"Registro Operaciu00f3n Intl. Pu00fablico","CODIGO_MERCADO":"i","TIPO_RENTA":"F","TIPO_TITULO":"PC","MONTO":"2820000","MONTO_ANTERIOR":"0","FECHAANTERIOR":"11/11/2020","FECHAACTUAL":"12/11/2020","TIP_MERCA":"iPC1"},{"MERCADO":"Registro Operaciu00f3n Intl. Renta Variable","CODIGO_MERCADO":"i","TIPO_RENTA":"V","TIPO_TITULO":"P","MONTO":"38347.57","MONTO_ANTERIOR":"51955.16","FECHAANTERIOR":"11/11/2020","FECHAACTUAL":"12/11/2020","TIP_MERCA":"iP5"},{"MERCADO":"Reportos Privado","CODIGO_MERCADO":"r","TIPO_RENTA":"F","TIPO_TITULO":"P","MONTO":"438636.04","MONTO_ANTERIOR":"29840.32","FECHAANTERIOR":"11/11/2020","FECHAACTUAL":"12/11/2020","TIP_MERCA":"rP1"},{"MERCADO":"Reportos Pu00fablico","CODIGO_MERCADO":"r","TIPO_RENTA":"F","TIPO_TITULO":"PC","MONTO":"591400.07","MONTO_ANTERIOR":"383203.47","FECHAANTERIOR":"11/11/2020","FECHAACTUAL":"12/11/2020","TIP_MERCA":"rPC1"},{"MERCADO":"Secundario Privado","CODIGO_MERCADO":"s","TIPO_RENTA":"F","TIPO_TITULO":"P","MONTO":"8396170.83","MONTO_ANTERIOR":"1230994","FECHAANTERIOR":"11/11/2020","FECHAACTUAL":"12/11/2020","TIP_MERCA":"sP1"},{"MERCADO":"Secundario Pu00fablico","CODIGO_MERCADO":"s","TIPO_RENTA":"F","TIPO_TITULO":"PC","MONTO":"0","MONTO_ANTERIOR":"1062439.75","FECHAANTERIOR":"11/11/2020","FECHAACTUAL":"12/11/2020","TIP_MERCA":"sPC1"},{"MERCADO":"Secundario Renta Variable Privado","CODIGO_MERCADO":"2","TIPO_RENTA":"V","TIPO_TITULO":"P","MONTO":"2400","MONTO_ANTERIOR":"9988768.69","FECHAANTERIOR":"11/11/2020","FECHAACTUAL":"12/11/2020","TIP_MERCA":"2P1"}];
  let myTemp = array.map((dt=>{return(dt.MONTO)}));
  console.log(myTemp)
  

const genData = () => ({
  labels: array.map((dt=>{return(dt.FECHAACTUAL)})),
  datasets: [
    {
      type: 'line',
      label: 'Variación',
      borderColor: 'green',
      borderWidth: 2,
      fill: false,
      data: myTemp,
    },
    {
      type: 'bar',
      label: 'Por día en Millones de USD',
      backgroundColor: 'blue',
      data: myTemp,
      borderColor: 'white',
      borderWidth: 2,
    }
  ],
})

const options2 = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}
  
  return (
    <div className="App">
      <header className="App-header">        
        <h1>Demo Gráfico ChartJS</h1>
        <Bar data={genData} options={options2} />
      </header>
    </div>
  );
}

export default App;
