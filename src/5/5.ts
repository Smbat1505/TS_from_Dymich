export type ManType = {
    name: string
    age: number
}


const person: ManType[] = [
    {name: 'Smbat Antonyan', age: 38},
    {name: 'Inga Ginosyan', age: 40},
    {name: 'Some Something', age: 330}
]

export const dimychTransformator = (man: ManType) => ({
    stack: ['CSS', 'HTML', 'JS', 'TS', 'REACT', 'ANGULAR'],
    firstName: man.name.trim().split(' ')[0],
    lastName: man.name.trim().split(' ')[1]
})


const developer = [

    {
        stack: ['CSS', 'HTML', 'JS', 'TS', 'REACT', 'ANGULAR'],
        firstName: 'Smbat',
        lastName: 'Antonyan'
    },
    {
        stack: ['CSS', 'HTML', 'JS', 'TS', 'REACT', 'ANGULAR'],
        firstName: 'Inga',
        lastName: 'Ginosyan'
    },
    {
        stack: ['CSS', 'HTML', 'JS', 'TS', 'REACT', 'ANGULAR'],
        firstName: 'Some',
        lastName: 'Something'
    },
]

const devs = person.map(dimychTransformator)

const devs2 = person.map(man => ({
    stack: ['CSS', 'HTML', 'JS', 'TS', 'REACT', 'ANGULAR'],
    firstName: man.name.split(' ')[0].toLowerCase(),
    lastName: man.name.split(' ')[1].toLowerCase()
}))
