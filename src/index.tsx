import { Component, Match, Switch } from "solid-js";
import { render } from "solid-js/web";
import Header from "./components/Header";
import Explore from "./components/explore/Explore"
import "./main.css";
import Book from "./components/Book";
import API from "./components/api/API";
import Progress from "./components/progress/Progress";
import About from "./components/about/About";

const page = location.pathname;

const Index: Component = () => {
    return <div class="app">
        <Header />
        <Switch fallback={<Explore />}>
            <Match when={page === "/explore"}>
                <Explore />
            </Match>
            <Match when={page === "/api"}>
                <API />
            </Match>
            <Match when={page === "/progress"}>
                <Progress />
            </Match>
            <Match when={page === "/about"}>
                <About />
            </Match>
        </Switch>
        {/* <Book /> */}
    </div>; 
};

render(() => <Index/>, document.getElementById("root"));

