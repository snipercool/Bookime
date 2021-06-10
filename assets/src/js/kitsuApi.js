document.addEventListener('DOMContentLoaded', function () {
    let loop = document.querySelector('.bookime__content__animeList__loop');
    const loadmore = document.querySelector('.loadmore');
    loadmore.style.display = 'none';
    function getAnimes(offset) {
        let baseUrl = `https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${offset}`;
        console.log(baseUrl);
        fetch(baseUrl)
            .then(res => {
                return res.json();
            })
            .then(animes => {
                for (let index = 0; index < animes.data.length; index++) {
                    let anime = animes.data[index].attributes;
                    let list = document.querySelector(".bookime__content__animeList__loop");
                    let str = turnicate(anime.description, 40);
                    let description = str.replace(/"/g, "'");
                    let rating = anime.averageRating[0] + "." + anime.averageRating[1];
                    //console.log(animes.data[index]);
                    list.innerHTML += `
                <div class="bookime__content__animeList__loop--item" data-id="${animes.data[index].id}" data-image="${anime.posterImage.medium}" data-title="${anime.titles.en}" data-year="${anime.startDate}" data-exerpt="${description}" data-genre="${anime.showType}" data-slug="${anime.slug}">
                    <div class="list-item">
                        <div class="overlay">
                            <span class="badge">${anime.showType}</span>
                            <span class="rating">${rating}/10</span>
                        </div>
                        <div class="img_container">
                            <img src="${anime.posterImage.small}" alt="" >
                        </div>
                    </div>
                    <div class="list-title">
                        <p>${anime.titles.en}</p>
                    </div>
                </div>`;
                }
                document.querySelector('.bookime__content__animeList__loop').dataset.offset = + 20;
            })
            .then(res => {
                let animes = document.querySelectorAll(".bookime__content__animeList__loop--item .overlay");
                const modal = document.getElementById("modal");
                for (let anime of animes) {
                    anime.addEventListener('click', (e) => {
                        const et = e.target.closest('.bookime__content__animeList__loop--item');
                        let image = et.dataset.image;
                        let title = et.dataset.title;
                        let year = et.dataset.year;
                        let exerpt = et.dataset.exerpt;
                        let genre = et.dataset.genre;
                        //console.log(modal.getElementsByClassName("modal-title--text"));
                        modal.getElementsByClassName("badge")[0].innerHTML = genre;
                        modal.getElementsByClassName("modal-title--text")[0].innerHTML = title + "(" + year + ")";
                        modal.getElementsByClassName("modal-exerpt")[0].innerHTML = exerpt;
                        modal.getElementsByClassName("modal-image")[0].src = image;
                        modal.classList.add("active");

                    })
                }
                document.querySelector(".modal-close").addEventListener("click", function () {
                    modal.classList.remove("active");
                });
            })
    }

    function turnicate(str, no_words) {
        return str.split(' ').splice(0, no_words).join(' ');
    }

    getAnimes(0);

    window.addEventListener('scroll', function() {
        console.log(window.scrollY);
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
            console.log('hello');
            loadmore.getElementsByClassName.display = 'inline-block';
            let offset = loop.dataset.offset;
            getAnimes(offset);
            loadmore.getElementsByClassName.display = 'none';

        }
    });
});

