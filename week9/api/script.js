const getComments = () => {
  let comments = localStorage.getItem("comments");

  return comments ? JSON.parse(comments) : []; //if else
};
const saveComment = (comments) => {
  localStorage.setItem("comments", JSON.stringify(comments));
};

const displayComments = () => {
  const comments = getComments();
  const commentDIV = document.querySelector(".comment");
  commentDIV.innerHTML = "";

  comments.forEach((Comment) => {
    const p = document.createElement("p");
    console.log(Comment);
    p.textContent = Comment.text;
    commentDIV.appendChild(p);
  });
};

const form = document.getElementById("new-comment");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const commentText = document.getElementById("comment-text").value;

  let comments = getComments();

  comments.push({ text: commentText });
  saveComment(comments);

  document.getElementById("comment-text").value = "";

  console.log(comments);
  displayComments();
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.clear();
  displayComments();
});

