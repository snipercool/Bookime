class Init {
    constructor() {
        this.origin = `chrome-extension://${chrome.runtime.id}`;
        this.sidebar = `${this.origin}/views/sidebar.html`;

        this.addStyle();
        this.addSidebar();
        this.addScript();
    }

    addStyle() {
        const style = document.createElement('link');
        style.type = "text/css"; 
        style.rel = "stylesheet";
        style.href = `${this.origin}/assets/dist/css/page.min.css`;
        document.head.appendChild(style);
    }

    addScript() {
        const script = document.createElement('script');
        script.src = `${this.origin}/assets/dist/js/main.min.js`;
        document.body.appendChild(script);
    }

    addSidebar() {
        const current = this;
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {
                document.body.innerHTML += this.responseText;
                current.addIframe();
            }
          }
        }
        xhttp.open("GET", this.sidebar, true);
        xhttp.send();
    }

    addIframe() {
        const iframe = document.createElement('iframe');
        iframe.src = chrome.runtime.getURL('views/together.html');
        iframe.classList.add("bookime__iframe");
        document.getElementById("bookimeSidebar").appendChild(iframe);
    }
}

const init = new Init();