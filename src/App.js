import './App.css';
import NavBar from './NavBar/NavBar';
import Images from './ImagesContainer/Images';
import Experiences from './Experiences/Experiences';
import CardComponent from './Challenge1/CardComponent';
import Contact from './Contact-challenge/Contact';
import Challenge2 from './Challenger2/Challenge2';

function App() {
  return (
    <div className="App">
      {/* <Challenge2 /> */}
      <NavBar />
      <Images />
      <Experiences />
      <CardComponent />
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

//Build all the remaining experiences using props
