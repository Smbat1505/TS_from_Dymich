import {dimychTransformator, ManType} from "./5";

let person:Array<ManType>

beforeEach(()=>{
  person = [
      {name: 'Smbat Antonyan', age: 38},
      {name: 'Inga Ginosyan', age: 40},
      {name: 'Some Something', age: 330}
  ]
})
test('should be return developers', ()=>{
    const devs = person.map(dimychTransformator)

    expect(devs.length).toBe(3)
    expect(devs[0].firstName).toBe('Smbat')
    expect(devs[1].stack[2]).toBe('JS')
    expect(devs[2].lastName).toBe('Something')
})