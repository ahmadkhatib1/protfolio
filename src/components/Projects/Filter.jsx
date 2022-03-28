import { useEffect } from 'react'
import { Button } from './ProjectsStyles'

const Filter = ({ active, setActive, project, data, setproject }) => {
    useEffect(() => {
        if (active === 0) {
            setproject(data);
            return;
        }
        const filterdproject = data.filter((projec) => projec.type === active);
        setproject(filterdproject);
    }, [active]);

    return (
        <div >
            <Button className={active == 0 ? active : ""} onClick={() => setActive(0)} >all</Button>
            <Button className={active == 1 ? active : ""} onClick={() => setActive(1)} >react</Button>
            <Button className={active == 2 ? active : ""} onClick={() => setActive(2)} > html&css</Button>
        </div>
    )
}

export default Filter