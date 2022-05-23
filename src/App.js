import { useRecoilState } from "recoil";
import Header from './components/Header';
import Footer from './components/Footer';
import { contentSelector } from 'recoil/state/ContentState';
import { Suspense } from 'react';

function App() {
    const [Content, setContent] = useRecoilState(contentSelector);
    return (
        <div className="content">
            <Header />
            
            <Suspense fallback={<div>로딩중입니다.</div>}><Content/></Suspense>
            <Footer />
        </div>
    )
}

export default App;