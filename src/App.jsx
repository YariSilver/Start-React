
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import Nav from './components/nav';

function App() {
  return (
    <div className='myContainer'>
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
      
    </div>
  );
}

export default App;
