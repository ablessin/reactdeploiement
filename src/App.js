import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import db from './config/firebase';

function App() {

  console.log(db)

  // const [valueRating] = useCollection(
  //   db
  //     .collection("rate"),
  //   {
  //     snapshotListenOptions: { includeMetadataChanges: true },
  //   });

  //   console.log(valueRating)
   /*  const rateIndicators = valueRating?.docs.map((d) => d.data())[0];
  function incValue(e) {
   e.preventDefault();
   console.log('Le lien a été cliqué.');
  }*/

  


 const [value, setValue] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        Rate my work (Be cool please !👻)
        <button onClick={() => setValue(value+1)}>
          {value} / {value} ! Merci 🥰
        </button>

      </header>
    </div>
  );
  }


export default App;
