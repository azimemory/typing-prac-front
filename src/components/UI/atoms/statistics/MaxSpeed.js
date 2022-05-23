import { Card } from "react-bootstrap";
import { ProgressBar } from "react-bootstrap";
import { maxSpeedAtom } from 'recoil/state/StatisticState';
import { useRecoilValue } from 'recoil';


function MaxSpeed() {
    console.dir('render MaxSpeed');
    const speed = useRecoilValue(maxSpeedAtom);

    return (
        <Card style={{ width: '15rem' }} className="col w-25">
            <Card.Body>
                <Card.Title>최고 타수 : {speed}</Card.Title>
                <ProgressBar striped variant="warning" now={speed} max={500}/>
            </Card.Body>
        </Card>
    )
}

export default MaxSpeed;