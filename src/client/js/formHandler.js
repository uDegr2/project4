const validUrl = require('valid-url');


async function handleSubmit(event) {
    event.preventDefault();

    let url = document.getElementById('name').value;


    if (!validUrl.isUri(url)) {
        alert('invalid url')
    }
    const response = await fetch('/apiCall', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "url": url })
    })


    const data = await response.json()
    Client.updateUI(data)
}

export { handleSubmit }