import View from 'lib/base/View';

import EventBus from 'diagram-js/lib/core/EventBus';


/**
 * A test view with support for the basic behavior(s).
 */
export default class TestView extends View {

  constructor(options) {

    super(options);

    this._modules = [].concat(options.modules || [], options.additionalModules || []).reverse();

    this._eventBus = new EventBus();
  }

  // mock DI api
  get(name) {

    return this._modules.reduce(function(s, module) {

      if (s) {
        return s;
      }

      if (name in module) {

        if (module[name][0] !== 'value') {
          throw new Error('can only return [ \'value\', ... ]');
        }

        // unwrap [ 'value', someValue ]
        return module[name][1];
      }
    }, null);
  }

  on(...args) {
    this._eventBus.on(...args);
  }

  off(...args) {
    this._eventBus.off(...args);
  }

  once(...args) {
    this._eventBus.once(...args);
  }

  _emit(...args) {
    this._eventBus.fire(...args);
  }

}