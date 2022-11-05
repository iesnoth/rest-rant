const React = require(`react`)
const Def = require(`../default`)

function show(data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    if (data.place.comments.length){
        comments = data.place.comments.map(review => {
            return(
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
                    <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>
                    <form method="POST" action={`/places/${data.id}/?_method=DELETE`}>
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </form>
                </div>
                <div>
                    <h2>Comments</h2>
                    {comments}
                </div>
            </main>
        </Def>
    )
}

module.exports = show