import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./redux/store/store"

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
        <Provider store={store}>
            <Header />
            <RouterProvider router={router} />
        </Provider>
    )
}

export default App
