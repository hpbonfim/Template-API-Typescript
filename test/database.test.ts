import createDatabaseConnection from '../backend/core/database/database'

describe('Database está sendo importado', () => {
    test('Deve ter o method @start e @end ', () => {
        const database = createDatabaseConnection();
        expect(database).toHaveProperty('start')
        expect(database).toHaveProperty('stop')
    })
})

describe('Database quando inicializado', () => {
    test('Não deve retornar erros ', () => {
        const database = createDatabaseConnection();
        expect(() => {
            database.start()
        }).not.toThrow()
        expect(() => {
            database.stop()
        }).not.toThrow()
    })
})