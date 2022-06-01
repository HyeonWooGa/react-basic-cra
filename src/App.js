import Button from "./Button";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("render"); // react code is whole re-rendered every time when states are changed by default. So we will learn useEffect
  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <Button onClick={onClick} text={"Countinue"} />
    </div>
  );
}

export default App;
