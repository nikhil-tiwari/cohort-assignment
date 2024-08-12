// Counter without setInterval
// Without using setInterval, try to code a counter in Javascript. 
//There is a hint at the bottom of the file if you get stuck.
// (Hint: setTimeout)

let time = 0;

const counter = () => {
    setTimeout(() => {
        time = time + 1;
        console.log(time);
        counter();
    }, 1000)
};

counter();