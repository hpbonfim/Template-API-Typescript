import createCore from '../backend/core/core'

describe('Core está sendo importado', () => {
    test('Deve ter o method @start e @end ', () => {
        const core = createCore();
        expect(core).toHaveProperty('start')
        expect(core).toHaveProperty('stop')
    })
})

describe('Core quando inicializado', () => {
    test('Não deve retornar erros ', () => {
        const core = createCore();
        expect(() => {
            core.start()
        }).not.toThrow()
        expect(() => {
            core.stop()
        }).not.toThrow()
    
    })
})