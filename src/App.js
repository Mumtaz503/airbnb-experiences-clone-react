import './App.css';
import NavBar from './NavBar/NavBar';
import Images from './ImagesContainer/Images';
import Experiences from './Experiences/Experiences';
import Challenge from './Challenge1/Challenge';
import Contact from './Contact-challenge/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Images />
      <Experiences />
      <div>
        <Challenge 
          img="/image12.png"
          rating="5.0"
          reviewCount={6}
          country="PL"
          title="life lessons with Katie Zaferes"
          price={136}
        />
      </div>
      {/* <Contact 
        img="/image22.png"
        name="Katie"
        phone="(212) 555 1234"
        email="mr.whiskaz@catnip.meouw"
      />
      <Contact 
        img="/image25.png"
        name="joe"
        phone="(212) 556 8876"
        email="joe@schmoe.com"
      />
      <Contact 
        img="/image28.png"
        name="john"
        phone="(212) 557 1212"
        email="john@doe.com"
      /> */}
    </div>
  );
}

export default App;
