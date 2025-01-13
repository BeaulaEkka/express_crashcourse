const output = document.querySelector("#output");
const button = document.querySelector("#get-post-btn");

async function getPosts() {
  try {
    const res = await fetch("http://localhost:8000/api/posts");
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const posts = await res.json();
    output.innerHTML = "";

    posts.forEach((post) => {
      const postEl = document.createElement("div");
      postEl.textContent = post.title;
      postEl.style.padding = "10px";
      postEl.style.marginBottom = "10px";
      postEl.style.border = "1px solid #ccc";
      output.appendChild(postEl);
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

//event listners
button.addEventListener("click", getPosts);
