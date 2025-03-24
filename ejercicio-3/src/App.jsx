import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Calc from './Components/Calc'
import Todo from "./Components/To-do/Todo";
import Listado from "./Components/listado-estudiantes/Listado";


function App() {
  return (
    <>
      <Calc/>
      <Todo/>
      <Listado/>
    </>
  );
}

export default App;
