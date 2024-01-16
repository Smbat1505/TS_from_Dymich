function icreaseAge(u: UserType) {
    u.age++
}

type UserType = {
    name: string
    age: number
}

let user: UserType
beforeEach(() => {
    user = {
        name: 'Sem',
        age: 39
    }
})
test('big test', () => {
    icreaseAge(user)

    expect(user.age).toBe(40)

    let supMan = user
    supMan = {...user, age: 1000}
    expect(user.age).toBe(40)
    expect(supMan.age).toBe(1000)
})