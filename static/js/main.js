document.querySelector('#btn-menu').addEventListener('click', () => {
    document.querySelector('#options-menu').classList.toggle('active');
});


document.querySelector('#btn-networks').addEventListener('click', () => {
    document.querySelector('#m-btn').classList.toggle('active');
    document.querySelector('#w-btn').classList.toggle('active');
    document.querySelector('#btn-networks').classList.toggle('active');
});