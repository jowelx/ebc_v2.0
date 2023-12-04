export interface Input {
    label: string | undefined;
    placeholder: string;
}
export interface SelectType {
    label: string,
    data: {
        label: string,
        value: string
    }[]
}
export interface CheckBoxType {
    label: string;
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
}