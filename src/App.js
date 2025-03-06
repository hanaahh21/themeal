import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {Outlet} from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from "./utils/Store";
import useOnline from "./utils/useOnline";
import Offline from "./components/Offline";

function App() {

  const online=useOnline();

  if(!online)
  return <Offline/>

  return (
    <Provider store={Store}>
      <div className="App">
      <Header/>
      <Outlet/>
      <Footer/>
      </div>
    </Provider>
    
  );
}

export default App;
