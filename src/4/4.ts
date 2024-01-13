import {GovernmentBuildingsType, locCityType} from "../02/02-02";

const ages = [18, 20, 22, 1, 100, 90, 14]

const predicate = (age: number) => {
    return age > 90
}

let oldAge: [100]

export type CourseType = {
    title: string
    price: number
}

let course = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150}
]

export const chipPredicate = (cource: CourseType): boolean => {
    return cource.price < 160
}


export const chipCource = [
    {title: 'CSS', price: 110}
]


export const demolishHousesOnTheStreet = (city: locCityType, street: string) => {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export const getBuildingsWithCorrectStaffCount = (buildings: Array<GovernmentBuildingsType>, count: number) => {
    return buildings.filter(b => b.staffCounter > count)
}

