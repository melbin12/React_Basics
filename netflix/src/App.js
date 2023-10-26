import './App.css';
import Row from './components/Row';
import requests from './requests';
function App() {
  return (
    <div >
      <h1 style={{color:'red'}}>Netflix</h1>
      <Row title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals}/>
    </div>
  );
}

export default App;
