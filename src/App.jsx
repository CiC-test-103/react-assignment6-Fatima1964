// Import the main Card component
import Card from "./components/card.jsx";

// Import global styles
import "./style.css";

// Root App component
const App = () => {
  return (
    <div className="app">
      {/* Render the Card component */}
      <Card />
    </div>
  );
};

export default App;
