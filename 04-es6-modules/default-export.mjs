import fetch from "node-fetch";

async function getData(url) {
    const response = await fetch(url);
    const posts = await response.json();
    return posts;
}

export default getData;