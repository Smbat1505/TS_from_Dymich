import {PersonType} from "./8";

type UsersType = {
    [key: string]: PersonType
}


let user: UsersType

beforeEach(() => {
    user = {
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
})
test('should be change name', () => {
    user[123].lastName = 'Egorov'
    expect(user[123]).toEqual({
        'id': 123,
        'firstName': 'Ivan',
        'lastName': 'Egorov',
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
    })
})