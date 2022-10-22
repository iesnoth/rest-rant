const React = require(`react`)
const Def = require(`../default`)

function new_form() {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                <form method="POST" action="/places">
                    {/* The most important part to remember is the name attribute
                    of the input tag. This is important because it will be the
                    variable name we end up using on the back-end later.
                    Less critical, but still important, is to make a for attribute
                    on the label that corresponds to an id attribute on the input.
                    That is for accessibility/screen readers! */}
                    <div>
                        <label htmlFor="name">Place Name</label>
                        <input
                            id="name"
                            name="name"
                            required />
                    </div>
                    <div>
                        <label htmlFor="pic">Place Picture</label>
                        <input
                            type="url"
                            id="pic"
                            name="pic"
                            pattern="https?://.+"
                            placeholder="http://" />
                    </div>
                    <div>
                        <label htmlFor="cuisine">Cuisine</label>
                        <input
                            id="cuisine"
                            name="cuisine"
                            required />
                    </div>
                    <div>
                        <label htmlFor="city">City</label>
                        <input
                            id="city"
                            name="city"
                            required />
                    </div>
                    <div>
                        <label htmlFor="state">Place Name</label>
                        <input
                            id="state"
                            name="state"
                            required />
                    </div>
                    <input type="submit" value="Add Place" />
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form