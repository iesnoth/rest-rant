const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/curry.jpg" alt="indian curry with naan"/>
                <div>
                    Photo by <a href="https://unsplash.com/@mekalluakella">Kalyani Akella</a> on <a href="https://unsplash.com/photos/gml9g1kRQcM">Unsplash</a>
                </div>
                </div>

                <a href="/places">
                    <button className='btn-primary'>Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home