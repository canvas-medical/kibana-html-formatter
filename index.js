module.exports = function (kibana) {
  return new kibana.Plugin({
    name: 'html-formatter',

    require: ['kibana', 'elasticsearch'],

    uiExports: {
      visTypes: ['plugins/html-formatter/html-field']
    }
  });
};
