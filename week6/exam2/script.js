const acc1 = {
    owner: "himura prayut",
    user: "yut",
    password: "1111"
}

const acc2 = {
    owner: "ruroni pewpew",
    user: "pew",
    password: "abcd"
}

const account = [acc1, acc2];


const login = document.querySelector(".log-bot");
const welcome = document.querySelector(".welcome");
const correct_username = "admin"
const correct_password = "1234"



login.addEventListener("click", (e) => {
    e.preventDefault();
    
    let user = document.querySelector(".log-user");
    let password = document.querySelector(".log-psw");
    console.log(user);
    if(user.value === correct_username && password.value === correct_password){
        welcome.textContent = `cibi cibi caba caba ${user.value}`
        user.value = ""
        password.value = ""
    }
})