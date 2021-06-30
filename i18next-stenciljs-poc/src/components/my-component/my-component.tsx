import { Component, Mixin, Prop, h, ComponentInterface, Host } from '@stencil/core';
import { format } from '../../utils/utils';
import { I18nLocalizable } from '../i18n-localizable/i18n-localizable';


@Mixin(I18nLocalizable)
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent implements ComponentInterface {

  // componentWillLoad() {
  //   console.log("from MyComponent");
  // }
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <Host>
      <div>Hello, World! I'm {this.getText()}. {`Other: ${(this as any).language}`}</div>
      <i18n-localizable ></i18n-localizable>
    </Host>
  }
}
