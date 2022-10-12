import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Main from './main'
import Individual from './individual'

const Routerr = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/task' element={<Individual />} />
                    <Route path='*' element={<h1>No data found</h1>} />

                </Routes>
            </Router>
        </div>
    )
}

export default Routerr