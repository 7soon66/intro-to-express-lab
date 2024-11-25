const express = require('express')

const app = express()
const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'autographed picture of a dog', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
]
const shoes = [
  { name: 'Birkenstocks', price: 50, type: 'sandal' },
  { name: 'Air Jordans', price: 500, type: 'sneaker' },
  { name: 'Air Mahomeses', price: 501, type: 'sneaker' },
  { name: 'Utility Boots', price: 20, type: 'boot' },
  { name: 'Velcro Sandals', price: 15, type: 'sandal' },
  { name: 'Jet Boots', price: 1000, type: 'boot' },
  { name: 'Fifty-Inch Heels', price: 175, type: 'heel' }
]
app.get('/greetings/:enterUsername', (req, res) => {
  res.send(`<h1>Hello there ${req.params.enterUsername}</h1>`)
})
app.get('/roll/:diceNumber', (req, res) => {
  if (req.params.diceNumber > 0) {
    const randomNumber = Math.floor(Math.random() * req.params.diceNumber)
    res.send(`<h3>you rolled a ${randomNumber}</h3>`)
  } else {
    res.send('<h1>you must specify a number</h1>')
  }
})

app.get('/collectibles/:index', (req, res) => {
  const index = req.params.index
  if (index >= 0 && index < collectibles.length) {
    const item = collectibles[index]
    res.send(
      `so, you want the ${item.name} ? for ${item.price},it can be yours`
    )
  } else {
    res.send(
      'the item that you choose is not available in stock, check again soon!!'
    )
  }
})

app.listen(3000, () => {
  console.log('the app is on lisitner 3000')
})
