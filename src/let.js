let buttons = document.querySelectorAll('button')

for (let i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.innerHTML = i;
    button.onclick = function(e) {
        console.log(i)
    }
}
