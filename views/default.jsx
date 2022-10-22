const React = require(`react`)

function Def (html) {
return (
    <html id="default">
        <head>
            <title>Title</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous"></link>
            <link rel="stylesheet" href="/css/style.css"/>
            <body>
                {html.children}
            </body>
        </head>
        <footer id="footer"> Instagram - LinkedIN - Email - Smoke Signals - Morse Code</footer>
    </html>
)
}

module.exports = Def

