const alphabet = 'abcdefghijklmnopqrstuvwxyz';

document.querySelector('.word').onmouseover = event => {

    var iterations = 0;
    
    const interval = setInterval(() => {
        event.target.innerText = event.target.dataset.value.split("")
        .map((letter, index) => {

            if(index < iterations) return event.target.dataset.value[index];

            return alphabet[Math.floor(Math.random() * alphabet.length)];
        })
        .join("");

        if(iterations >= event.target.dataset.value.length) clearInterval(interval);

        iterations += 1 / 4;
    }, 30);
}