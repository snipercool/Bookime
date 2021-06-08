  const link = document.getElementById('animeLink');
  document.addEventListener('DOMContentLoaded', function () {
    if(document.querySelector('.activate').classList.contains("loading done")){
      document.querySelector('.activate').classList.remove("loading done");
    }
    document.querySelector('.activate').addEventListener('click', function (e) {
      console.log('clicked');
      var self = document.querySelector(".activate");
      if (!self.classList.contains('loading')) {
        self.classList.add('loading');
        if (link != "" || link != "undefined" || link != null) {
          link.type = "text";
          link.select();
          document.execCommand("copy");
          link.type = "hidden";
          console.log(link.value);
        }
        setTimeout(function () {
          self.classList.add('done');
          setTimeout(function() {
            self.classList.remove('loading');
            self.classList.remove('done');
        }, 5000);
        }, 1500);
      }
    });
  })