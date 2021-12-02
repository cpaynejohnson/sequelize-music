const {sequelize} = require('./db')
const {Musician} = require('./index')
const {Band} = require('./index')
describe('Muscian Database', () => {
    beforeAll(async() => {
        await sequelize.sync({force:true})
    })

    test('can create a musician', async() => {
        await Musician.bulkCreate([{name: 'Prince', instrument: 'guitar'},{name: 'Stevie Wonder', instrument: 'piano'}, {name: 'Santana', instrument: 'guitar'},{name: 'Smokey', instrument: 'drums'}])
        // const musicians = await Musician.findAll();
        // console.log(musicians)
        const testMusician = await Musician.findOne({
            where: {
              name: 'Prince'
            }
          });
        expect(testMusician.name).toBe('Prince')
        expect(testMusician.instrument).toBe('guitar')
    
    })

    test('can create a band', async() => {
        await Band.bulkCreate([{name: 'EW&F', no_of_members: 7, genre: 'R&B'},{name: 'Rolling Stones', no_of_members: 5, genre:'Rock'}, {name: 'Kiss', no_of_members: 7, genre: 'Rock'},{name: 'Gap Band', no_of_members: 4, genre: 'R&B'}])
        // const musicians = await Musician.findAll();
        // console.log(musicians)
        const testBand = await Band.findOne({
            where: {
              name: 'EW&F'
            }
          });
        expect(testBand.name).toBe('EW&F')
        expect(testBand.genre).toBe('R&B')
})

})