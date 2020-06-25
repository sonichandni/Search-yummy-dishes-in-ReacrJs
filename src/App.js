import React, { useEffect, useState } from "react";
import Receipe from "./Receipe";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const API_KEY = "your-key";
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("mango");
  const [receipesRes, setReceipesRes] = useState([]);

  useEffect(() => {
    console.log("use effect");
    getReciepe();
  }, [query]);
  // const [cnt, setCnt] = useState(11);

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getQuery = e => {
    e.preventDefault();
    setQuery({ search });
  };
  const getReciepe = async () => {
    const recipies = await fetch(
      `https://edamam-recipe-search.p.rapidapi.com/search?q=${search}&rapidapi-key=${API_KEY}`
    );
    const data = await recipies.json();

    setReceipesRes(data.hits);
  };
  // const spacing = 11;
  return (
    <div className="component text-center m-4">
      <form onSubmit={getQuery}>
        <input
          className="m-2 w-50"
          type="text"
          name="search"
          onChange={updateSearch}
        />
        <button className="btn btn-primary" type="submit">
          Search
        </button>
        {/* <h1 onClick={()=>setCnt(cnt+1)}>{cnt}</h1> */}
        {/* style={{ marginLeft: spacing + "em" }} */}
      </form>
      <div className="row">
        {receipesRes.map(receipe => (
          <Receipe
            title={receipe.recipe.label}
            image={receipe.recipe.image}
            ingredientLines={receipe.recipe.ingredientLines}
            key={receipe.recipe.uri}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
