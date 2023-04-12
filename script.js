const button = document.getElementById('button')
const awesome = document.getElementById('awesome')

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
    const notif = document.createElement('div')
    notif.classList.add('awesome')
    notif.classList.add(type ? type : getRandomType())

    notif.innerText = message ? message : getRandomMessage()

    awesome.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomMessage() {
    return types[Math.floor(Math.random() * types.length)]
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)
    ]
}