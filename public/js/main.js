const output = document.querySelector("#output");
const button = document.querySelector("#get-post-btn");
const form = document.querySelector("#form");

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

//submit new post
async function addPost(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const title = formData.get("title");

  if (!title.trim()) {
    alert("Title cannot be empty");
    return;
  }

  try {
    const res = await fetch("http://localhost:8000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    if (!res.ok) {
      throw new Error("failed to add post");
    }
    const newPost = await res.json();

    const postEl = document.createElement("div");
    postEl.textContent = newPost.title;
    postEl.style.padding = "10px";
    postEl.style.marginBottom = "10px";
    postEl.style.border = "1px solid #ccc";
    output.appendChild(postEl);
    getPosts();
  } catch (error) {
    console.error("Could not add post:", error.message);
  }
}

//event listners
button.addEventListener("click", getPosts);
form.addEventListener("submit", addPost);
