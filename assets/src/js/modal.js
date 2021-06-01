let animes = document.querySelectorAll(".bookime__content__animeList__loop--item .overlay");
const modal = document.getElementById("modal");
document.addEventListener('DOMContentLoaded', function () {
    for (let anime of animes) {
        anime.addEventListener('click', (e) => {
            const et = e.target.closest('.bookime__content__animeList__loop--item');

            modal.classList.add("active");
            
        })
    }
    document.querySelector(".modal-close").addEventListener("click", function(){
        modal.classList.remove("active");
    })
})
