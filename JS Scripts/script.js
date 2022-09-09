// => file index.html

let colors = ["red", "blue", "green", "yellow", "orange", "skyblue", "lighgreen", "gray", "darkred", "darkblue"]
        let btn = document.getElementById('btn');
        let mytext = document.getElementById('text');
        

        btn.addEventListener('click', ()=>{
            let randomN = Math.floor(Math.random()*colors.length);
            console.log(randomN)
            document.body.style.backgroundColor = colors[randomN];
            mytext.innerText = colors[randomN];
        });
        
        

        
        //brief
        //all we wanted to make a logic by which whenever we click on btn we get different body background color with color value.
        //process
        //1. take a array of different colors.
        //2. target btn over which we want to call event.
        //3. target our element whose text we want to  change in accordance with color.
        //4. add evenlistener on btn to change the color of body on every click and to change the text of concerned element.
        //5. take a variable,within callback function, of random number with the help of math methods. Math.random() provides us random numbers bellow 1 so multiply it with required number to get sufficient mumbers. moreover, it also gives decimals so to choose upper value use Math.floor method. we are taking it withing callback function so that it produce random num on every click.
        //6.target body within callback function and set its background color asn the name of colors array with random num variable in square braces so that each time different index value of variable can be called.
        //7. set targeted element's text as = colors array with random number in  square braces.

        

        