interface StreetType {
    title: string
}

type AddressType = {
    number: number
    street: StreetType
}

interface HouseType {
    id?: number
    builtAt: number
    repaired: boolean
    address: AddressType
}

export interface GovernmentBuildingsType {
    type: string
    budget: number
    staffCounter: number
    address: {
        street: StreetType
    }
}

export type locCityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: number
}