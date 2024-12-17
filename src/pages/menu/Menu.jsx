import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HomeButton from "../shared/HomeButton/HomeButton";
import Navbar from "../shared/navigation/navigation.jsx";
import styles from "./Menu.module.css";
import SearchIco from "../shared/icons/Search_ico.svg";
import Button from "../shared/NavigationButton/Button.jsx";
import Clear from '../shared/icons/Clear_ico.svg'

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
      {/* <Navbar /> */}
      <p>Біфштекс мені в меню</p>
      <div>
        <select
          id="group-by"
          value={selectedGroup}
          onChange={handleGroupChange}
        >
          <option value="" disabled>
            Group
          </option>
          <option value="soups">Soups</option>
          <option value="deserts">Deserts</option>
          <option value="fast-food">Fast Food</option>
          <option value="meat">Meat</option>
          <option value="salads">Salads</option>
          <option value="pasta">Pasta</option>
        </select>

        <div className="search-pannel">
          <Button>
            <img className="ico" src={SearchIco} alt="search" />
          </Button>
          <input
            type="text"
            className="search-input"
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
            <img className="clear" src={Clear} alt="clear" />
          </Button>
        </div>
      </div>

      <div>
        
      </div>

      <Link to="/">
        <HomeButton />
      </Link>
    </div>
  );
}

export default Menu;
