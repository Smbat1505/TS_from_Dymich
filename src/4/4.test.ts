import {
    CourseType,
    demolishHousesOnTheStreet,
    getBuildingsWithCorrectStaffCount
} from "./4";
import {locCityType} from "../02/02-02";

describe('My Test Suite', () => {
    let ages: Array<number>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    let course: Array<CourseType>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    let city: locCityType

    let task: Array<{ id: number, title: string, isDone: boolean }>
    beforeEach(() => {
        ages = [18, 20, 22, 1, 100, 90, 14]

        course = [
            {title: 'CSS', price: 110},
            {title: 'JS', price: 200},
            {title: 'REACT', price: 150}
        ]

        task = [
            {id: 1, title: 'Bread', isDone: false},
            {id: 2, title: 'Milk', isDone: true},
            {id: 3, title: 'HotDog', isDone: false},
            {id: 4, title: 'Fruit', isDone: true},
        ]

        city = {
            title: 'New York',
            houses: [
                {
                    id: 1,
                    builtAt: 2012,
                    repaired: false,
                    address: {
                        street: {
                            title: 'White street'
                        },
                        number: 100
                    }
                },
                {
                    id: 2,
                    builtAt: 2008,
                    repaired: false,
                    address: {
                        street: {
                            title: 'Happy street'
                        },
                        number: 100
                    }
                },
                {
                    id: 3,
                    builtAt: 2020,
                    repaired: false,
                    address: {
                        street: {
                            title: 'Red street'
                        },
                        number: 101
                    }
                }
            ],
            governmentBuildings: [
                {
                    type: 'HOSPITAL', budget: 200000, staffCounter: 200, address: {
                        street: {
                            title: 'Central street'
                        }
                    }
                },
                {
                    type: 'FIRE-STATION', budget: 500000, staffCounter: 1000, address: {
                        street: {
                            title: 'South street'
                        }
                    }
                },
            ],
            citizensNumber: 1000000
        }

    })
    test('should take old older then 90', () => {

        const oldAges = ages.filter((age) => age > 90)

        expect(oldAges.length).toBe(1)
        expect(oldAges[0]).toBe(100)
    })


    test('should take courses chipper 160', () => {

        const chipPredicate = (course: CourseType): boolean => course.price < 160
        const chipCourses = course.filter(chipPredicate)

        expect(chipCourses.length).toBe(2)
        expect(chipCourses[0].title).toBe('CSS')
        expect(chipCourses[1].title).toBe('REACT')
    })

    test('get only completed task', () => {

        const completedTask = task.filter(task => task.isDone)

        expect(completedTask.length).toBe(2)
        expect(completedTask[0].id).toBe(2)
        expect(completedTask[1].id).toBe(4)
    })

    test('get only uncompleted task', () => {

        const completedTask = task.filter(task => !task.isDone)

        expect(completedTask.length).toBe(2)
        expect(completedTask[0].id).toBe(1)
        expect(completedTask[0].title).toBe('Bread')
        expect(completedTask[1].id).toBe(3)
        expect(completedTask[1].title).toBe('HotDog')
    })

    test('Houses should be destroyed', () => {
        demolishHousesOnTheStreet(city, 'Happy street')

        expect(city.houses.length).toBe(2)
        expect(city.houses[0].id).toBe(1)
        // expect(city.houses[1].id).toBe(3)
    })

    test('buildings with correct staff count', () => {

        let buildings = getBuildingsWithCorrectStaffCount(city.governmentBuildings, 500)

        expect(buildings.length).toBe(1)
        expect(buildings[0].type).toBe('FIRE-STATION')
    })
})