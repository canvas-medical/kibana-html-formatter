import _ from 'lodash';

import RegistryFieldFormatsProvider from 'ui/registry/field_formats';
import IndexPatternsFieldFormatProvider from 'ui/index_patterns/_field_format/field_format';

function HTMLFormatProvider(Private) {
  var FieldFormat = Private(IndexPatternsFieldFormatProvider);

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
      return '<div class="html-value" style="display: block ! important;">' + value + '</div>';
    }
  };

  return HTML;
}

RegistryFieldFormatsProvider.register(HTMLFormatProvider);

export default HTMLFormatProvider;
