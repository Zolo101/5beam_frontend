import { Component } from "solid-js";
import Line from "./Line";
import Tabs, { Tab } from "./Tab";

const TabList: Tab[] = [
    {
        name: "explore",
        link: "/"
    },
    {
        name: "api",
        link: "/api"
    },
    {
        name: "progress",
        link: "/progress"
    },
    {
        name: "about",
        link: "/about"
    }
]


const Header: Component = () => {
    return <div class="header">
        <div class="title">
            <h1>5beam 2021</h1>
            <h2>slightly less bare bones version</h2>
        </div>
        <Tabs tabs={TabList} />
        <Line />
    </div>
};

export default Header;