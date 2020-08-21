import createDatabaseConnection from './database/database'
import createWebserverConnection from './webserver/webserver'

function createCore(): any{
    const database: any = createDatabaseConnection()
    const webserver: any = createWebserverConnection()

    function start(): any{
        console.log('[start the core] ...')
        database.start()
        webserver.start()
        console.log('[core] the core it`s running...')
    }


    function stop(): any{
        console.log('[stop the core] ...')
        database.stop()
        webserver.stop()
        console.log('[core] the core it`s stopped...')
    }

    return {
        start,
        stop
    }
}

export default createCore