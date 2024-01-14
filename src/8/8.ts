// Интерфейс для адреса
interface LocationType {
    countryTitle: string
    city: string
    streetName: string
    build: number
    apartment: number
    postalCode: number
}

// Интерфейс для контактной информации
interface Contact {
    email: string
    phone: string
}

// Интерфейс для кредитной истории
interface CreditHistory {
    creditScore: number
    creditCards: string[]
    loans: string[]
}

// Интерфейс, описывающий все детали о человеке
export interface PersonType {
    id: number
    firstName: string
    lastName: string
    age: number
    location: LocationType
    contact: Contact
    creditHistory: CreditHistory
}

type UsersType = {
    [key: string]: PersonType
}

export const users: UsersType = {
    '123': {
        'id': 123,
        'firstName': 'Ivan',
        'lastName': 'Vorovski',
        'age': 39,
        'location': {
            'countryTitle': 'Belarus',
            'city': 'Brest',
            'streetName': 'Gogolya',
            'build': 2,
            'apartment': 505,
            'postalCode': 1076,
        },
        'contact': {
            'email': "ivan@example.com",
            'phone': "100-456-7890",
        },
        'creditHistory': {
            'creditScore': 7050,
            'creditCards': ["Card1", "Card2"],
            'loans': ["Loan1", "Loan2"],
        },
    },
    '78': {
        'id': 78,
        'firstName': 'Smbat',
        'lastName': 'Antonian',
        'age': 39,
        'location': {
            'countryTitle': 'Armenia',
            'city': 'Yerevan',
            'streetName': 'Gyulikevkchyan',
            'build': 31 / 2,
            'apartment': 55,
            'postalCode': 0o076,
        },
        'contact': {
            'email': "ivan@example.com",
            'phone': "123-456-7890",
        },
        'creditHistory': {
            'creditScore': 750,
            'creditCards': ["Card1", "Card2"],
            'loans': ["Loan1", "Loan2"],
        },
    },
    '780': {
        'id': 780,
        'firstName': 'Igor',
        'lastName': 'Antonov',
        'age': 39,
        'location': {
            'countryTitle': 'Russia',
            'city': 'Moscow',
            'streetName': 'Krasnay',
            'build': 31,
            'apartment': 550,
            'postalCode': 3456,
        },
        'contact': {
            'email': "igor@example.com",
            'phone': "123-456-0000",
        },
        'creditHistory': {
            'creditScore': 7500,
            'creditCards': ["Card1", "Card2"],
            'loans': ["Loan1", "Loan2"],
        },
    },

}
//
// let address = user['location']['countryTitle']
// // or
// let address2 = user.location.countryTitle
//
//
// let users = ['w', 'e', 'r', 'y']
//
// users['map'](e => e.toUpperCase())


export let usr = {
    'id': 780,
    'firstName': 'Olya',
    'lastName': 'Antonova',
    'age': 39,
    'location': {
        'countryTitle': 'Russia',
        'city': 'Moscow',
        'streetName': 'Krasnay',
        'build': 31,
        'apartment': 50,
        'postalCode': 356,
    },
    'contact': {
        'email': "igor@example.com",
        'phone': "123-46-0000",
    },
    'creditHistory': {
        'creditScore': 7500,
        'creditCards': ["Card1", "Card2"],
        'loans': ["Loan1", "Loan2"],
    },
}

users[usr.id] = usr

export let userCopy: UsersType = {...users, [usr.id]: usr}

export const addUser = (us: PersonType) => {
    return {...users, [usr.id]: us}
}