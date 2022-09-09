// => file hex.html
let hex = [0,1,2,3,4,5,6,"a","b","c","d","e","f"];
let hexBtn = document.getElementById('hex-btn');
let hexText = document.getElementById('hex-text');


hexBtn.addEventListener('click', ()=>{
    let hexColors = "#";
    for(let i = 0; i<6; i++){
        let randomN = Math.floor(Math.random()*hex.length);
        hexColors += hex[randomN];
    };
    
    document.body.style.backgroundColor = hexColors;
    hexText.textContent = hexColors;
})

// breif
// like in simple here also we want same thing. we want every time we click on btn our body yield different background color and our text set in accordance with color code.
//process
//1.taken a array of numbers and alphabets by which we will made hex code.
//2.targeted btn element and the element whome text we  intend to change.
//3. add eventlistner on btn in which's callback function we have let hexcolors initial value as "#" because hexa color code initiate with it.
//4.then, at same place, we have taken a for loop to add hex values 6 times to hexcolors variable. we want random values so we have used math methods. we have used random method within loop so that on each loop it render different number so that our hexcolors get different value of hex variable.
//5.then, within same function, outside the scope of for loop, we have set body's background color as hexcolors and element's text as hexcolors. so, hexcolors variable will make a code of colors each time that will style our body and give text to element.
