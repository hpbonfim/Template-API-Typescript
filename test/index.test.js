import systemControl from '../backend/index.js'

describe('Index está sendo importado', () => {
    test('Deve ter o method @start e @end ', () => {
        const index = systemControl();
        expect(index).toHaveProperty('start')
        expect(index).toHaveProperty('end')
    })
})

describe('Index quando inicializado', () => {
    test('Não deve retornar erros ', () => {
        const index = systemControl();
        expect(() => {
            index.start()
        }).not.toThrow()
        expect(() => {
            index.end()
        }).not.toThrow()
    
    })
})