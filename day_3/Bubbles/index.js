function createBubble(){
    const section = document.querySelector('section');
    const createElement = document.createElement('span');
    var size = Math.random() * 120;

    createElement.style.zIndex = -998;
    createElement.style.width = `${size}px`;
    createElement.style.height = `${size}px`;
    createElement.style.left = `${Math.random() * innerWidth}px`;
    section.appendChild(createElement);

    setTimeout(() => createElement.remove(), 10000);
}

setInterval(createBubble, 200);