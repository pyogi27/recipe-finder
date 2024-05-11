import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/common/header';
import Home from './components/home';
import Footer from './components/common/footer';
import UserProfile from './components/profile/UserProfile';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/recipe/:id" component={RecipeDetail} />*/
              <Route path="/profile" element={<UserProfile />} />
            }
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
