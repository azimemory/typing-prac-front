import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { moduleListSelector,  moduleAtom } from 'recoil/state/ModuleState';
import { lazy } from 'react';
import { contentSelector } from 'recoil/state/ContentState';
function Overview() {

    const setContentState = useSetRecoilState(contentSelector);
    const moduleList = useRecoilValue(moduleListSelector('/api/module'));
    const setModuleState = useSetRecoilState(moduleAtom);

    function moduleClick(idx) {
        setModuleState(moduleList[idx]);
        setContentState(lazy(() => import('components/pages/document/Module')));
    }

    return (
        <main role="main">
            <div className="header">
                <h1 className="title">Welcome! Enjoy Practice typing with Java API Document</h1>
            </div>
            <div className="overview-summary mt-5" id="all-modules-table">
                <div className="table-tabs" role="tablist" aria-orientation="horizontal">
                    <button role="tab" aria-selected="false" aria-controls="all-modules-table.tabpanel" tabIndex="-1" id="t0" className="table-tab" >All Modules</button>
                </div>
                <div id="all-modules-table.tabpanel" role="tabpanel">
                    <table className="summary-table" aria-labelledby="t1">
                        <thead>
                            <tr>
                                <th className="col-first" scope="col">Module</th>
                                <th className="col-last" scope="col">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                moduleList.map((e, i) => <Tuple id={i}
                                                                key={i}
                                                                name={e.name}
                                                                desc={e.desc}
                                                                onClick={() => moduleClick(i)} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}

function Tuple(props) {
    return (
        <tr className="alt-color">
            <th className="col-first" scope="row">
                <Link onClick={props.onClick} to={'#'}>{props.name}</Link>
            </th>
            <td className="col-last">
                {props.desc}
            </td>
        </tr>
    )
}


export default Overview;