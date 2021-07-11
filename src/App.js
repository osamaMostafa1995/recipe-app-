import { useEffect, useState } from "react";

import "./App.css";
import Recipe from "./recipe";
function App() {
  const appId = "a1ef64c0";
  const appKey = "efc315219cd0a6367273ba8ee608843f";

  const [recipes, setRecipes] = useState(null);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const change = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch(" ");
  };
  useEffect(() => {
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`
    )
      .then((response) => response.json())
      .then((data) => setRecipes(data.hits));
      console.log(recipes);
  }, [query , recipes]);
  return (
    <div className="App">
      <div className="header-box ">
        <div className="container">
          <div className="row">
            <div className="header col-md-8 text-center">
              <h6>Welcome To Our Food Blog</h6>
              <h1>It's All About Good Food & Taste</h1>
              <p>
                While eating at a restaurant is an enjoyable and convenient
                occasional and dinner daily ...
              </p>
              <form className="search-box" onSubmit={change}>
                <input
                  type="text"
                  className="search-bar"
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="choose your food ..."
                />
                <button type="submit" className="btn">
                  search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <section className="blog-content ">
        <div className="container">
          <h3 className="blog-title text-center">Every Ways To Make <span>{query}</span> </h3>
          <div className="row">
      {recipes &&
        recipes.map((recipe) => (
          <div className="col-md-4 ">
          <Recipe
            className="food"
            title={recipe.recipe.label}
            key={recipe.recipe.calories}
            img={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
          </div>
        ))}
        
        </div>
        </div>
      </section>
     <section className="footer text-center">
<div className="container">
  <div className="row">
    <div className="col-md-12">
      <p>CopyRight @ 2021 FoodBlog </p>
    </div>
  </div>
</div>
     </section>
    </div>
  );
}

export default App;
