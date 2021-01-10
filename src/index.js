const messages = [
  "raul",
  "ana",
  "daniela",
  "jorge",
  "angel",
  "fernanda",
  "carolina",
  "martin"
]

const randomMsg = () => {
  const message =  messages[Math.floor(Math.random() * messages.length)]
  console.log(`Hola, ${message}`)
}

module.exports = { randomMsg }