export default function openWiki() {
    const btnModal = document.querySelector('.button-modal');
    const showData = (result) => {
        document.querySelector('.extract').innerHTML = result.query.pages[736].extract;
    }
    return (
        btnModal.addEventListener('click', (e) => {
            const options = {
                method: 'GET',
                mode: 'cors',
                cache: 'default'
            }

            fetch(`https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Alber%20Einstein`, options)
                .then((response) => {
                    response.json().then((data) => showData(data))
                })
        })
    );
}