import Header from './components/Header';
import OurWork from './components/OurWork';
import Team from './components/Team';
import What from './components/What';
import Blog from './components/Blog';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Statistics from './components/Statistics';

function App() {
  return (
    <div className='bg-[#0C1117]'>
      <Header/>
      <What/>
      <OurWork/>
      <Statistics/>
      <Team/>
      <Blog/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
