const currnet1 = document.querySelector('#current1');
const imgs = document.querySelectorAll('#imgs img');

imgs.forEach(img =>
    img.addEventListener('click', e => (current.src =
        e.target.src))
);
