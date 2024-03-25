import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Item from "./Item";
import AddItem from "./AddItem";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const snacksData = await SnackOrBoozeApi.getSnacks();
      const drinksData = await SnackOrBoozeApi.getDrinks();

      setSnacks(snacksData);
      setDrinks(drinksData);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  // Function to add a new drink/snack
  const addItem = async (formData, type) => { 
    try {
      const newItem = await SnackOrBoozeApi.addItem(formData, type); 
      console.log("Item added:", newItem);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            
            <Route exact path="/snacks">
              <Menu items={snacks} baseUrl="/snacks" title="Snacks" />
            </Route>

            <Route exact path="/drinks">
              <Menu items={drinks} baseUrl="/drinks" title="Drinks" />
            </Route>

            <Route exact path="/snacks/:id">
              <Item items={snacks} baseUrl="/snacks" cantFind="/snacks" />
            </Route>

            <Route exact path="/drinks/:id">
              <Item items={drinks} baseUrl="/drinks" cantFind="/drinks" />
            </Route>

            <Route exact path="/add-snack">
              <AddItem addItem={addItem} type="snacks" />
            </Route>

            <Route exact path="/add-drink">
              <AddItem addItem={addItem} type="drinks" />
            </Route>

            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
