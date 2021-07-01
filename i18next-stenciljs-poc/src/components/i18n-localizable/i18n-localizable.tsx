import { Component, Host, h, ComponentInterface, Prop, Element, State, Watch } from '@stencil/core';
import { I18nService, I18nServiceBuilder } from '../../i18n/i18next.helper';

@Component({
  tag: 'i18n-localizable'
})
export class I18nLocalizable implements ComponentInterface {

  @Prop({ attribute: 'i18n-lang', reflect: true }) i18nLang: string = 'en';
  @Prop({ attribute: 'i18n-key' }) i18nKey: string;
  @Prop({ attribute: 'i18n-component' }) i18nComponent: string;
  @Element() private _hostI18nElement: HTMLElement;

  @Watch("i18nLang")
  changeLanguage() {
    this.initI18n();
  }

  @State() locale: I18nService;

  async componentWillLoad() {
    await this.initI18n();
  }

  async initI18n() {
    const componentTag = this._hostI18nElement.tagName.toLowerCase();
    if (componentTag !== "i18n-localizable") {
      this.locale = await I18nServiceBuilder.buildI18n(this.i18nLang, componentTag);
    } else {
      this.locale = await I18nServiceBuilder.buildI18n(this.i18nLang, this.i18nComponent);
    }
  }

  translate(key: string) {
    return this.locale.translate(key);
  }

  render() {
    return (
      <Host>
        {this.translate(this.i18nKey)}
      </Host>
    );
  }

}
