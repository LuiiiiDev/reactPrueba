import './App.css';
import Acorrdion from './components/Acorrdion';
import Buttons from './components/Buttons';
import Card from './components/Card';
import CardGroup from './components/CardGroup';
import Carousel from './components/Carousel';
import Dividers from './components/Dividers';
import KitchenSink from './components/KitchenSink';
import Nesting from './components/Nesting';
import SpecialTitle from './components/SpecialTitle';
import Toggle from './components/Toggle';


function App() {
  return (
    <div>
      <Acorrdion/>
      <Dividers/>
      <Buttons/>
      <Toggle/>
      <Nesting/>
      <Card/>
      <KitchenSink/>
      <SpecialTitle/>
      <CardGroup/>
      <Carousel/>
    </div>
  );
}

export default App;
