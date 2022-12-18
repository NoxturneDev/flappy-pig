const doc = window.document

/** @type {HTMLCanvasElement} */
const canvas = doc.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.style.backgroundColor = 'blue'
canvas.width = 280
canvas.height = 480

class Bird {
    constructor({ name, x, y, speed }) {
        this.name = name
        this.width = 24
        this.height = 24
        this.x = x
        this.y = y
        this.speed = speed
        this.gravity = 0.05
    }

    // --- moving function
    jump() {
        this.speed = 10 
        this.gravity = 0.05
        this.y -= 100 
        this.updates()
    }

    die() {

    }

    draw() {
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.fillStyle = 'yellow'
    }

    updates() {
        this.gravity += this.speed
        this.speed += 1.25
        this.y += this.speed / 10

        console.log(this.y)
        this.draw()
    }
}

// class Map {
//     constructor({ width, height }) {
//         this.width = width
//         this.height = height
//     }

//     draw() {
//         ctx.fillRect(0, 0, this.width, this.height)
//         ctx.fillStyle = 'blue'
//     }
// }


// const map = new Map({ width: 240, height: 1280 })
const player = new Bird({ name: 'galih', x: 12, y: 24, speed: 10 })

function gameMechanics(e) {
    // --- player control
    if (e.keyCode === 32) {
        console.log('jump')
        player.jump()
    }
}

window.addEventListener('keydown', (e) => gameMechanics(e))

function animation() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    player.updates()

    requestAnimationFrame(animation)
}

function init() {
    animation()
}

init()