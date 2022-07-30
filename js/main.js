var btn = document.querySelectorAll(".btn");
var input = document.querySelectorAll(".num");
var untprc = document.querySelectorAll(".unit");
console.log(btn);
console.log(input);
console.log(untprc);

var btf = function () {
    let a = this.parentNode.previousElementSibling.previousElementSibling;
    // console.log(a);
    let b = a.innerText;
    let c = parseInt(b);

    let d = this.parentNode.previousElementSibling.firstChild;
    console.log(d);
    let e = d.value;
    // console.log(e);
    let k = c*e;

    let tp = this.parentNode.nextElementSibling;
    tp.innerText = k;
    
 }
btn.forEach(function(btns) {
   btns.addEventListener('click',btf);
})

