const router = require('express').Router()
const db = require('../models')

//INDEX
router.get('/', (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err)
      res.status(404).render('error404')
    })
})
//POST new info to index
router.post('/', (req, res) => {
  console.log(req.body)
  db.Place.create(req.body)
    .then(() => {
      res.redirect('/places')
    })
    .catch(err => {
      console.log(err)
      res.status(404).render('error404')
    })
})
//get NEW info
router.get('/new', (req, res) => {
  res.render('places/new')
})

//SHOW individual place
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
    .then(place => {
      res.render('places/show', { place })
    })
    .catch(err => {
      console.log(err)
      res.status(404).render('error404')
    })
})

router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
  res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router



// const router = require('express').Router()
// const { Router } = require('express')
// const places = require('../models/places.js')

// //CREATE new places
// router.get('/new', (req, res) => {
//   res.render('places/new')
// })

// //POST
// router.post(`/`, (req, res) => {
//   console.log(req.body)
//   if (!req.body.pic) {
//     req.body.pic = 'http://placekitten.com/400/400'
//   }
//   if (!req.body.city) {
//     req.body.city = "Anytown"
//   }
//   if (!req.body.state) {
//     req.body.state = "USA"
//   }
//   places.push(req.body)
//   res.redirect('/places')
// })

// //GET /places
// router.get(`/`, (req, res) => {
//   res.render(`places/index`, { places })
// })

// //UPDATE
// router.put(`/:id`, (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render(`error404`)
//   }
//   else if (!places[id]) {
//     res.render(`error404`)
//   }
//   else {
//     if (!req.body.pic) {
//       req.body.pic = 'http://placekitten.com/400/400'
//     }
//     if (!req.body.city) {
//       req.body.city = "Anytown"
//     }
//     if (!req.body.state) {
//       req.body.state = "USA"
//     }
//     //save new data into places[id]
//     places[id]=req.body
//     res.redirect(`/places/${id}`)
//   }
// })

// //EDIT
// router.get(`/:id/edit`, (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render(`error404`)
//   }
//   else if (!places[id]) {
//     res.render(`error404`)
//   }
//   else {
//     res.render(`places/edit`, { place: places[id], id: id })
//   }
// })

// //DELETE
// router.delete(`/:id`, (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render(`error404`)
//   }
//   else if (!places[id]) {
//     res.render(`error404`)
//   }
//   else {
//     places.splice(id, 1)
//     res.redirect(`/places`)
//   }
// })

// //SHOW
// router.get(`/:id`, (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render(`error404`)
//   }
//   else if (!places[id]) {
//     res.render(`error404`)
//   }
//   else {
//     res.render(`places/show`, { place: places[id], id })
//   }
// })

// module.exports = router