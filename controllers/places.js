const router = require('express').Router()
const { Router } = require('express')
const places = require('../models/places.js')

//CREATE new places
router.get('/new', (req, res) => {
  res.render('places/new')
})

//POST
router.post(`/`, (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = "Anytown"
  }
  if (!req.body.state) {
    req.body.state = "USA"
  }
  places.push(req.body)
  res.redirect('/places')
})

//GET /places
router.get(`/`, (req, res) => {
  res.render(`places/index`, { places })
})

//UPDATE
router.put(`/:id`,(req,res) =>{
  res.send('STUB put')
})

//EDIT
router.get(`/:id/edit`, (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render(`error404`)
  }
  else if (!places[id]) {
    res.render(`error404`)
  }
  else {
  res.render(`places/edit`,{place:places[id]})
  }
})

//DELETE
router.delete(`/:id`, (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render(`error404`)
  }
  else if (!places[id]) {
    res.render(`error404`)
  }
  else {
    places.splice(id, 1)
    res.redirect(`/places`)
  }
})

//SHOW
router.get(`/:id`, (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render(`error404`)
  }
  else if (!places[id]) {
    res.render(`error404`)
  }
  else {
    res.render(`places/show`, { place: places[id], id })
  }
})

module.exports = router