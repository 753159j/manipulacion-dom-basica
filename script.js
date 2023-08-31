const h1 =document.querySelector('h1');
const form =document.querySelector('form');
const input1 =document.querySelector('#calculo1');
const input2 =document.querySelector('#calculo2');
const btn =document.querySelector('#btnCalcular');
const pResult =document.querySelector('#result');


// form.addEventListener('submit', sumarInputValues);

// function sumarInputValues (event){
//     console.log ({event});
//     event.preventDefault ();
//     const sumaInputs = input1.value + input2.value;
//     pResult.innerText = "Resultado: " + sumaInputs;

// }

btn.addEventListener('click', sumarInputValues);

function sumarInputValues (event){
    // console.log ({event});
    // event.preventDefault ();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;

}























// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input,
// })

// h1.innerHTML = 'patito';
// h1.innerText = 'patito';
// // console.log(h1.getAttribute('pantalla'));
// // h1.setAttribute('class', 'rojo'); atributo
// h1.classList.add('rojo');
// h1.classList.remove('verde');
// // h1.classList.toggle ('verde);
// // h1.classList.contains ('verde);

// input.value="456"
// const img = document.createElement('img')
// pid.innerHTML="";
// img.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Color_circle_%28hue-sat%29.png/310px-Color_circle_%28hue-sat%29.png')
// console.log(img);

// pid.append(img);