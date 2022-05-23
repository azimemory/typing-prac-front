import { ProgressBar, Card } from "react-bootstrap";
import { currentSpeedAtom } from 'recoil/state/StatisticState';
import { useRecoilValue } from 'recoil';

function CurrentSpeed() {

    console.dir('render CurrentSpeed');
    const speed = useRecoilValue(currentSpeedAtom);

    return (
        <Card style={{ width: '15rem' }} className="col w-25">
            <Card.Body>
                <Card.Title>현재 타수 : {speed}</Card.Title>
                <ProgressBar striped variant="success" now={speed}  max={500}/>
            </Card.Body>
        </Card>
    )
}

export default CurrentSpeed;