import { Component } from "solid-js";
import "./Book.css";
import background from "../../img/background.png";

const Book: Component = () => {
    return <img class="book" src={background}></img>
};

export default Book;