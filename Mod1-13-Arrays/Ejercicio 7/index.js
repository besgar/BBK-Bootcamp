let array=[10, 22, 43, 54, 5, 3, 17, 81, 29, 1];

let total=0;

let media;

for(let i=0; i<array.length; i++){
    total=total+array[i];
}

media=total/array.length;

document.getElementById("div1").innerHTML=`<p>La media de los 10 números que contiene el array es ${media}</p>`;