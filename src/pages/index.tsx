import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const HomePage = lazy(() => import('./home'))
const NotFoundPage = lazy(() => import('./not-found'))

export const Routing = () => {
    return (
        <Routes>
            <Route key="root" path="/" element={<HomePage />} />
            <Route key="other" path="*" element={<NotFoundPage />} />
        </Routes>
    )
}
