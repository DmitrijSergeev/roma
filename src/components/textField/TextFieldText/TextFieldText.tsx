import {ComponentProps, forwardRef} from 'react'
import {clsx} from "clsx";
import s from './TextFieldText.module.scss'
import {useId} from "../../../hook/useId";

export type TextFieldTextProps = {
    type?: 'text'
    disabled?: boolean
    label?: string
    error?: boolean
    id?: string
    placeholder?: string
    fullwidth?: boolean
} & Omit<ComponentProps<'input'>, 'type'>

export const TextFieldText = forwardRef<HTMLInputElement, TextFieldTextProps>((
    props, ref) => {
    const {type, fullwidth, disabled, label, id, error, placeholder, ...rest} = props
    const textFieldId = useId(id, 'textField')
    const classNames = {
        label: clsx(s.labelText, disabled && s.labelWithDisabled),
        error: clsx(s.error, disabled && s.errorWithDisabled),
        textField: clsx(
            s.textField,
            fullwidth && s.fullwidth,
            error && s.errorText,
        ),
    }
    return (
        <div>
            {
                label && (
                    <label className={classNames.label}></label>
                )
            }
            <input
                id={textFieldId}
                className={classNames.textField}
                ref={ref}
                type={type}
                placeholder={placeholder}
                {...rest}
            />
            {error && (
                <span className={classNames.error} id={`${textFieldId}-error`}>
            {error}
          </span>
            )}
        </div>
    )
}) 
