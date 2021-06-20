let inputField = document.querySelector('#email');
let submit = document.querySelector('.submitBtn');
var inputValue = null;
var tablink;
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true, 'currentWindow': true}, function (tabs) {
    tablink = tabs[0].url;
    changelink(inputValue);
  });

function changelink(input){
    if (input == null) { input = ''; }
    submit.href = `mailto:${input}?subject=Hey!%20have%20you%20seen%20this%20anime%3F%20Let's%20watch%20it%20together&body=Hi%0D%0A%0D%0AI%20found%20this%20anime%20using%20the%20Bookime%20extension!%20Do%20you%20want%20to%20watch%20together%20at%3A%0D%0A${tablink}%0D%0A%0D%0ATell%20me%20what%20you%20think%20afterwards!%20%3Bp`;
}

inputField.addEventListener('keyup', function(){
    inputValue = inputField.value;
    console.log(inputValue);
    changelink(inputValue);
});