import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { user } from 'recoil/state/UserState';
import { contentSelector } from 'recoil/state/ContentState';
import { lazy } from 'react';
import { packageAtom } from 'recoil/state/PackageState';
import { classAtom} from 'recoil/state/ClassState';

function Header() {
    const setContentState = useSetRecoilState(contentSelector);
    const [userInfo, setUserInfo] = useRecoilState(user);
    const packageState = useRecoilValue(packageAtom);
    const classState = useRecoilValue(classAtom);

    return (
        <header role="banner">
            <nav role="navigation">
                <div className="fixedNav">
                    <div className="topNav">
                        <a id="navbar.top">
                        </a>
                        <div className="skipNav"><a href="#skip.navbar.top" title="Skip navigation links">Skip navigation links</a></div>
                        <a id="navbar.top.firstrow">
                        </a>

                        <ul className="navList" title="Navigation">
                            <li>
                               <Link to={'#'} onClick={() => setContentState(lazy(() => import('components/pages/document/Overview')))}>overview</Link>
                            </li>
                            <li>
                                {
                                    packageState ? <Link to={'#'} onClick={() => setContentState(lazy(() => import('components/pages/document/Module')))}>module</Link> : null
                                }
                            </li>
                            <li>
                                {
                                    classState ? <Link to={'#'} onClick={() => setContentState(lazy(() => import('components/pages/document/Package')))}>package</Link> : null
                                }
                                
                            </li>
                        </ul>
                    </div>

                    <div className="subNav">
                        <div>
                            {userInfo.email} 
                            {userInfo.email == 'anonymous' 
                                    ? <Link to={'/signin'}>&nbsp; | &nbsp; login</Link> 
                                    : <Link to={'/'} 
                                            onClick={() => {
                                                    setUserInfo({
                                                        "email":"anonymous",
                                                        "token":""  
                                                    })
                                                }}
                                        >&nbsp; | &nbsp; logout</Link>}

                            {userInfo.email == 'anonymous' ? 
                                    <Link to={'/signup'}>&nbsp; | &nbsp; join</Link> : null}
                        </div>
                        <a id="skip.navbar.top">
                        </a>
                    </div>
                </div>
                <div className="navPadding">&nbsp;</div>
            </nav>
        </header>
    );
}

export default Header;