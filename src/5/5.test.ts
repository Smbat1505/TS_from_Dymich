import {
    createGreetingMessage, createMessages,
    dimychTransformator,
    getStreetsTitleOfGovernmentBuildings,
    getStreetsTitleOfHouses,
    ManType
} from "./5";
import {locCityType} from "../02/02-02";

describe('My Test Suite5', () => {
    let person: Array<ManType>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    let town: locCityType

    beforeEach(() => {
        person = [
            {name: 'Smbat Antonyan', age: 38},
            {name: 'Inga Ginosyan', age: 40},
            {name: 'Some Something', age: 330}
        ]

        town = {
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
    test('should be return developers', () => {
        const devs = person.map(dimychTransformator)

        expect(devs.length).toBe(3)
        expect(devs[0].firstName).toBe('Smbat')
        expect(devs[1].stack[2]).toBe('JS')
        expect(devs[2].lastName).toBe('Something')
    })

    test('should get array of greeting message', () => {
        let messages = createGreetingMessage(person)

        expect(messages.length).toBe(3)
        expect(messages[0]).toBe('Hello Smbat – welcome to IT–Incubator')
        expect(messages[1]).toBe('Hello Inga – welcome to IT–Incubator')
        expect(messages[2]).toBe('Hello Some – welcome to IT–Incubator')
    })

    test('list of streets title of government buildings', () => {
        let streets = getStreetsTitleOfGovernmentBuildings(town.governmentBuildings)

        expect(streets.length).toBe(2)

        expect(streets[0]).toBe('Central street')
        expect(streets[1]).toBe('South street')
    })

    test('list of streets titles', () => {
        let streets = getStreetsTitleOfHouses(town.houses)

        expect(streets.length).toBe(3)

        expect(streets[0]).toBe('White street')
        expect(streets[1]).toBe('Happy street')
        expect(streets[2]).toBe('Red street')
    })

    test('Create greeting messages for street', () => {
        let messages = createMessages(town.houses)

        expect(messages.length).toBe(3)
        expect(messages[0]).toBe('Hello guys from White street')
        expect(messages[1]).toBe('Hello guys from Happy street')
        expect(messages[2]).toBe('Hello guys from Red street')
    })
})