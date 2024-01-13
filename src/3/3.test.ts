import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveCity, makeStudentActive} from "./3";

let student: StudentType

beforeEach(() => {
    student = {
        id: 1,
        age: 29,
        name: 'Inga Ginosyan',
        isActive: false,
        address: {
            streetName: 'Red',
            town: {
                title: 'London',
                countryTitle: 'England'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 1,
                title: 'REACT'
            },
            {
                id: 1,
                title: 'TypeScript'
            },
        ]
    }
})

test('New tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(3)
    addSkill(student, 'JS')
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
    expect(student.technologies[3].id).toBeDefined()

})


test('Student should be is active', () => {
    expect(student.isActive).toBe(false)

    makeStudentActive(student)

    expect(student.isActive).toBe(true)
})

test('Does student is live in city?', () => {
    let results = doesStudentLiveCity(student, 'Moscow')
    let results1 = doesStudentLiveCity(student, 'London')

    expect(results).toBe(false)
    expect(results1).toBe(true)
})