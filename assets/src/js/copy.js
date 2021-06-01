const copybtn = document.getElementById("CopyBtn");
const link = document.getElementById('animeLink');
document.addEventListener('DOMContentLoaded', function () {
    copybtn.addEventListener('click', function(){
      if (link != "" || link != "undefined" || link != null) {
          link.type = "text";
          link.select();
          document.execCommand("copy");
          link.type = "hidden";
          console.log(link.value);
      }
    }, false);
  })