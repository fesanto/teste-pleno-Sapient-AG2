export default function playVideo() {
    const play = document.querySelector('.video');
    const cover = document.querySelector('#video-cover');

    return (
        play.addEventListener('click', function () {
            cover.classList.add('-inactive');
        })
    );
}