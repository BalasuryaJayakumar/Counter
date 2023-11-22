const value = document.querySelector(".value");
const increase = document.querySelector(".increase_btn");
const decrease = document.querySelector(".decrease_btn");
const reset = document.querySelector(".reset_btn");

let count = 0;
increase.addEventListener("click", (event) => {
    count++;
    value.innerHTML = count;
    if(count>0) {
        value.style.color = "limegreen";
    }
})

decrease.addEventListener("click", (event) => {
    count--;
    value.innerHTML = count;
    if(count<0) {
        value.style.color = "red";
    }
})

reset.addEventListener("click", (event) => {
    count = 0;
    value.innerHTML = count;
    value.style.color = "#000";
})