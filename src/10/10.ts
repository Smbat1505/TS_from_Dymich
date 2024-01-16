export interface UserType {
    name: string
    hair: number
    address: { city: string, build: string }
}


interface LaptopType {
    name: string
}

export type UserWithLaptop = UserType & {
    laptop: LaptopType
}

export function makeHairStyle(user: UserWithLaptop, power: number) {
    const usCopy = {...user, hair: user.hair / power}

    // usCopy.hair = user.hair / power
    return usCopy
}

export const moveUser = (use: UserWithLaptop, city: string) => {
    let copy = {...use}

    copy.address = {...use.address, city}
    return {...use, address: {...use.address, city}}
}

export const ApgradeUsLaptop = (use: UserWithLaptop, laptop: string) => {
    let copy = {...use}

    copy.laptop = {...use.laptop, name: laptop}
    return {...use, laptop: {...use.laptop, name: laptop}}
}