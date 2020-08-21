function createDatabaseConnection(): any{

    async function start(): Promise<void> {
        console.log('[start the database] ...')
        console.log('[core] the database it`s running...')
    }


    async function stop(): Promise<void> {
        console.log('[stop the database] ...')
        console.log('[core] the database it`s stopped...')
    }

    return {
        start,
        stop
    }
}

export default createDatabaseConnection