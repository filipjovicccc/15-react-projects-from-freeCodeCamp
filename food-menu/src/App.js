import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))]; //koristimo new Set jaavaScript metodu
//da bi bili u syncu sa nasom bazom podataka, ako se nesto doda jos u podacima automatski ce kod da radi, sto treba uvek da se trudimo u kodu
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
          <Categories categories={categories} filterItems={filterItems} />
          <Menu items={menuItems} />
        </div>
      </section>
    </main>
  );
}

export default App;
