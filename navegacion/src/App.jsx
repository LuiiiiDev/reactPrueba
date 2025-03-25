import { BrowserRouter as Router, Routes, Route } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css"
import Listado from "./components/listado-estudiantes/Listado"
import Nav from "./components/Nav";

import TodoList from "./components/To-do/Todo";
import Calculator from "./components/Calc";
import Card from "./components/Card"; 

import Accordion from "./components/20-com/Acorrdion";
import Btnspinner from "./components/20-com/Bttnspinner";
import Buttons from "./components/20-com/Buttons";
import CardGroup from "./components/20-com/CardGroup";
import Carousel from "./components/20-com/Carousel";
import Collapse from "./components/20-com/Colapse";
import Dividers from "./components/20-com/Dividers";
import Growing from "./components/20-com/Growing";
import KitchenSink from "./components/20-com/KitchenSink";
import List from "./components/20-com/List";
import Modal from "./components/20-com/Modal";
import Nesting from "./components/20-com/Nesting";
import Pagination from "./components/20-com/Pagination";
import Popover from "./components/20-com/Popover";
import SpecialTitle from "./components/20-com/SpecialTitle";
import Spinner from "./components/20-com/Spinner";
import Tab from "./components/20-com/Tab";
import ToastB from "./components/20-com/ToastB";
import Toggle from "./components/20-com/Toggle";

function ComponentsPage() {
  return (
    <div>
      <Accordion />
      <Btnspinner />
      <Buttons />
      <CardGroup />
      <Carousel />
      <Collapse />
      <Dividers />
      <Growing />
      <KitchenSink />
      <List />
      <Modal />
      <Nesting />
      <Pagination />
      <Popover />
      <SpecialTitle />
      <Spinner />
      <Tab />
      <ToastB />
      <Toggle />
    </div>
  );
}

function App() {
  return (
    <>
      <Nav />
      <Router>
        <Routes>
          <Route path="/listado" element={<Listado />} />

          <Route path="/20-com" element={<ComponentsPage />} />
          
          <Route path="/todo-list" element={<TodoList />} />

          <Route path="/calculator" element={<Calculator />} />

          <Route path="/card" element={<Card />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
