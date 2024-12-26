import React, { useState, useEffect,useContext} from "react";
import { CartContext } from "../../context/CartContext";
import Navbar from "../shared/navigation/navigation.jsx";
import styles from "./Menu.module.css";
import SearchIco from "../shared/icons/Search_ico.svg";
import Button from "../shared/NavigationButton/Button.jsx";
import Clear from "../shared/icons/Clear_ico.svg";
import MenuItem from "./menu_item.jsx";
import { Link } from "react-router-dom";
import HomeButton from "../shared/HomeButton/HomeButton.jsx";
import axiosClient from "../../api/axios_queries/axios.js";
import { Requests } from "../../api/axios_queries/requests.js";
import { useLocation } from "react-router-dom";

function Menu() {

  const location = useLocation();
  const { group = "all", searchText = "" } = location.state || {};
  const [selectedGroup, setselectedGroup] = useState(group ?? "all");
  const [inputText, setInputText] = useState(searchText ?? "");
  const [isClearButtonOpen, setIsClearButtonOpen] = useState(false);
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const requests = new Requests(axiosClient);
  const { cartItems, addToCart } = useContext(CartContext);


  useEffect(() => {
    const getDishes = async () => {
      try {
        const response = await requests.getDish();
        console.log("dishes are executed successfully", response.data);
        setDishes(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching dish data:", error);
      }
    };
    getDishes();
  }, []);

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
  const filteredItems = dishes.filter((item) => {
    const matchesCategory =
      selectedGroup === "all" || item.dish_category === selectedGroup;
    const matchesSearch = item.dish_name
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
            <option value="all" className={styles["select-option"]}>
              All
            </option>
            <option value="soup" className={styles["select-option"]}>
              Soup
            </option>
            <option value="dessert" className={styles["select-option"]}>
              Dessert
            </option>
            <option value="meat" className={styles["select-option"]}>
              Meat
            </option>
            <option value="salad" className={styles["select-option"]}>
              Salad
            </option>
            <option value="pasta" className={styles["select-option"]}>
              Pasta
            </option>
            <option value="pizza" className={styles["select-option"]}>
              Pizza
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
          {loading ? (
            <p className={styles["message"]}>Завантаження...</p>
          ) : filteredItems.length === 0 ? (
            <p className={styles["message"]}>Нічого не знайдено</p>
          ) : (
            filteredItems.map((item) => (
              <MenuItem
                dish_id={item.id}
                dish_name={item.dish_name}
                dish_category={item.dish_category}
                dish_price={item.dish_price}
                dish_photo={item.dish_photo}
                addToCart={addToCart}
              />
            ))
          )}
        </div>
      </div>
      <Link to="/">
        <HomeButton />
      </Link>
    </div>
  );
}

export default Menu;
