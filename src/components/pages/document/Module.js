import { useSetRecoilState, useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import { lazy } from 'react';
import { contentSelector } from 'recoil/state/ContentState';
import { packageListSelector, packageAtom } from 'recoil/state/PackageState';
import { moduleAtom } from 'recoil/state/ModuleState';

function Module() {

    console.dir('render Module');
    const setContentState = useSetRecoilState(contentSelector);
    const moduleState = useRecoilValue(moduleAtom);
    const packageList = useRecoilValue(packageListSelector(`/api/package/${moduleState.name}`));
    const setPackageState = useSetRecoilState(packageAtom);

    function packageClick(idx) {
        setPackageState(packageList[idx])
        setContentState(lazy(() => import('components/pages/document/Package')));
    }

    return (
        <main role="main">
            <div className="header">
                <h1 className="title">Module {moduleState.name} </h1>
                <hr />
                <section className="module-description" id="module.description">
                    <div className="block">{moduleState.desc}</div>
                </section>
            </div>
            <div className="packages-summary mt-5" id="all-modules-table">
                <div className="table-tabs" role="tablist" aria-orientation="horizontal">
                    <button role="tab" aria-selected="false" aria-controls="all-modules-table.tabpanel" tabIndex="-1" id="t0" className="table-tab" >All Packages</button>
                </div>
                <div id="all-modules-table.tabpanel" role="tabpanel">
                    <table className="summary-table" aria-labelledby="t1">
                        <thead>
                            <tr>
                                <th className="col-first" scope="col">Package</th>
                                <th className="col-last" scope="col">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                packageList.map((e, i) => <Tuple id={i}
                                    key={i}
                                    name={e.name}
                                    desc={e.desc}
                                    onClick={() => packageClick(i)} />)
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
        <tr className={props.id % 2 == 0 ? 'alt-color' : 'row-color'}>
            <th className="col-first" scope="row">
                <Link onClick={props.onClick} to={'#'}
                >{props.name}</Link>
            </th>
            <td className="col-last">
                {props.desc}
            </td>
        </tr>
    )
}

export default Module;