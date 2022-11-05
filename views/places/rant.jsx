const React = require('react')
const Def = require('../default')

function comment(data) {
    return (
        <Def>
            <main>
                <h1>Add a Comment</h1>
                <form method="POST" action={`/places/${data.id}?_method=PUT`}>
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
                    <div className='row'>
                        <div className="form-group col-sm-6">
                            <label htmlFor="rant">Rant</label>
                            <input className="form-control"
                                type="checkbox"
                                id="rant"
                                name="rant"
                                required />
                        </div>
                    </div>
                    <br />
                    <input className="btn btn-primary" type="submit" value="Submit Comment" />
                </form>
            </main>
        </Def>
    )
}

// module.exports = comment