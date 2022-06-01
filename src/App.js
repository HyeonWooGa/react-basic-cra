import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all the time"); // react code is whole re-rendered every time when states are changed by default. So we will learn useEffect to use api etc something that need to render only once.
  useEffect(() => console.log("I run only once."), []);
  useEffect(() => console.log("I run when 'keyword' changes."), [keyword]);
  useEffect(() => console.log("I run when 'counter' changes."), [counter]);
  useEffect(
    () => console.log("I run when 'keyword' or 'counter changes."),
    [keyword, counter]
  );
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1 className={styles.title}>{counter}</h1>
      <Button onClick={onClick} text={"Countinue"} />
    </div>
  );
}

export default App;
