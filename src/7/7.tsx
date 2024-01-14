import React from 'react'
import {ManType} from "./7.test";

export type ManComponentType = {
    title: string
    man: ManType
}

export const ManComponent: React.FC<ManComponentType> = ({title, man}) => {
    return (
        <div>
            <h1>{`_ ${title} _`}</h1>
            <hr/>
            <div>
                <mark><strong>{man.name}</strong></mark>
            </div>
            <div>
                {man.age}
            </div>
            <div>
                <mark>{man.address.streetName.title}</mark>
            </div>
        </div>
    )
}