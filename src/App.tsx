import React from 'react'
import './App.css'
import {Users} from "./6/callback"
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import DragAndDropList from './Drag'
import {ManComponent} from "./7/7"
import {ManType} from "./7/7.test"
import {addUser, userCopy, usr} from "./8/8"


// type ManType = {
//     name: string,
//     age: number,
//     lessons: [{title: string}, {title: string}],
//     address: AddressType
// }
/// <reference types="react-dnd" />
function App() {
    const itemsArray = [
        {id: '1', text: 'Item 1'},
        {id: '2', text: 'Item 2'},
        // Add more items as needed
    ]

    let man: ManType = {
        name: 'Sem',
        age: 39,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            streetName: {
                title: 'Red street'
            }
        }
    }


    function add() {
        addUser(usr)
    }

    let us = Object.values(userCopy)

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="App">
                <Users/>
                <hr/>
                <ManComponent title={'Human'} man={man}/>
                <br/>
                <DragAndDropList items={itemsArray}/>
                {us.map(u => {
                        return (
                            <>
                                <div>{`id: ${u.id}`}</div>
                                <div>{`first name: ${u.firstName}`}</div>
                                <div>{`last name: ${u.lastName}`}</div>
                                <div>{`age: ${u.age}`}</div>
                                <div>{`country: ${u.location.countryTitle}`}</div>
                                <div>{`town: ${u.location.city}`}</div>
                                <div>{`zipCode: ${u.location.postalCode}`}</div>
                                <div>{`phone: ${u.contact.phone}`}</div>
                            </>
                        )
                    }
                )}
                <div onClick={add}>{}</div>
                <div></div>
                <div></div>
            </div>
        </DndProvider>
    );
}

export default App;
