import { Component, Show } from "solid-js";
import Line from "../Line";
import "./Endpoint.css";

export type EndpointProp = {
    url: string,
    type: "GET" | "POST",
    description: string,
    example?: string,
    ratelimit: string,
    deprecated?: boolean,
}

const Endpoint: Component<{ ep: EndpointProp }> = (props) => {
    const endpointName = props.ep.deprecated ? "endpoint endpoint-deprecated" : "endpoint"

    return <div class={endpointName}>
        <div class="endpoint-header">
            <div class="endpoint-url">{props.ep.url}</div>
            <div class={"endpoint-type endpoint-type-" + props.ep.type}>{props.ep.type}</div>
        </div>
        <Line />
        <div class="endpoint-body">
            <div class="endpoint-description">{props.ep.description}</div>
            <div class="endpoint-example">{props.ep.example}</div>
        </div>
        <div class="endpoint-other">
            <div class="endpoint-ratelimit">{props.ep.ratelimit}</div>
            <Show when={props.ep.deprecated}>
                <div class="endpoint-deprecated-icon">⚠️</div>
            </Show>
        </div>
    </div>
};

export default Endpoint;