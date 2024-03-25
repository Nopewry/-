document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector("#data");
});

const saveData = () => {
  const key = document.querySelector("#inputKey").value;
  const value = document.querySelector("#inputValue").value;
  let a = 0;
  localStorage.setItem(key, value);
  loadData();
  alert("Data saved 👍👍👍👍");
};

const clearData = () => {
  localStorage.clear();
  loadData();
  alert("All");
};

const loadData = () => {
  const container = document.querySelector("#data");
  container.innerHTML = "";

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    const div = document.createElement("div");
    div.textContent = `Key: ${key} Value: ${value}`;
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = () => {
      localStorage.removeItem(key);
      loadData();
    };
    div.appendChild(removeButton)
    container.appendChild(div);
  }
};

