import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
