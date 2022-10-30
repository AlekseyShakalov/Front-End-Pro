import { useState } from "react";

import Title from "./components/Title";

function App() {
  const [isOpened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened(true);
  };

  if (isOpened) {
    return (
      <div>
        <Title name="Products" type="bold" />
        <Title name="Employees" type="normal" />
      </div>
    );
  }

  return <button onClick={handleClick}>Open title</button>;
}

export default App;
