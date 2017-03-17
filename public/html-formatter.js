import fieldFormats from 'ui/registry/field_formats';
import IndexPatternsFieldFormatProvider from 'ui/index_patterns/_field_format/field_format';

export default function HTMLFormatProvider(Private) {
  let FieldFormat = Private(IndexPatternsFieldFormatProvider);

  class HTML extends FieldFormat {
    constructor(params) {
      super(params);
    }

    _convert(value) {
      return '<div class="html-value" style="display: block ! important;">' + value + '</div>';
    }
  }

  HTML.id = 'html-formatter';
  HTML.title = 'HTML Field';
  HTML.fieldType = ['string'];

  return HTML;
}

fieldFormats.register(HTMLFormatProvider);
