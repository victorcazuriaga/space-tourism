import { useState } from "react";
import { Header } from "./components/Header";
// import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(10);

  return (
    <>
      <Header />
    </>
  );
}
export default App;
