import { useCollectionData } from "react-firebase-hooks/firestore";
import "./App.css";
import db from "./config/firebase";
import logo from "./logo.svg";
import firebase from "firebase";

function App() {
  const [value, loading] = useCollectionData(db.collection("rate"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const plusOne = () => {
    db.collection("rate")
      .limit(1)
      .get()
      .then((query) => {
        db.collection("rate")
          .doc(query.docs[0].id)
          .set({
            value: Number(value[0].value + 1),
          });
      });
  };
  const signIn = () => {
    firebase
      .auth()
      .signInAnonymously()
      .then(() => {
        console.log("connected");
      });
  };

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
      console.log("deconnected");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="App">
      )
      <header className="App-header">
        <button className="button" onClick={signIn}>
          Connexion
        </button>
        <button className="button" onClick={signOut}>
          Déconnexion
        </button>
        {loading && <p>Chargement ...</p>}
        {!loading && (
          <>
            <img src={logo} className="App-logo" alt="logo" />
            Rate my work (Be cool please !👻)
            <button className="button" onClick={plusOne}>
              {value?.[0].value} / {value?.[0].value} ! Merci 🥰
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
