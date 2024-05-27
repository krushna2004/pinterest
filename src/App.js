import Header from './components/Header';
import Footer from './components/Footer';
import Explore from './components/Explore';
import CreatePin from './components/CreatePin';
import Search from './components/Search';
import Home from './components/Home';
import {useState} from 'react';
import { HashRouter, Route ,Routes} from 'react-router-dom';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <>
    <HashRouter>
    <Header setSearchResults={setSearchResults}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/explore" element={<Explore/>}/>
      <Route path="/create" element={<CreatePin/>}/>
      <Route path="/search" element={<Search searchResults={searchResults}/>}/>
    </Routes>
    <Footer/>
    </HashRouter>
    
    
    </>
  );
}

export default App;
