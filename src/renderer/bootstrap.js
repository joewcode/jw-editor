
window._ = require('lodash')

try {
    window.Popper = require('popper.js').default
    window.$ = window.jQuery = require('jquery')

    require('bootstrap')
//    require('bootstrap-vue');
//    require('./common');

} catch (e) { console.log(e) }
