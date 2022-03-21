const button = document.querySelector("button")
const body = document.querySelector("body")

const hex_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  }

body.style.backgroundColor = '#90EE90'

button.addEventListener('click', change)

function change()
{
    const val = hex_code();
    body.style.backgroundColor = val;
}


