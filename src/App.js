import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>

{/* <Navbar title="TextUtils" aboutText="TextUtils"/> */}
<Navbar title="TextUtils"/>
<div className="container my-3" >

<Textform heading="Enter the text to analyze below"/>
</div>
</>
  );
}

export default App;
