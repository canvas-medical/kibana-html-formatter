require('plugins/html-formatter/less/main.less');

function HTMLFormatProvider(Private) {
  var _ = require('lodash');
  var FieldFormat = Private(require('ui/index_patterns/_field_format/FieldFormat'));

  _.class(HTML).inherits(FieldFormat);

  function HTML(params) {
    HTML.Super.call(this, params);
  }

  HTML.id = 'html-formatter';
  HTML.title = 'HTML Field';
  HTML.fieldType = ['string'];

  HTML.prototype._convert = {
    text: function (value) {
      return value;
    },
    html: function (value) {
      return '<div class="html-value">' + value + '</div>';
    }
  };

  return HTML;
}

require('ui/registry/field_formats').register(HTMLFormatProvider);
