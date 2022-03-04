import { useState, useEffect } from 'react';
import s from './ProfileStatus.module.css';

const ProfileStatusWithHooks = props => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const activateMode = () => setEditMode(true);

    const deactivateMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = e => setStatus(e.currentTarget.value);

    useEffect( () => {
         setStatus(props.status);
    }, [props.status]);

    return (  
        <div className={s.status}>
            {editMode ?
            <div>
                <input onChange={onStatusChange} onBlur={deactivateMode} value={status} />
            </div>
            :
            <div>
                <span onDoubleClick={activateMode}>{status || 'No status'}</span>
            </div>
            }
    </div>
    );
};

export default ProfileStatusWithHooks; 
