class Init {
    constructor() {
        addIframe();
    }
    addIframe() {
        const iframe = document.createElement('iframe');
        iframe.addEventListener('load', () => {
            iframe.contentWindow.postMessage({
                eventName: 'init',
                iframeSrc: '#' // Needs changing
            }, '*');
        }, false);
        iframe.src = chrome.runtime.getURL('index.html');
    }
}

const init = new Init();