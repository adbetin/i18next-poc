import { Component, Host, h, State, Prop, Watch, ComponentInterface } from '@stencil/core';
import { I18nService, I18nServiceBuilder } from '../../i18n/i18next.helper';

@Component({
  tag: 'test-no-mixing',
  shadow: true,
})
export class TestNoMixing implements ComponentInterface {

  @Prop({ attribute: 'i18n-lang', reflect: true }) i18nLang: string = 'en';
  @State() locale: I18nService;

  @Watch("i18nLang")
  changeLanguage() {
    this.initI18n();
  }

  async componentWillLoad() {
    await this.initI18n();
  }

  async initI18n() {
    this.locale = await I18nServiceBuilder.buildI18n(this.i18nLang, "test-no-mixing");
  }

  translate(key: string) {
    return this.locale.translate(key);
  }

  render() {
    return (
      <Host>
        <div style={{ "background-color": "#8b60e6", "color": '#ffffff' }}>
          {this.translate("noMixingText")}
        </div>
      </Host>
    );
  }

}
