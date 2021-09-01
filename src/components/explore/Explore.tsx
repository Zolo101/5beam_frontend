import { Component, Suspense } from "solid-js";
import { APITables } from "../../fetchpage";
import "./Explore.css"

const Explore: Component = () => {
    return <div class="explore">
        <Suspense fallback={<p class="loading">Loading...</p>}>
            <APITables/>
        </Suspense>
    </div>;
};

export default Explore;