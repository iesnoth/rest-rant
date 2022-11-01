const React = require(`react`)
const Def = require(`../default`)

function show(data) {
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
                    <h2>Rating</h2>
                    <p>Not Rated</p>
                </div>
                <div>
                    <h2>Comments</h2>
                    <p>No comments yet!</p>
                </div>
            </main>
        </Def>
    )
}

module.exports = show