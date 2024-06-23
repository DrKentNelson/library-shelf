import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home/Home';
import Header from './components/Header/Header';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
])

function App() {

    return (
        <>
            <Header />
            <RouterProvider router={router} />
        </>
    )
}

export default App
