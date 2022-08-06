import React, {useEffect, useState} from "react";

const ProfileStatusHooks = props => {

    let [editMode, setEditMode] = useState(false);
    let [Status, setStatus] = useState(props.status);
    useEffect(() => {
        setStatus(props.status)
    } , [props.status])

    const activeEditMode = () => {
        if (!props.userId) {
            setEditMode(true)
        }
    }
    const disabledEditMod = () => {
        setEditMode(false)
        props.updateStatus(Status)
    }

    const onStatusChange =(e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <>
            {!editMode &&
                <div>
                    <span onDoubleClick={activeEditMode}>{props.status || "Status"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} onBlur={disabledEditMod} autoFocus={true} type="text"
                           value={Status}/>
                </div>
            }

        </>
    )

}

export default ProfileStatusHooks