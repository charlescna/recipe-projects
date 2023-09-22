import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'

function App() {
  let recipeData = [ {name: "Pizza", Ingredients: "salt"}, {name: "pasta", ingredients: "tomatosauace" }]

  const [recipes, setRecipes] = useState(null);

  useEffect( () => {
    setRecipes(recipeData)
  }, [])


  return (
    <div>
    <h1>Cooking recipes</h1>
    {
      recipes.map( (recipes, i) => {
        return <h2>{recipes.name}</h2>
      })
    }
  </div>

  );
}

export default App;
