export type TownType = {
    title: string
    countryTitle: string
}

export type AddressType = {
    streetName: string
    town: TownType
}

export type TechnologiesType = {
    id: number
    title: string
}


export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}

export const student: StudentType = {
    id: 1,
    name: 'Smbat',
    age: 39,
    isActive: false,
    address: {
        streetName: 'Hollywood 2',
        town: {
            title: 'LA',
            countryTitle: 'USA'
        }
    },
    technologies: [
        {id: 1, title: 'HTML'},
        {id: 2, title: 'CSS'},
        {id: 3, title: 'JS/TS'},
        {id: 4, title: 'REACT'},
    ]
}


let name,
    age,
    city,
    skill

name = student.name
age = student.age
city = student.address.town.title
skill = student.technologies.map(t => t.title)
console.log(name, age, city, skill)


