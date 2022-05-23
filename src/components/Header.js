import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { user } from 'recoil/state/UserState';

import { moduleAtom } from 'recoil/state/ModuleState';
import { packageAtom } from 'recoil/state/PackageState';
import { classAtom} from 'recoil/state/ClassState';

function Header() {

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
                               <Link to={'/'}>overview</Link>
                            </li>
                            <li>
                                {
                                    packageState ? <Link to={'/module'}>module</Link> : null
                                }
                            </li>
                            <li>
                                {
                                    classState ? <Link to={'/package'}>package</Link> : null
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