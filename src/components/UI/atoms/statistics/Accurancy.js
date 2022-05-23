import { Card } from "react-bootstrap";
import { ProgressBar } from "react-bootstrap";
import { accurancyAtom } from 'recoil/state/StatisticState';
import { useRecoilValue } from 'recoil';

function Accurancy(){
    
    console.dir('render Accurancy');
    const accurancy = useRecoilValue(accurancyAtom);

    return (
        <Card style={{ width: '15rem' }} className="col w-25">
            <Card.Body>
                <Card.Title>정확도 : {accurancy}%</Card.Title>
                <ProgressBar striped variant="success" now={accurancy} max={100} />
            </Card.Body>
        </Card>
    )
}

export default Accurancy;