import type {Meta, StoryObj} from "@storybook/react";
import {Typography} from "../typography/Typography.tsx";

const meta = {
    title: 'Typography',
    component: Typography,
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {};