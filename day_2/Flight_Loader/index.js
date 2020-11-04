let loader = document.getElementById('loader');

for (let i = 1; i <= 20; i++) {
    let span = document.createElement('span');
    span.style = `--i:${i};`;
    loader.append(span);
}