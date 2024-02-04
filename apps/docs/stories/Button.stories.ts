import { TemplateResult, html } from "lit";
import "@owl/web"

export default {
  title: 'Forms/Button',
  argTypes: {
    label: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  label?: string;
}

const Template: Story<ArgTypes> = ({ label }) => html`
  <owl-button label='${label}'/>
`;

export const Overview = Template.bind({});
Overview.args = {
  label: 'Button A',
};
