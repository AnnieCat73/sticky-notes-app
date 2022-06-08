import NoteList from "./components/NoteList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './index.css';

const App = () => {
  return (
    <div className="container">
      <Header />
      <NoteList />
      <Footer />
    </div>
  )
};

export default App;
