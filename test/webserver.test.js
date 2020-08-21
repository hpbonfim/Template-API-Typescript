import createWebserverConnection from '../backend/core/webserver/webserver'

describe('webserver está sendo importado', () => {
    test('Deve ter o method @start e @end ', () => {
        const webserver = createWebserverConnection();
        expect(webserver).toHaveProperty('start')
        expect(webserver).toHaveProperty('stop')
    })
})

describe('webserver quando inicializado', () => {
    test('Não deve retornar erros ', () => {
        const webserver = createWebserverConnection();
        expect(() => {
            webserver.start()
        }).not.toThrow()
        expect(() => {
            webserver.stop()
        }).not.toThrow()
    })
})