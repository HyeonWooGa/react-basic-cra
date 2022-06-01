import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [usd, setUsd] = useState(0);
  const regex = /[+-]?\d+(\.\d+)?/g;
  const onChange = (event) => {
    setPrice(event.target.value.match(regex));
    setName(event.target.value.replace(/ .*/, ""));
  };
  const onInput = (event) => {
    setUsd(event.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setPrice(json[0].quotes.USD.price);
        setName("Bitcoin");
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onChange}>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      {loading ? null : (
        <div>
          <input id="usd" value={usd} onInput={onInput} />
          <label htmlFor="usd"> USD</label>
          <input id="coin" value={Math.round((usd / price) * 100) / 100} />
          <label htmlFor="coin"> {name}</label>
        </div>
      )}
    </div>
  );
}

export default App;

/*

  In React Way, We never do state = "value" like this, We must use modifier when change value of state.
*/
