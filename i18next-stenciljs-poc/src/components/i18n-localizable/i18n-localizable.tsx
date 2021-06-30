import { Component, Host, h, ComponentInterface, Prop } from '@stencil/core';

@Component({
  tag: 'i18n-localizable'
})
export class I18nLocalizable implements ComponentInterface {

  @Prop() language: string = 'en';
  @Prop() langKey: string;
  @Prop() config: any;

  componentWillLoad() {
    this.initI18n();
  }

  initI18n() {
    const className = this.constructor.name
    if (className !== "I18nLocalizable") {
      console.log("using as inheritance");
    } else {
      console.log("using as component");
    }
  }

  render() {
    return (
      <Host>
        Test Localizable
      </Host>
    );
  }

}
