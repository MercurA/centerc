const Rounter = {
    init: () => {
        document.querySelectorAll('a.navLink').forEach(a => {
            a,addEventListener("click", event => {
                event.preventDefault()
                var url = event.target.getAttribute('href')
                Rounter.go(url)
                console.log("link clicked")
            })
        })
        window.addEventListener('popstate', event => {
            Rounter.go(event.state.route, false)
        })
        Rounter.go(location.pathname)
    },
    go: (route, addToHistory = true) => {
        console.log('going to', route)
        if (addToHistory) {
            history.pushState({route}, '', route)
        }
        var pageElement = null
        switch(route) {
            case '/':
                pageElement = document.createElement('menu-section')
                break
            default:
                break
        }
        if (pageElement) {
            document.querySelector('main').children[0].remove()
            document.querySelector('main').appendChild(pageElement)
            window.screenX = 0
            window.screenY = 0
        }
    }

}

export default Rounter