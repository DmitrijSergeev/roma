import type { Meta, StoryObj } from '@storybook/react'
import { FC } from 'react'
import cn from './TextFieldStories.module.scss'
import {TextField} from "../TextField.tsx";

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    docs: {
      description: {
        component: 'The TextField component for user interaction',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      description:
        'The initial value of the input field, can be a string or an array of strings.',
    },
    disabled: {
      description: 'Disables the input field, making it non-interactive.',
    },
    error: {
      description:
        'Indicates if the input field has an error. Can be a boolean or a string message.',
    },
    fullwidth: {
      description:
        'Determines if the input field should take up the full available width.',
    },
    id: {
      description: 'Custom id for the input element.',
    },
    label: {
      description:
        'The label text for the input field, displayed above the input element.',
    },
    onBlur: {
      description:
        'Callback function triggered when the input field loses focus.',
    },
    onChangeText: {
      description: 'Callback function triggered when the input value changes.',
    },
    onClickSearch: {
      description:
        'Callback function triggered when the search button is clicked.',
    },
    onEnter: {
      description: 'Callback function triggered when the Enter key is pressed.',
    },
    placeholder: {
      description:
        'Placeholder text displayed inside the input field when it is empty.',
    },
    textFieldClassName: {
      description: 'Custom class name for styling the input field.',
    },
    triggerEnd: {
      description:
        'Custom component or element rendered at the end of the input field, typically for actions like clear or submit.',
    },
    type: {
      description:
        'Specifies the input type. Can be "password", "search", or "text". Defaults to "text".',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter your text',
  },
}

export const AllTextFieldTypes: FC = () => (
  <div>
    <h1 style={{ display: 'flex', justifyContent: 'center' }}>
      Stand TextFields
    </h1>
    <div className={cn.separator}></div>
    <h2>TextField Types</h2>
    <div className={cn.grid}>
      <div className={cn.typographyItem}>
        <h4>Default</h4>
        <TextField placeholder="Enter your text" type="text" label="Text" />
      </div>
      <div className={cn.typographyItem}>
        <h4>Password</h4>
        <TextField
          placeholder="Enter your password"
          type="password"
          label="Password"
        />
      </div>
      {/*<div className={cn.typographyItem}>*/}
      {/*  <h4>Search</h4>*/}
      {/*  <TextField placeholder="Search" type="search" />*/}
      {/*</div>*/}
    </div>
  </div>
)

export const WithErrorsAndDisabled: FC = () => (
  <div>
    <h1 style={{ display: 'flex', justifyContent: 'center' }}>
      Stand TextFields
    </h1>
    <div className={cn.separator}></div>
    <h2>TextField with Errors and Disabled</h2>
    <div className={cn.grid}>
      <div className={cn.typographyItem}>
        <h4>Error</h4>
        <TextField
          placeholder="Enter your text"
          type="text"
          label="Error"
          error="This is an error message"
        />
      </div>
      <div className={cn.typographyItem}>
        <h4>Error password</h4>
        <TextField
          placeholder="Enter your password"
          type="password"
          label="Error"
          error="This is an error message"
        />
      </div>
      <div className={cn.typographyItem}>
        <h4>Disabled</h4>
        <TextField
          placeholder="Disabled Field"
          type="text"
          label="Disabled"
          disabled
        />
      </div>
    </div>
  </div>
)

export const FullWidthTextFields: FC = () => (
  <div>
    <h1 style={{ display: 'flex', justifyContent: 'center' }}>
      Stand TextFields
    </h1>
    <div className={cn.separator}></div>
    <h2>TextField with Full Width</h2>
    <div>
      <div className={cn.typographyItem}>
        <h4>Full Width Field Default</h4>
        <TextField
          placeholder="Enter your text"
          type="text"
          label="Full Width"
          fullwidth
        />
      </div>
      <div className={cn.typographyItem}>
        <h4>Full Width Field Password</h4>
        <TextField
          placeholder="Enter your password"
          type="password"
          label="Full Width"
          fullwidth
        />
      </div>
    </div>
  </div>
)
