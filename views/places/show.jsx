const React = require(`react`)
const Def = require(`../default`)

function show(data) {
    // populate comments with content
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(review => {
            return (
                <div className="border">
                    <h2 className="rant">{review.rant ? 'Rant!' : 'Rave'}</h2>
                    <h4>{review.content}</h4>
                    <h3>
                        <strong>- {review.author}</strong>
                    </h3>
                    <h4>Rating:{review.stars}</h4>
                    <form method="POST" action={`/places/${data.place.id}/comment/${review.id}?_method=DELETE`}>
                                <input type="submit" value="Delete Comment" className="btn btn-danger"/>
                            </form>
                </div>
            )
        })
    }
    //populate rating with content
    let rating = (
        <h3 className="inactive">
            Not yet rated
        </h3>
    )
    //get average rating based on number of comments
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((total, review) => {
            return total + review.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++){
            stars += '⭐'
        }
            rating = (
                <h3>
                    {stars} stars
                </h3>
            )
    }
    return (
        <Def>
            <main>
                <div>
                    <img src={data.place.pic} />
                    <h3>
                        Located in {data.place.city},{data.place.state}
                    </h3>
                </div>
                <div>
                    <h1>{data.place.name}</h1>
                    <h2>Description</h2>
                    <h3>
                        {data.place.showEstablished()}
                    </h3>
                    <p>
                        Serves {data.place.cuisines}
                    </p>
                    <br></br>
                    <div>
                        <h2>Rating</h2>
                        {rating}
                        <h2>Comments</h2>
                        {comments}
                    </div>
                    <section>
                        <h1>Add a Comment</h1>
                        <form method="POST" action={`/places/${data.place.id}/comment`}>
                            <div className='row'>
                                <div className="form-group col-sm-6">
                                    <label htmlFor="author">Author</label>
                                    <input className="form-control"
                                        id="author"
                                        name="author" />
                                </div>
                                <div className="form-group col-sm-6">
                                    <label htmlFor="content">Review</label>
                                    <input className="form-control"
                                        id="content"
                                        name="content" />
                                </div>
                            </div>
                            <div className='row'>
                                <div className="form-group col-sm-6">
                                    <label htmlFor="city">Star Rating</label>
                                    <input className="form-control"
                                        type="number"
                                        id="stars"
                                        name="stars"
                                        required
                                    />
                                </div>
                            </div>
                            <label htmlFor="rant">Rant?</label>
                            <input
                                type="checkbox"
                                name="rant"
                                id="rant"
                            />
                            <br />
                            <input className="btn btn-primary" type="submit" value="Submit Comment" />
                        </form>
                    </section>
        {/* why did I need to put place back in? */}
                    <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">Edit</a>
                    <form method="POST" action={`/places/${data.place.id}/?_method=DELETE`}>
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </form>
                </div>
            </main>
        </Def>
    )
}

module.exports = show