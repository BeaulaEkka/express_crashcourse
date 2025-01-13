const output = document.querySelector("#output");
const button = document.querySelector("#get-post-btn");

//Get and show posts
async function showPosts() {
  try {
    const res = await fetch("https//localhost:8000/api/posts");
    if (!res) {
      throw new Error("Failed to fetch posts");
    }
    const posts = await res.json();
    output.innerHTML = "";

    posts.forEach((post) => {
      const postEl = document.createElement("div");
      postEl.textContent = post.title;
      output.appendChild(postEl);
    });
  } catch (error) {
    console.log("Error fetching posts:", error);
  }
}

//Event Listners
button.addEventListners("click", showPosts);
