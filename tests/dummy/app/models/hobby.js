import MF from 'model-fragments';
import DS from 'ember-data';

export default MF.Fragment.extend({
  name: DS.attr('string')
});
