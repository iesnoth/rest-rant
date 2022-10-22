const React = require('react')
const Def = require('./default')

function error404 () {
    return(
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <div>
                    <img src="/images/sad-pizza.gif" alt="man wipes tears with whole pizza"/>
                <div>
                    Photo by <a href="https://imgur.com/user/queeferito">A Scandlous Burrito</a> on <a href="https://imgur.com/gallery/gYv6Q">imgur</a>
                </div>
                </div>
                <p>Oops, sorry, we can't find this page!</p>
            </main>
        </Def>
    )
}

module.exports = error404