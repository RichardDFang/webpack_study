const {
    SyncHook,
    AsyncSeriesHook
} = require('tapable')

// const hook = new SyncHook(['arg1', 'arg2', 'arg3']);
// hook.tap('hook1', (arg1, arg2, arg3) => {
//     console.log(arg1, arg2, arg3)
// })

// hook.call(1, 3)

class Car {
    constructor() {
        this.hooks = {
            accelarate: new SyncHook(['speed']),
            brake: new SyncHook(),
            calculateRoutes: new AsyncSeriesHook(['source', 'target', 'routesList'])
        }
    }
}

const car = new Car();

car.hooks.brake.tap('WarningLampPlugin', () => {console.log('WarningLampPlugin')});
car.hooks.accelarate.tap('LoggerPlugin', (speed) => {console.log(`Accelarating to new ${speed}`)});
car.hooks.calculateRoutes.tapPromise('calculateRoutes tapPromise', (source, target, routesList) => {
    console.log(source);
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`tapPromise to ${source}${target}${routesList}`);
            resolve();
        }, 1000)
    })
})

car.hooks.brake.call();
car.hooks.accelarate.call(10);

console.time('cost');

car.hooks.calculateRoutes.promise('async', 'hook', 'demo').then(() => {
    console.timeEnd('cost');
},(err) => {
    console.error(err);
    console.timeEnd('cost');
})