import "./App.css";



import Header from "./Components/Header";
import Emailsnav from "./Components/Emailstype-nav";
import Main from "./Components/Main";

function App(): JSX.Element {
  return (
    <div className="app">

      <Header />
      <Emailsnav />
      <Main />
    </div>
  );
}

export default App;
