/** Component Imports */

import ArticleCard from './components/ArticleCard';
import "./style.css"; 

const App = () => {
  return (
    <div className="container">
      <ArticleCard />
    </div>
  );
};

export default App;




/**
 * This is the entry point for your react-app
 *  1. We strongly recommend comparmentalizing your code into Components
 *  2. We strongly recommend putting those within the /components folder
 *  3. We strongly recommend using a modular-approach to CSS:
 *    - An example has been provided for you, see the 'Example' component
 *    - The 'Example.jsx' component comes with an 'Example.module.css'
 *    - Pay attention to variable file import (gives access to CSS variables)
 *    - Pay special attention to how we apply the className from the imported 'styles' 
 */

 