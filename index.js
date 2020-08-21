const systemControl = require('./backend/index.ts')

console.log(systemControl)

try {
    systemControl.start()
    systemControl.stop()
} catch (error) {
    console.log(error)
    throw error
}