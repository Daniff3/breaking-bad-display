import './App.css';
import AppRouter from './characters/CharacterRouter';
import Footer from './ui-components/Footer';

function App() {
  return (
    <div className="container">
      <AppRouter/>
      <Footer />
    </div>
  );
}

export default App;
