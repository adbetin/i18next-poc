import { Component, Mixin, h, ComponentInterface, Host } from '@stencil/core';
import { I18nLocalizable } from '../i18n-localizable/i18n-localizable';

@Mixin(I18nLocalizable)
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent implements ComponentInterface {

  async componentWillLoad() {
    await this.initI18n();
  }

  render() {
    return <Host>
      <div>{this.translate('hello')}</div>
      <i18n-localizable i18nLang={this.i18nLang} i18nKey="subtitle" i18nComponent="my-component"></i18n-localizable>
    </Host>
  }
}
export interface MyComponent extends I18nLocalizable { }
