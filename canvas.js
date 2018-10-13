let canvas = document.querySelector('canvas')
canvas.width = innerWidth
canvas.height = innerHeight

let c = canvas.getContext('2d')


let witch = new Image()
witch.src = "witch.png"

c.drawImage(witch, 400, 100, 400, 400)




