import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { buttonStyles } from './Button.styles';

@customElement('owl-button')
export class Button extends LitElement {
  static styles = buttonStyles

	@property()
	label?: string;

  render() {
    return html`<button>${this.label}</button>`;
  }
}
