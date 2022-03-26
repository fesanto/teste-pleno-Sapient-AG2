export default function openMenu() {
    const btn = document.querySelector('#menu-button');
    const nav = document.querySelector('#menu');

    return (
        btn.addEventListener('click', function () {
            nav.classList.toggle('-active');
        })
    );
}