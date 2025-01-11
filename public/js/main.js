const output = document.querySelector("#output");
const button = document.querySelector("#get-post-btn");

//Get and show posts
async function showPosts() {
  const res = await fetch("https//localhost:8000/api/posts");
  if (!res) {
    throw new Error("Failed to fetch posts");
  }
  const posts = await res.json();
  output.innerHTML = "";

  posts.forEach((post)=>{
    const postElement = document.createElement("div");
  })
}
