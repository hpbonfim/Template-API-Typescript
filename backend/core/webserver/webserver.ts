function createWebserverConnection(): any{

    function start(): any{
        console.log('[start the webserver] ...')
        console.log('[core] the webserver it`s running...')
    }


    function stop(): any{
        console.log('[stop the webserver] ...')
        console.log('[core] the webserver it`s stopped...')
    }

    return {
        start,
        stop
    }
}

export default createWebserverConnection