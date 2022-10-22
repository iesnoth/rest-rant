const router = require('express').Router()

//Make new places
router.get('/new', (req, res) => {
  res.render('places/new')
})

router.post(`/`,(req,res) =>{
  res.send('elgkvnwrlg')
})

//GET /places
router.get(`/`, (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/thai.jpg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/cat-coffee.jpg'
  }];
  res.render(`places/index`, { places })
})

module.exports = router