import Header from './components/Header';
import Price from './components/Price'
import MusicBox from './components/MusicBox'
import { useState, useEffect } from "react";

function App() {


  const [price, setPrice] = useState({ usd: 0, btc: 0, eth: 0 });

  const updatePrice = async () => {
    const resp = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=Handshake&vs_currencies=USD,BTC,ETH');
    const d = await resp.json();
    setPrice(d.handshake)
  };

  useEffect(() => {
    updatePrice();
  }, [])


  const name = "ids";

  return (
    <div className="container">
      <Header name={name} />
      <Price price={price} />
      <MusicBox />
    </div>
  );
}

export default App;
