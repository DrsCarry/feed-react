import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import MostViewed from './pages/MostViewed';

export default function appRoutes () {
 return(
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/most-viewed" element={<MostViewed /> }/>


    </Routes>


 );

}