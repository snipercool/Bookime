let faqItem = document.querySelectorAll(".bookime__content__account__faq__loop--item");
document.addEventListener('DOMContentLoaded', function () {
    for (let item of faqItem) {
        item.addEventListener('click', (e) => {
            const et = e.target.closest('.bookime__content__account__faq__loop--item');

            if (et.classList.contains("open")) {
               
                et.classList.remove("open");
            }else{
                et.classList.add("open");
            }
            
        })
    }
  })