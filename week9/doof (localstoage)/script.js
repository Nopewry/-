const apiUrl = "https://www.themealdb.com/api/json/v1/1/";
const default_menu = document.querySelector("#menu");
const orderList = document.getElementById("order-list");
const totalPrice = document.getElementById("total-price");
const clearOrderBtn = document.getElementById("clear-order");
let total = 0;

async function fetchMealData(category) {
  try {
    const response = await fetch(apiUrl + "filter.php?c=" + category);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

const create_Menu = async (category) => {
  try {
    const mealData = await fetchMealData(category);
    const mealItems = mealData.meals.slice(0, 4).map((meal) => ({
      name: meal.strMeal,
      picture: meal.strMealThumb,
      price: Math.floor(Math.random() * 50) + 20
    }));

    const menuItemsHTML = mealItems
      .map(
        (meal) => `
            <div class="menu-item">
                <p class="name">${meal.name}</p>
                <img src="${meal.picture}" alt="${meal.name}">
                <p class="price">${meal.price}$</p>
                <button type="button" id="addmenu" onclick="addmenu('${meal.name}', ${meal.price})">+</button>
            </div>`
      )
      .join("");
    default_menu.insertAdjacentHTML("beforeend", menuItemsHTML);
  } catch (error) {
    console.error("Error creating menu:", error);
  }
};

const addmenu = (name, price) => {
  total += price;
  updateLocalStorage(name, price);
  loadData();
  totalPrice.textContent = `$${total}`;
  console.log(total);
};

clearOrderBtn.addEventListener("click", function () {
  localStorage.clear()
  loadData()
  total = 0;
  totalPrice.textContent = "$0";
});

function remove(e, price) {
  console.log(e.parentNode);
  e.parentNode.remove();
  total -= price;
  totalPrice.textContent = `$${total}`;
}

const loadData = () => {
  orderList.innerHTML = "";

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    const div = document.createElement("div");
    div.textContent = `Menu: ${key} Peice: ${value}`;
    const removeButton = document.createElement("button");
    removeButton.id = "remove";
    removeButton.textContent = " X ";
    removeButton.onclick = () => {
      localStorage.removeItem(key);
      total -= value;
      totalPrice.textContent = `$${total}`;
      loadData();
    };
    div.appendChild(removeButton)
    orderList.appendChild(div);
  }
};

function updateLocalStorage(key, value) {
  if (localStorage.getItem(key) !== null) {
      let currentValue = parseInt(localStorage.getItem(key));
      let newValue = currentValue + value;
  
      localStorage.setItem(key, newValue.toString());
  } else {
      localStorage.setItem(key, value);
  }
}

create_Menu("Beef");
create_Menu("Chicken");
create_Menu("dessert");
create_Menu("breakfast");
