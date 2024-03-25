const container = document.querySelector("#container");

const img = document.createElement("img")

img.src = "sdfghjkl.png"
img.alt = "asdfghj"

container.appendChild(img);

const fruits = ["App", "Ba", "Man", "Straw", "Ora"];
const list_F = document.querySelector("#fruitList")
fruits.forEach((fruits) => {
    // list_F.innerHTML = `<il>${item}</il>`
    const li = document.createElement("li");
    li.textContent = fruits
    list_F.appendChild(li);
})
