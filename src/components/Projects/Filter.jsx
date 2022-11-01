import { useEffect } from 'react'
import { Button, NavMenue } from './ProjectsStyles'

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
        <NavMenue >
            <Button style={{
                backgroundColor: active == 0 ? 'rgb(65,98,168)' : '',
                color: active == 0 ? 'white' : '',
            }}  onClick={() => setActive(0)} >all</Button>
            <Button 
              style={{
                backgroundColor: active == 1 ? 'rgb(65,98,168)' : '',
                color: active == 1? 'white' : '',
            }}
            onClick={() => setActive(1)} >react</Button>
            <Button
              style={{
                backgroundColor: active == 2 ? 'rgb(65,98,168)' : '',
                color: active == 2? 'white' : '',
            }}
            className={active == 2 ? active : ""} onClick={() => setActive(2)} > html&css</Button>
        </NavMenue>
    )
}

export default Filter