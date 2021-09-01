import { Component, For } from "solid-js";
import ProgressItem, { PItem } from "./ProgressItem";

const ProgressList: PItem[] = [
    {
        name: "API",
        progress: "DONE"
    },
    {
        name: "Upload Levelpacks",
        progress: "DONE"
    },
    {
        name: "View Count / Downloads",
        progress: "PLANNING"
    },
    {
        name: "Levelpack screenshot on website",
        progress: "FUTURE"
    },
    {
        name: "Users",
        progress: "FUTURE",
        children: [
            {
                name: "Likes / Stars",
                progress: "FUTURE"
            },
            {
                name: "Comments",
                progress: "FUTURE"
            },
            {
                name: "Profile",
                progress: "FUTURE"
            },
        ]
    },
    {
        name: "Moderation",
        progress: "FUTURE",
        children: [
            {
                name: "Reporting",
                progress: "FUTURE"
            },
        ]
    }
]

const Progress: Component = () => {
    return <div class="progress">
        <p>List of things to do in 5beam:</p>
        <For each={ProgressList}>{(item) => 
            <ProgressItem item={item} indent={0}/>
        }</For>
    </div>;
};

export default Progress;