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
      price: Math.floor(Math.random() * 50) + 20,
    }));

    const menuItemsHTML = mealItems
      .map(
        (meal) => `
            <div class="menu-item" onclick="addmenu('${meal.name}', ${meal.price})">
                <p class="name">${meal.name}</p>
                <img src="${meal.picture}" alt="${meal.name}">
                <p class="price">${meal.price}$</p>
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
  orderList.innerHTML += `
  <li>${name} - $${price} <button type="button" onclick="remove(this, ${price})">X</button></li>  `;
  totalPrice.textContent = `$${total}`;
  console.log(total);
};

clearOrderBtn.addEventListener("click", function () {
  orderList.innerHTML = "";
  total = 0;
  totalPrice.textContent = "$0.00";
});

function remove(e, price) {
  console.log(e);
  console.log(e.parentNode);
  e.parentNode.remove();
  total -= price;
  totalPrice.textContent = `$${total}`;
}

create_Menu("Beef");
create_Menu("Chicken");
create_Menu("dessert");
create_Menu("breakfast");
