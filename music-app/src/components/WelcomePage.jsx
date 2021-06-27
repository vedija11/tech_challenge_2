import '../App.css';
import { useHistory } from "react-router-dom";
import home from '../images/home.png';

const WelcomePage = () => {
    let history = useHistory();

    const handleClick = () => {
        history.push("/song")
    }

  return (
    <div className="App">
      <header className="App-header">
        <img src={home} className="App-logo" alt="home"/>
        <h2>Listen to some great tracks!</h2>
        <div>
          <button className="fetch-button" onClick={handleClick}>Fetch Songs</button>
        </div>
      </header>
    </div>

  );
};

export default WelcomePage;
