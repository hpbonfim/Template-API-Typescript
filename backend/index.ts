import createCore from './core/core'

const core = createCore()

function systemControl(): any {
    function start (): any{
        try {
            core.start()
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    function end (): any {
        try {
            core.stop()
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    return {
        start,
        end
    }
}

export default systemControl