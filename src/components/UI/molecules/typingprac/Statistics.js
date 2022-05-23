import CurrentSpeed from "components/UI/atoms/statistics/CurrentSpeed";
import MaxSpeed from "components/UI/atoms/statistics/MaxSpeed";
import Accurancy from "components/UI/atoms/statistics/Accurancy";

function Statistics() {

    console.dir('render Statistics');

    return (
        <div className="row gap-5" >
            <CurrentSpeed/>
            <MaxSpeed/>
            <Accurancy/>
        </div>
    )
}

export default Statistics;