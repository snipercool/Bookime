let inputs = document.querySelectorAll(".loop-content");
let account = document.querySelector(".bookime__content__account");
document.addEventListener('DOMContentLoaded', function () {
    for (let input of inputs) {
        input.addEventListener('click', (e) => {
            account.classList.add("hide");

            let id = input.dataset.name;
            document.getElementById(id).classList.add("show");
            
        })
    }

    const back = document.querySelectorAll(".back");
    for (let b of back) {
        b.addEventListener("click", function(){
            account.classList.remove("hide");
            document.querySelector(".bookime__content__account__form.show").classList.remove("show");
        }) 
    }
  })