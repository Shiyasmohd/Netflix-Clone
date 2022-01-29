import NavBar from "./Components/Navbar/NavBar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {action,original,comedy,romance} from './Urls'

function App() {

  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={original} title='Netflix Originals' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={comedy} title='Comedy' isSmall />
      <RowPost url={romance} title='Romance' isSmall />
    </div>
  );
}

export default App;