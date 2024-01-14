import React, {ChangeEvent, MouseEvent} from 'react';

const callBack = () => {
    // alert('Hey')
}

// Суть callback в том что ее запускает другой
// window.setTimeout(callBack, 1000)


export function Users() {
    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        alert(e.currentTarget.name)
    }

    function saveUser() {
        alert('user have been saved')
    }

    function onChange(e: ChangeEvent<HTMLTextAreaElement>) {
        console.log(e.currentTarget.value)
    }

    function lostCallback() {
        alert('focus to be lost')
    }

    return (
        <div>
            <div>
                <textarea
                    onChange={onChange}
                    onBlur={lostCallback}
                >User</textarea>
            </div>
            <button tabIndex={1} onClick={deleteUser}>delete</button>
            <button onClick={deleteUser}>save</button>
        </div>
    );
}
