import logo from './logo.svg';
import './App.css';
import Welcome from "./components/Welcome";
import SumNumber from "./components/sumNumber";
import SumFunction from "./components/sumFunction";
import AlertFunction from "./components/alertFunction";
import Basic_Calculator from "./components/basic_Calculator";
function App() {
  return (
    <div >
    <Welcome name={'Admin'} />
      <SumNumber number1 = {2} number2={2}/>
    < SumFunction number1 = {3} number2={3}/>
      <AlertFunction/>
      <Basic_Calculator/>
    </div>
  );
}

export default App;
