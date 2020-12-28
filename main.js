const moreBtn = document.querySelector('.video-info__metadata--title-moreBtn');
const title = document.querySelector('.video-info__metadata--title-text');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});