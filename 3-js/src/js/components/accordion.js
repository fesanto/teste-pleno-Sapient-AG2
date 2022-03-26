export default function openAccordion() {
    let items = document.querySelectorAll(".accordion .item");
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function (e) {
            items[i].classList.toggle('-active');
        })
    }
}