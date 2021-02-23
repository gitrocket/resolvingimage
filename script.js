const backgroundImage = document.getElementById('background-image');
let counter = document.getElementById('counter');

let count = 0;

let int = setInterval(blur, 30); // run the blur function every 30 milliseconds

function blur() {
    count++
    if(count > 99) { // stop the count at 100%
        clearInterval(int); 
    }
    counter.innerText = `${count}%`
    counter.style.opacity = scale(count,0,100,1,0) // mapping function
    backgroundImage.style.filter = `blur(${scale(count, 0, 100, 30, 0)}px)`
}


// this function maps one set of values to another set of values
const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}