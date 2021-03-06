import CommandStack from 'diagram-js/lib/command/CommandStack';
import DmnUpdater from './DmnUpdater';
import DmnFactory from './DmnFactory';
import ElementFactory from './ElementFactory';
import IdChangeBehavior from 'dmn-js-shared/lib/features/modeling/behavior/IdChangeBehavior';
import Modeling from './Modeling';

export default {
  __init__: [ 'dmnUpdater', 'idChangeBehavior', 'modeling' ],
  commandStack: [ 'type', CommandStack ],
  dmnUpdater: [ 'type', DmnUpdater ],
  dmnFactory: [ 'type', DmnFactory ],
  elementFactory: [ 'type', ElementFactory ],
  idChangeBehavior: [ 'type', IdChangeBehavior ],
  modeling: [ 'type', Modeling ]
};