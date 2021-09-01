import { Component, For, Show } from "solid-js";
import "./ProgressItem.css"

export type PItem = {
    name: string,
    progress: "FUTURE" | "PLANNING" | "DEV" | "DONE",
    children?: PItem[],
}

const ProgressItem: Component<{ item: PItem, indent: number }> = (props) => {
    return <div class={`progress-item progress-indent-${Math.min(props.indent, 3)}`}>
        <div class="progress-body">
            <p class="progress-name">{props.item.name}</p>
            <p class={`progress-progress progress-${props.item.progress}`}>{props.item.progress}</p>
        </div>
        <For each={props.item.children}>{(item) => 
            <ProgressItem item={item} indent={props.indent + 1}/>
        }</For>
    </div>;
};

export default ProgressItem;