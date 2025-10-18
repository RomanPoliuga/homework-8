
const bookmarkInput = document.getElementById("bookmarkInput");
const addBookmarkBtn = document.getElementById("addBookmarkBtn");
const bookmarkList = document.getElementById("bookmarkList");

let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

function renderBookmarks() {
  bookmarkList.innerHTML = "";
  bookmarks.forEach((url, index) => {
    const li = document.createElement("li");

    const link = document.createElement("a");
    link.href = url;
    link.textContent = url;
    link.target = "_blank";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Редагувати";
    editBtn.classList.add("edit");
    editBtn.onclick = () => editBookmark(index);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Видалити";
    deleteBtn.classList.add("delete");
    deleteBtn.onclick = () => deleteBookmark(index);

    li.append(link, editBtn, deleteBtn);
    bookmarkList.appendChild(li);
  });
}

function addBookmark() {
  const url = bookmarkInput.value.trim();
  if (!url) return;
  bookmarks.push(url);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  bookmarkInput.value = "";
  renderBookmarks();
}

function deleteBookmark(index) {
  bookmarks.splice(index, 1);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  renderBookmarks();
}

function editBookmark(index) {
  const newUrl = prompt("Введіть нову адресу:", bookmarks[index]);
  if (newUrl) {
    bookmarks[index] = newUrl;
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    renderBookmarks();
  }
}

addBookmarkBtn.addEventListener("click", addBookmark);
renderBookmarks();


const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const saveBtn = document.getElementById("saveBtn");


window.addEventListener("load", () => {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");
  if (savedUsername) usernameInput.value = savedUsername;
  if (savedPassword) passwordInput.value = savedPassword;
});


saveBtn.addEventListener("click", () => {
  localStorage.setItem("username", usernameInput.value);
  localStorage.setItem("password", passwordInput.value);
  alert("Дані збережено!");
});
