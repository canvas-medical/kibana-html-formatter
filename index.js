module.exports = function (kibana) {
  return new kibana.Plugin({
    name: 'html-formatter',

    require: ['kibana', 'elasticsearch'],

    uiExports: {
      fieldFormats: ['plugins/html-formatter/html-formatter']
    }
  });
};
