import NavigationBar from "./components/NavigationBar"
import Footer from "./components/Footer"
import CareerPage from "./pages/Careers"
import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <CareerPage />
      <Footer />
    </div>
  );
}

export default App;
