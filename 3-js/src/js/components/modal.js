export default function openModal() {
    const btnModal = document.querySelector('.button-modal');
    const bodyOverlay = document.getElementsByTagName('body')[0];
    const modal = document.querySelector('.modal-wiki');
    return (
        btnModal.addEventListener('click', function () {
            bodyOverlay.classList.add('-overlay');
            modal.classList.add('-active');
        })
    );
}