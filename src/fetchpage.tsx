import { Component, createResource, createSignal, For, lazy } from "solid-js";

type APIResponse = {
    status: "success" | "fail" | "ratelimit";
    data: Levelpack[];
}

type Levelpack = {
    ID: string,
    name: string,
    author: string,
    date: string,
    version: string
}

// async function getLevelpacksJSON() {

async function refresh(page: number) {
    const apiresult = await fetch(`https://5beam.zelo.dev/api/level/page/${page}`);
    const levelpacks = await apiresult.json() as APIResponse;
    console.log(levelpacks)
    switch (levelpacks.status) {
        case "success":
            break;

        case "fail":
            alert("Error! Failed to get API results.");
            break;

        case "ratelimit":
            alert("Error! You are being ratelimited.");
            break;
    }
    let data: Levelpack[] = JSON.parse(levelpacks.data as any)
    data = data.map((levelpack) => JSON.parse(levelpack as any) as Levelpack)
    return data;
}

// <{ promisedLevelpacks: Promise<APIResponse> }>
export const APITables: Component = () => {
    const [page, setPage] = createSignal(0);
    const [levelpacks] = createResource(page, refresh);
    console.log(levelpacks());

    return <div class="api-table">
        <div class="explore-buttons">
            <button onClick={() => setPage(Math.max(0, page() - 1))}>Prev Page</button>
            <span>{page() + 1}</span>
            <button onClick={() => setPage(page() + 1)}>Next Page</button>
        </div>
        <table>
            <tbody>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Date</th>
                    <th>Version</th>
                </tr>
            </tbody>
            <For each={levelpacks()}>{(levelpack) =>
                <tr>
                    <td className="lp-id">{levelpack.ID}</td>
                    <td className="lp-name">{levelpack.name}</td>
                    <td className="lp-author">{levelpack.author}</td>
                    <td className="lp-date">{new Date(Number(levelpack.date)).toUTCString()}</td>
                    <td className="lp-version">{levelpack.version}</td>
                </tr>
            }</For>
        </table>
    </div>
};

export default refresh;