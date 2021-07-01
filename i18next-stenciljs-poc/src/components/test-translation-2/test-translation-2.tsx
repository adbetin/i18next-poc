import { Component, Host, h, Mixin } from '@stencil/core';
import { I18nLocalizable } from '../i18n-localizable/i18n-localizable';

@Mixin(I18nLocalizable)
@Component({
  tag: 'test-translation-2',
  shadow: true,
})
export class TestTranslation2 {

  render() {
    return (
      <Host>
        {this.translate('helloTranslation')}
      </Host>
    );
  }

}
export interface TestTranslation2 extends I18nLocalizable { }
