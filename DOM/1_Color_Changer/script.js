const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('body')
// console.log(body);

buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        console.log(e.target);
        if (e.target.id ==="gray") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id ==="yellow") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id ==="blue") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id ==="red") {
            body.style.backgroundColor = e.target.id;
        }
    })
})
