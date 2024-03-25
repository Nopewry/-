const name = document.querySelector("#name");
const date = document.querySelector("#date");
const time = document.querySelector("#time");
const booked_number = document.querySelector("#booked_number");
const current_booking = document.querySelector("#current_booking");
const bt = document.querySelector("#bt");

bt.addEventListener("click", (e) => {
  e.preventDefault();
  let values = {
    Name: name.value,
    Date: date.value,
    Time: time.value,
    Seat: booked_number.value,
  };
  //   not null for name && date && time and seat shoould be greater than zero
  if (
    values.Name !== "" &&
    values.Date !== "" &&
    values.Time !== "" &&
    values.Seat > 0
  ) {
    let all_values = `${values.Name}, Date: ${values.Date}, Time: ${values.Time}`;
    name.value = "";
    date.value = "";
    time.value = "";
    booked_number.value = "";
    //  can a update seat when it's has a same name && same && time && same day
    // but if it's has a different name || time || day it's can reservation
    localStorage.setItem(all_values, `${all_values}, Seat: ${values.Seat}`);

    loadData();
  }
  // let all_values = `${values.Name}, Date: ${values.Date}, Time: ${values.Time}, Seat: ${values.Seat}`;
  //     name.value = "";
  //     date.value = "";
  //     time.value = "";
  //     booked_number.value = "";
  //     console.log(values.Name);
  //     localStorage.setItem(all_values, all_values);
  //     //   updateLocalStorage(values.Name, all_values);

  //     loadData();
});

const loadData = () => {
  current_booking.innerHTML = "";

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    const div = document.createElement("div");
    div.textContent = `Name: ${value}`;
    const removeButton = document.createElement("button");
    removeButton.id = "remove";
    removeButton.textContent = " X ";
    removeButton.onclick = () => {
      localStorage.removeItem(key);
      loadData();
    };
    div.appendChild(removeButton);
    current_booking.appendChild(div);
  }
};

loadData();
