const React = require(`react`)

function Def (html) {
return (
    <html>
        <head>
            <title>Title</title>
            <body>
                {html.children}
            </body>
        </head>
    </html>
)
}

module.exports = Def

