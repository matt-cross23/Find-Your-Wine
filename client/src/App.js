import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Login from './pages/Login';
import Header from './components/Header';
// import Footer from './components/Footer';
import { WineProvider} from './context/wine/WineContext'


function App() {
  return (
    <WineProvider>
    <Router>
      <div className="container">
        <Header />
        <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='/about' element={<About />}/>
         <Route path='/notfound' element={<NotFound />}/>
         <Route path='/*' element={<NotFound />}/>
         <Route path='/login' element={<Login />}/>
         <Route path='/register' element={<Register />}/>
        </Routes>
        {/* <Footer /> */}
      </div>
     
    </Router>
    <ToastContainer />
    </WineProvider>
  );
}

export default App;
