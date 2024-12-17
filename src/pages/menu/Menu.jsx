import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../shared/navigation/navigation.jsx";
import styles from "./Menu.module.css";
import SearchIco from "../shared/icons/Search_ico.svg";
import Button from "../shared/NavigationButton/Button.jsx";
import Clear from "../shared/icons/Clear_ico.svg";
import MiniNavi from "../shared/navigation/mini-navi/mini_navi.jsx";
import MenuItem from "./menu_item.jsx";
import Burger from "../shared/icons/menu_items/Burger_img.svg";

function Menu() {
  const [selectedGroup, setselectedGroup] = useState("");
  const [inputText, setInputText] = useState("");
  const [isClearButtonOpen, setIsClearButtonOpen] = useState(false);

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

  return (
    <div>
      <div className={styles["navi-container"]}>
        <p className={styles["title"]}>Акція 1 + 1 = 1</p>
        <MiniNavi />
      </div>
      <div className={styles["container"]}>
        <div className={styles["search-container"]}>
          <select
            id="group-by"
            value={selectedGroup}
            onChange={handleGroupChange}
            className={styles["select"]}
          >
            <option value="" disabled className={styles["select-option"]}>
              Group
            </option>
            <option value="soups" className={styles["select-option"]}>Soups</option>
            <option value="deserts" className={styles["select-option"]}>Deserts</option>
            <option value="fast-food" className={styles["select-option"]}>Fast Food</option>
            <option value="meat" className={styles["select-option"]}>Meat</option>
            <option value="salads" className={styles["select-option"]}>Salads</option>
            <option value="pasta" className={styles["select-option"]}>Pasta</option>
          </select>

          <div className={styles["search-pannel"]}>
            <Button>
              <img src={SearchIco} alt="search" className={styles["search-ico"]} />
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
          <MenuItem
            name="Бургер “Біфштекс на грилі”"
            category="Fast Food"
            price="10$"
            img={Burger}
          />
          <MenuItem
            name="Піца “Мама-Сіта“"
            category="Fast Food"
            price="10$"
            img={Burger}
          />
          <MenuItem
            name="Паста “358 і один сир”"
            category="Pasta"
            price="10$"
            img={Burger}
          />
          <MenuItem
            name="Піца “Пармезано, Федольфо”"
            category="Fast Food"
            price="10$"
            img={Burger}
          />
          <MenuItem
            name="Стейк “У Галі”"
            category="Meat"
            price="10$"
            img={Burger}
          />
          <MenuItem
            name="Суп “Плавилка”"
            category="Soups"
            price="10$"
            img={Burger}
          />
          <MenuItem
            name="Торт “Зимова вишня”"
            category="Desserts"
            price="10$"
            img={Burger}
          />
        </div>
      </div>
    </div>
  );
}

export default Menu;
