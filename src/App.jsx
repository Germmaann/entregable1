import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import db from "./db/quotes.json";
import QuoteBox from './components/QuoteBox';

const arrayColors = ["#042940", "#005C53", "#9FC131", "#DBF227", "#D6D58E", "#248EA6", "#25C7D9", "#F2D338", "#F2622E", "#F23030"]

const getRandom = (arrayElements) => {
  const quantityValues = arrayElements.length;
  const randomIndex = Math.floor(Math.random() * quantityValues);
  return arrayElements[randomIndex];
};

function App() {

  const [quote, setQuote] = useState(getRandom(db));
  
  const [color, setColor] = useState(getRandom(arrayColors))

  const newQuote = () => {
    setQuote(getRandom(db));
    setColor(getRandom(arrayColors))
  }

  console.log(getRandom(db))
  return (
    <div className='App' style={{backgroundColor: color}}>
      <QuoteBox 
      quote={quote} 
      newQuote={newQuote} 
      color={color}/>
    </div>
  );
};

export default App;
