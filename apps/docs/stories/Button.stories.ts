import type { Meta, StoryObj} from '@storybook/web-components'
import "@owl/web"

const meta: Meta = {
  title: 'Forms/Button',
  component: 'owl-button',
};

export default meta;
type Story = StoryObj;

export const Overview: Story = {
  args: {
    label: 'Overview',
  }
}
