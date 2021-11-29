import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Navigate,
    Route,
  } from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';

import { LoginScreen } from '../auth/LoginScreen';
import { NavBar } from './NavBar';
import { SearchHeroe } from './SearchHeroe';

export const AppRouter = () => {
    return (
        <Router>
            <div>

                <div className="container">
                    <NavBar />
                    <Routes>
                        <Route path="/" element={ <HomeScreen />} />
                        <Route path="/about" element={ <AboutScreen />} />
                        <Route path="/login" element={ <LoginScreen />} />
                        <Route path="/search-heroe" element={ <SearchHeroe />} />
                        <Route path="*" element={ <Navigate replace to="/" />} />
                    </Routes>
                </div>

            </div>
        </Router>
    )
}