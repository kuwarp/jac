
import Navbar from './components/navbar/Navbar';
import Header from './containers/header/Header';
import Slide from './containers/slide/Slide';
import 'bootstrap/dist/css/bootstrap.min.css';
import Whyauto from './containers/jainauto/Whyauto';
import Possibility from './containers/yakuza/Possibility';
import CTA from './components/dealership/CTA';
import Brands from './containers/Brands/Brands';
import Footer from './containers/footer/Footer';
import './App.css';
function App() {
  return (
    <div className="App">
      <div className='gradient_bg'>
      <Navbar/>
      <Header/>
      </div>
      <Slide/>
      <Whyauto/>
      <Possibility/>
      <CTA/>
      <Brands/>
      <Footer/>
    </div>
  );
}

export default App;
