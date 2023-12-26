let baseURL = "http://localhost:3000/posts";

const postForm = document.querySelector(".postsForm");

let newText = document.querySelectorAll(".decoration");
let postsList = document.querySelector(".postsList");

// console.log(baseURL, postForm, newText, postsList);

function DataList(data) {
  postsList.innerHTML = data
    ?.map((item) => {
      `
    <div>
        <h2>${item.title}</h2>
        <h2>${item.author}</h2>
    </div>
    `;
    })
    .join("");
}

const getPosts = () => {
  fetch(baseURL)
    .then((res) => {
      return res;
    })
    .then((data) => {
      console.log(data);
      DataList(data);
    });
};

const submitForm = (e) => {
  e.preventDefault();
  let object = {};
  for (let i of newText) {
    object[i.name] = i.value;
  }
  console.log(object);
};

postForm.addEventListener("submit", submitForm);
