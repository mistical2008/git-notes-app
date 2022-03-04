import { withRouter } from 'app/providers/with-router'

const HomePage = () => {
    return (
        <div>
            Hello from <b>Home page</b>
        </div>
    )
}

export default withRouter(HomePage)
