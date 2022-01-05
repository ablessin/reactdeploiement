import logo from './logo.svg';
import './App.css';
import app from "firebase/compat/app";
import { useCollection } from "react-firebase-hooks/firestore";

function App() {
  const db = app.firestore();

  const [valueRating] = useCollection(
    db
      .collection("rate"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    });
     const rateIndicators = valueRating?.docs.map((d) => d.data())[0];
  function incValue(e) {
   e.preventDefault();
   console.log('Le lien a été cliqué.');
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        Rate my work (Be cool please !👻)
        <button onClick={incValue}>
          {rateIndicators} / {rateIndicators} ! Merci 🥰
        </button>

      </header>
    </div>
  );
  }


export default App;
