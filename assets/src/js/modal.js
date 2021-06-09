let animes = document.querySelectorAll(".bookime__content__animeList__loop--item .overlay");
const modal = document.getElementById("modal");
document.addEventListener('DOMContentLoaded', function () {
    for (let anime of animes) {
        anime.addEventListener('click', (e) => {
            const et = e.target.closest('.bookime__content__animeList__loop--item');
            let image = et.dataset.image;
            let title = et.dataset.title;
            let year = et.dataset.year;
            let exerpt = et.dataset.exerpt;
            let genre = et.dataset.genre;
            console.log(modal.getElementsByClassName("modal-title--text"));
            modal.getElementsByClassName("badge")[0].innerHTML  = genre;
            modal.getElementsByClassName("modal-title--text")[0].innerHTML  = title + "(" + year + ")";
            modal.getElementsByClassName("modal-exerpt")[0].innerHTML  = exerpt;
            modal.getElementsByClassName("modal-image")[0].src = image;
            modal.classList.add("active");
            
        })
    }
    document.querySelector(".modal-close").addEventListener("click", function(){
        modal.classList.remove("active");
    })
})
