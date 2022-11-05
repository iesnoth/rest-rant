const db = require(`../models`)

async function seed() {
    //get the place
    let place = await db.Place.findOne({name: 'H-Thai-ML'})

    //create sample comment
    let comment = await db.Comment.create({
        author:'Famished Fran',
        rant:false,
        stars: 5.0,
        content:'Super good.'
    })
    let comment2 = await db.Comment.create({
        author:'James Bond',
        rant:true,
        stars: 2.0,
        content:'No martinis, shaken or otherwise.'
    })
    //add comment to array
    place.comments.push(comment.id)
    place.comments.push(comment2.id)
    //save the place with comment
    await place.save()
    //exit
    process.exit()
}

seed()