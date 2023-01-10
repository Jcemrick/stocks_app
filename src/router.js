import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from './App';
import { stockLoader } from "./loaders";
import About from './pages/About';
import Index from './pages/Index';
import Stock from './pages/Stock';
import Stocks from './pages/Stocks';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>} >
            <Route path='' element={<Index/>} />
            <Route path='about' element={<About/>} />
            <Route path='stocks' element={<Stocks/>} />
            <Route path='stock/:symbol' element={<Stock/>} loader={stockLoader}/>
        </Route>
    )
)

export default router