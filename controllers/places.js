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
  db.Place.create(req.body)
    .then(() => {
      res.redirect('/places')
    })
    .catch(err => {
      if (err && err.name == 'ValidationError') {
        let message = 'Validation Error:'
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `
          message += `${err.errors[field].message}`
        }
        console.log('Validation error message', message)
        res.render('places/new', { message })
      }
      else {
        console.log(err)
        res.status(404).render('error404')
      }
    })
})
//get NEW info
router.get('/new', (req, res) => {
  res.render('places/new')
})

//SHOW individual place
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
      //DELETE CONSOLE LOG
      console.log(place.comments)
      res.render('places/show', { place })
    })
    .catch(err => {
      console.log(err)
      res.status(404).render('error404')
    })
})
//post the edits to places
router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id,req.body)
  .then(()=>{
    res.redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
    console.log(err)
    res.status(404).render('error404')
  })
})
//delete places
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
    .then(place => {
      res.redirect('/places')
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
})
//edit places
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
    .then(place => {
      res.render(`places/edit`, { place })
    })
    .catch(err => {
      res.render('error404')
    })
})
//post new comment
router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  req.body.rant = req.body.rant ? true : false
  db.Place.findById(req.params.id)
    .then(place => {
      db.Comment.create(req.body)
        .then(comment => {
          place.comments.push(comment.id)
          place.save()
            .then(() => {
              res.redirect(`/places/${req.params.id}`)
            })
        })
        .catch(err => {
          res.status(404).render('error404')
        })
    })
    .catch(err => {
      res.status(404).render('error404')
    })
})
//delete comments NOT WORKING FOR SOME REASON
router.delete('/:id/comment/:commentId', (req, res) => {
  db.Comment.findByIdAndDelete(req.params.commentId)
    .then(place => {
      res.redirect(`/places/${req.params.id}`)
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
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