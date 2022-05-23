import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Overview from './components/pages/document/Overview';
import {lazy, Suspense} from 'react';

let Login = lazy(() => import('components/pages/user/Login'));
let Join = lazy(() => import('components/pages/user/Join'))
let Module = lazy(() => import('components/pages/document/Module'));
let Package = lazy(() => import('components/pages/document/Package'));
let ClassPractice = lazy(() => import('components/pages/typingprac/ClassPractice'));

function App() {
    return (
        <div className="content">
            <Header />
            <Routes>
                <Route path="/" element={<Suspense fallback={<div>로딩중입니다.</div>}><Overview /></Suspense>} />
                <Route path="/signin" element={<Suspense fallback={<div>로딩중입니다.</div>}><Login /></Suspense>} /> 
                <Route path="/signup" element={<Suspense fallback={<div>로딩중입니다.</div>}><Join /></Suspense>} /> 
                <Route path="/module" element={<Suspense fallback={<div>로딩중입니다.</div>}><Module /></Suspense>} />
                <Route path="/package" element={<Suspense fallback={<div>로딩중입니다.</div>}><Package /></Suspense>} /> 
                <Route path="/practice/class" element={<Suspense fallback={<div>로딩중입니다.</div>}><ClassPractice /></Suspense>} /> 
            </Routes>
            <Footer />
        </div>
    )
}

export default App;