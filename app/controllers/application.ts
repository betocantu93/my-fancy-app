import Controller from '@ember/controller';
import '@ember-eui/core/themes/dark.css';
import '@ember-eui/core/styles/ember-eui.css';

export default class ApplicationController extends Controller {
  options = [
    {
      value: 'option1',
      label: 'Option 1',
    },
    {
      value: 'option2',
      label: 'Option 2',
    },
  ];

  onChange = (opts) => {
    this.set('selectedOptions', opts);
  };
}
