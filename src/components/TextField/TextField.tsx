export type TextFieldProps = {
    label?: string;
    id?: string;
}
export const TextField = (props: TextFieldProps) => {
    const {id, label} = props
    const classNames = {
        label: label
    }
    return (
        <div>
            {label && (
                <label
                    htmlFor={id}
                    className={classNames.label}
                >{label}
                </label>
            )}

            <input
                id={id}
            >

            </input>

            <button>+</button>
        </div>

    );
};
