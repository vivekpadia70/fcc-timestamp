var transformer = require('dat-transformer');

module.exports = new transformer.Type({
  // @context and type filled in automatically.
  'id': 'js-date',
  'description': 'General JS Date',
  'schema': "string"
});
