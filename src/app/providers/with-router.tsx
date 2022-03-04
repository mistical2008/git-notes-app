import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

export function withRouter(component: () => React.ReactNode) {
    return () => (
        <BrowserRouter>
            <Suspense fallback="...loading">{component()}</Suspense>
        </BrowserRouter>
    )
}
