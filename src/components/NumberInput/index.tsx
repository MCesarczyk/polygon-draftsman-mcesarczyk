import { InputWrapper, Input, Label } from "./styled";

interface inputProps {
    text: string,
    step: number,
    value: number,
    onChange: (e: any) => void
}

const NumberInput = ({ text, step, value, onChange }: inputProps) => (
    <InputWrapper>
        <Label>{text}</Label>
        <Input
            type='number'
            step={step}
            value={value}
            onChange={onChange}
        />
    </InputWrapper>
);

export default NumberInput;