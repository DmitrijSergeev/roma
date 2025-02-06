import type {Meta, StoryObj} from "@storybook/react";
import {TextFieldText} from "../TextFieldText";

const meta = {
  title: 'TextFieldText',
  component: TextFieldText,
} satisfies Meta<typeof TextFieldText>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {};