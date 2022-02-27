let addon = require('bindings')('worker');

console.log(addon.hello()); // 'world'
