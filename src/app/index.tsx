import './index.css'

import { Routing } from 'pages'

import { withProviders } from 'app/providers'

function App() {
    return (
        <div className="App">
            <Routing />
        </div>
    )
}

export default withProviders(App)
