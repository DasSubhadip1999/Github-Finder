//components
import Navbar from './Components/UI_Design/Navbar';
import Footer from './Components/UI_Design/Footer';
import About from './Pages/About';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
//context
import { UserDataProvider } from './Context/userDataContext';
import { AlertProvider } from './Context/AlertContext';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'



function App() {
  return (
    <UserDataProvider>
      <AlertProvider>
        <Router>
          <div className='flex flex-col justify-between h-screen'>
            <Navbar title='GitHub Finder' />
            <main>
              <Routes>
                <Route path='/about' element={<About />}></Route>
                <Route path='/' element={<Home />}></Route>
                <Route path='/notfound' element={<NotFound />}></Route>
                <Route path='/*' element={<NotFound />}></Route>
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </UserDataProvider>
  );
}

export default App;
