import "react-toastify/dist/ReactToastify.css";
import "./components/Expenses.css";
import Card from "./components/Card";

import Expenses from "./components/Expenses";
import Chart from "./components/Chart/Chart";

function App() {
  return (
    <Card className="expenses">
      <Expenses />
    </Card>
  );
}

export default App;
