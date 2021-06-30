import { Component, Mixin, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import { ComponentLocalizable } from '../../decorators/qrvey-localization';


@Mixin(ComponentLocalizable)
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
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
    const localize = (this as any).localize;
    return <div>Hello, World! I'm {this.getText()}. {`Other: ${JSON.stringify(localize)}`}</div>;
  }
}
export interface MyComponent extends ComponentLocalizable { }
