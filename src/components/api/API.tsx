import { Component, For } from "solid-js";
import { EndpointProp } from "./Endpoint";
import Endpoint from "./Endpoint";

const allRateLimit = "1000 requests per 10 minutes";
const uploadRateLimit = "5 requests per 1 minutes";

const EndpointList: EndpointProp[] = [
    {
        url: "api/level",
        type: "GET",
        description: "Get levelpack description based on ID.",
        example: "/api/level/0",
        ratelimit: allRateLimit
    },
    {
        url: "api/level/page",
        type: "GET",
        description: "Get 8 levelpacks (both description and data) by page.",
        example: "/api/level/page/0",
        ratelimit: allRateLimit
    },
    {
        url: "api/level/get",
        type: "GET",
        description: "Get levelpack data based on ID.",
        example: "/api/level/get/0",
        ratelimit: allRateLimit
    },
    {
        url: "api/upload",
        type: "POST",
        description: "Upload levelpack.",
        ratelimit: uploadRateLimit
    }
]

const API: Component = () => {
    return <div class="api">
        <p>Endpoints:</p>
        <For each={EndpointList}>{(endpoint) => 
            <Endpoint ep={endpoint}/>
        }</For>
    </div>;
};

export default API;