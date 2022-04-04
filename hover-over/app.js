const buttons = document.querySelectorAll('button');

for(let btn of buttons){
    btn.addEventListener('mouseover', function(){
        window.cnow = btn.style.backgroundColor;
        let col = randomColor();
        this.style.backgroundColor = col;
        // this.innerText = col;
    });

    btn.addEventListener('click', function(){
        navigator.clipboard.writeText(cnow);
        alert(`copied ${cnow}`)
    });
}

// function colorize(){
//     let cnow = this.backgroundColor;
//     let col = randomColor();
//     this.style.backgroundColor = col;
//     // this.innerText = col;
// }

const randomColor = ()=>{
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}
