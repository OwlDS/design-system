import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { buttonStyles } from './Button.styles';

/**
 * A custom element that fires event on value change.
 *
 * @element owl-button
 *
 * @prop {string} label - Labelaaaa of the component
 * @fires {CustomEvent} click - Event fired when value is changed
 */
@customElement('owl-button')
export class Button extends LitElement {
  static styles = buttonStyles

	@property({ type: String })
	label?: string;

  render() {
    return html`<button>${this.label}</button>`;
  }
}
