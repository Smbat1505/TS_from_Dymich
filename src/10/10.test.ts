import {ApgradeUsLaptop, makeHairStyle, moveUser, UserWithLaptop} from "./10";

let user: UserWithLaptop

beforeEach(() => {
    user = {
        name: 'Sem',
        hair: 16,
        address: {
            city: 'Red street',
            build: '1'
        },
        laptop: {
            name: 'Macbook Air'
        }


    }
})


test('reference type test', () => {
    const awesomeUs = makeHairStyle(user, 2)
    expect(awesomeUs.hair).toBe(8)
    expect(user.hair).toBe(16)
    expect(awesomeUs.address).toBe(user.address)
})

test('change user', () => {

    const movedUser = moveUser(user, 'London')
    // user = movedUser

    expect(user).not.toBe(movedUser)
    expect(user).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('London')
})

test('ApgradeUsLaptop', () => {
    let newLaptop = ApgradeUsLaptop(user, 'Macbook')

    expect(user).not.toBe(newLaptop)
    expect(user.address).toBe(newLaptop.address)
    expect(user.laptop).not.toBe(newLaptop.laptop)
    expect(newLaptop.laptop.name).toBe('Macbook')
    expect(user.laptop.name).toBe('Macbook Air')
})