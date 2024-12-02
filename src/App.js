import logo from "./logo.svg";
import "./App.css";
import Componente from "./pages/Componente";
import NovoComponente from "./pages/NovoComponente";

function App() {
  const n = 10;
  return (
    <div className="App">
      <NovoComponente/>
      <Componente/>
      <h1>Meu incrivel texto </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        blanditiis deleniti rerum in quia ad sapiente inventore officiis.
        Blanditiis debitis optio cupiditate quo nihil provident corrupti ratione
        animi eaque a! ,
      </p>
      <h2 style={{ color: "goldenrod", backgroundColor: "black" }}>
        O mesmo texto 2
      </h2>
      <h3  style={
        n >= 10 ? {color:"green", backgroundColor:"yellow"}
        : {color:"red", backgroundColor:"blue"}
      }>o texto tá diminuindo </h3>
      <h3  style={
        n <- 10 ? {color:"green", backgroundColor:"yellow"}
        : {color:"red", backgroundColor:"blue"}
      }>o texto tá diminuindo </h3>
      
    </div>
  );
}

export default App;
