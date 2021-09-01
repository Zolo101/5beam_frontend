import { Component, createSignal, createEffect, For } from "solid-js";
import "./Tab.css";

export type Tab = {
    name: string,
    link: string
}

const Tabs: Component<{ tabs: Tab[] }> = (props) => {
    const [tabs] = createSignal(props.tabs)
    const [currentTab, setCurrentTab] = createSignal(props.tabs[0])
    createEffect(() => {
        // replace URL
        // window.location.replace(location.origin + currentTab().link)
        console.log("Current Tab", currentTab().link)
    })

    return <div class="tablist">
        <For each={tabs()}>{(tab) =>
            <div class="tab">
                <a class="tab-link" href={tab.link}>{tab.name}</a>
                {/* <span class="seperator">|</span> */}
            </div>
        }</For>
    </div>
};

export default Tabs;