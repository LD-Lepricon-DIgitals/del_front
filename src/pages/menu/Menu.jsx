import React, { useState, useEffect } from "react";
import Navbar from "../shared/navigation/navigation.jsx";
import styles from "./Menu.module.css";
import SearchIco from "../shared/icons/Search_ico.svg";
import Button from "../shared/NavigationButton/Button.jsx";
import Clear from "../shared/icons/Clear_ico.svg";
import MenuItem from "./menu_item.jsx";
import Burger from "../shared/icons/menu_items/Burger_img.svg";

function Menu() {
  const [selectedGroup, setselectedGroup] = useState("");
  const [inputText, setInputText] = useState("");
  const [isClearButtonOpen, setIsClearButtonOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [menuItems, setMenuItems] = useState([
    {
      name: "Бургер “Біфштекс на грилі”",
      category: "Fast Food",
      price: "10$",
      img: Burger,
    },
    {
      name: "Піца “Мама-Сіта“",
      category: "Fast Food",
      price: "10$",
      img: Burger,
    },
    {
      name: "Паста “358 і один сир”",
      category: "Pasta",
      price: "10$",
      img: Burger,
    },
    {
      name: "Піца “Пармезано, Федольфо”",
      category: "Fast Food",
      price: "10$",
      img: Burger,
    },
    { name: "Стейк “У Галі”", category: "Meat", price: "10$", img: Burger },
    { name: "Суп “Плавилка”", category: "Soups", price: "10$", img: Burger },
    {
      name: "Торт “Зимова вишня”",
      category: "Desserts",
      price: "10$",
      img: Burger,
    },
  ]);

  const handleGroupChange = (e) => {
    setselectedGroup(e.target.value);
  };

  useEffect(() => {
    if (inputText.length !== 0) {
      setIsClearButtonOpen(true);
    } else {
      setIsClearButtonOpen(false);
    }
  }, [inputText]);

  useEffect(() => {
    const savedGroup = localStorage.getItem("selectedGroup") || "All";
    setselectedGroup(savedGroup);
  }, []);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    setMenuItems((prevItems) =>
      prevItems.filter((menuItem) => menuItem.name !== item.name)
    );
  };

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      selectedGroup === "All" || item.category === selectedGroup;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(inputText.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <Navbar cartItems={cartItems} />
      <p className={styles["title"]}>Акція 1 + 1 = 1</p>
      <div className={styles["container"]}>
        <div className={styles["search-container"]}>
          <select
            id="group-by"
            value={selectedGroup}
            onChange={handleGroupChange}
            className={styles["select"]}
          >
            <option value="All" className={styles["select-option"]}>
              All
            </option>
            <option value="Soups" className={styles["select-option"]}>
              Soups
            </option>
            <option value="Desserts" className={styles["select-option"]}>
              Deserts
            </option>
            <option value="Fast Food" className={styles["select-option"]}>
              Fast Food
            </option>
            <option value="Meat" className={styles["select-option"]}>
              Meat
            </option>
            <option value="Salads" className={styles["select-option"]}>
              Salads
            </option>
            <option value="Pasta" className={styles["select-option"]}>
              Pasta
            </option>
          </select>

          <div className={styles["search-pannel"]}>
            <Button>
              <img
                src={SearchIco}
                alt="search"
                className={styles["search-ico"]}
              />
            </Button>
            <input
              type="text"
              className={styles["search-input"]}
              value={inputText}
              placeholder={"Пошук..."}
              onChange={(e) => setInputText(e.target.value)}
              id="search-input"
            />
            <Button
              className={isClearButtonOpen ? "visible" : "hidden"}
              onClick={() => {
                setInputText("");
              }}
            >
              <img className={styles["clear-ico"]} src={Clear} alt="clear" />
            </Button>
          </div>
        </div>

        <div className={styles["menu-container"]}>
          {filteredItems.length === 0 ? (
            <p>Нічого не знайдено</p>
          ) : (
            filteredItems.map((item) => (
              <MenuItem
                key={item.name}
                name={item.name}
                category={item.category}
                price={item.price}
                img={item.img}
                addToCart={addToCart}
              />
            ))
          )}
        </div>
      </div>
      <Link to="/"><HomeButton/></Link>
    </div>
  );
}

export default Menu;
