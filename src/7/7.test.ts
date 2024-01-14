export type ManType = {
    name: string,
    age: number,
    lessons: [{ title: string; name?: string }, { title: string; name?: string }],
    address: AddressType
}

export type AddressType = {
    streetName: { title: string }
}

let man: ManType

beforeEach(() => {
    man = {
        name: 'Sem',
        age: 39,
        lessons: [{title: '1'}, {title: '2', name: 'SEM'}],
        address: {
            streetName: {
                title: 'Red street'
            }
        }
    }
})
test('return', () => {
    const {name, age, lessons} = man

    const {streetName: {title: street}} = man.address

    expect(age).toBe(39)
    expect(name).toBe('Sem')
    expect(lessons.length).toBe(2)
    expect(street).toBe('Red street')
})

test('r', () => {
    let [les_1, ...someLes] = man.lessons
    // let [les_1, les_2] = man.lessons

    expect([les_1, someLes].length).toBe(2)
    expect(les_1.title).toBe('1')
    // expect(les_2.title).toBe('2')
    expect(someLes[0].title).toBe('2')


    expect(someLes[0]).toStrictEqual({title: '2', name: 'SEM'})
})