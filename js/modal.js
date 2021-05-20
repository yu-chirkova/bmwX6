document.addEventListener('DOMContentLoaded', () => {
    const more = document.querySelectorAll('.more');
    const modal = document.querySelector('.modal');

    const openModal = () => {
        modal.classList.remove('hidden')
    };

    const closeModal = () => {
        modal.classList.add('hidden')
    };

    more.forEach(btnModal => {
        btnModal.addEventListener('click', openModal);
    })
    

    modal.addEventListener('click', event => {
        if (event.target.classList.contains('overlay') || event.target.classList.contains('modal__close')) {
           closeModal();
        }
    })
})