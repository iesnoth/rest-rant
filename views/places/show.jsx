const React = require(`react`)
const Def = require(`../default`)

function show(data) {
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
                </div>
            )
        })
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
                            <label htmlFor="hasGluten">Rant?</label>
                            <input
                                type="checkbox"
                                name="rant"
                                id="rant"
                            />
                            <br />
                            <input className="btn btn-primary" type="submit" value="Submit Comment" />
                        </form>
                    </section>
                    {/* <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>
                    <form method="POST" action={`/places/${data.id}/?_method=DELETE`}>
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </form> */}
                </div>
            </main>
        </Def>
    )
}

module.exports = show