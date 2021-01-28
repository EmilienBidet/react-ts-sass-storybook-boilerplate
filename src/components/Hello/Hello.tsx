import * as React from 'react';
// import * as Styles from './Hello.module.scss';
import * as Styles from './Hello.module.sass';

interface HelloProps {    
    name: string;
    job: string;
}

export const Hello: React.FC<HelloProps> = ({name, job}) => {

    return (
        <div className={Styles['hello']}> 
            <h1>Hi, OpenFin!</h1>
            <div>
                <h5>{name}</h5>
                <p>{job}</p>
            </div>
        </div>
    )
}