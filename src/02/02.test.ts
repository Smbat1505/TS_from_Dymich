import {GovernmentBuildingsType, locCityType} from "./02-02";

let city: locCityType
let governmentBuildings: GovernmentBuildingsType
beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
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


test('test city should contain 3 houses', () => {
    expect(city.houses.length).toBe(3)

    expect(city.houses[0].builtAt).toBe(2012)
    expect(city.houses[0].repaired).toBe(false)
    expect(city.houses[0].address.number).toBe(100)
    expect(city.houses[0].address.street.title).toBe('White street')

    expect(city.houses[1].builtAt).toBe(2008)
    expect(city.houses[1].repaired).toBe(false)
    expect(city.houses[1].address.number).toBe(100)
    expect(city.houses[1].address.street.title).toBe('Happy street')

    expect(city.houses[2].builtAt).toBe(2020)
    expect(city.houses[2].repaired).toBe(false)
    expect(city.houses[2].address.number).toBe(101)
    expect(city.houses[2].address.street.title).toBe('Red street')
})

test('test city should contain hospital and fire station', () => {
    expect(city.governmentBuildings.length).toBe(2)

    expect(city.governmentBuildings[0].type).toBe('HOSPITAL')
    expect(city.governmentBuildings[0].budget).toBe(200000)
    expect(city.governmentBuildings[0].staffCounter).toBe(200)
    expect(city.governmentBuildings[0].address.street.title).toBe('Central street')

    expect(city.governmentBuildings[1].type).toBe('FIRE-STATION')
    expect(city.governmentBuildings[1].budget).toBe(500000)
    expect(city.governmentBuildings[1].staffCounter).toBe(1000)
    expect(city.governmentBuildings[1].address.street.title).toBe('South street')
})