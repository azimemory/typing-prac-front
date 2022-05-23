import { useRecoilValue, useSetRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { packageAtom } from 'recoil/state/PackageState';
import { classListSelector, classAtom} from 'recoil/state/ClassState';

function Package(){

    console.dir('render Package');
    const packageState = useRecoilValue(packageAtom);
    const classList = useRecoilValue(classListSelector(`/api/class/${packageState.name}`));
    const setClassState = useSetRecoilState(classAtom);

    function classClick(idx){
        setClassState(classList[idx])
    }

    return(
        <main role="main">
            <div className="header">
                <h6 className="title">Module  {packageState.module.name}</h6>
                <h1 className="title">Package {packageState.name}</h1>
                <hr/>
                <section className="module-description" id="module.description">
                    <div className="block">{packageState.desc}</div>
                </section>
            </div>
            <div className="overview-summary mt-5" id="all-modules-table">
                <div className="table-tabs" role="tablist" >
                    <button role="tab" aria-selected="false"  className="table-tab" >All Class</button>
                </div>
                <div id="all-modules-table.tabpanel" role="tabpanel">
                    <table className="summary-table" aria-labelledby="t1">
                        <thead>
                            <tr>
                                <th className="col-first" scope="col">Class</th>
                                <th className="col-last" scope="col">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                classList.map((e,i) => <Tuple 
                                                        id={i} 
                                                        key={i} 
                                                        name={e.name}
                                                        desc={e.desc}
                                                        onClick={() => classClick(i)}/>)
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
                <Link onClick={props.onClick} 
                      to={'/practice/class'}>{props.name}</Link>
            </th>
            <td className="col-last">
                    {props.desc}
            </td>
        </tr>
    )
}

export default Package;