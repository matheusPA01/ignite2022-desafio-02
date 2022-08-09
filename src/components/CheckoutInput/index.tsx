import { CheckoutAddressInputSize, CheckoutFormInput } from "./styles";

interface CheckoutInputProps {
  placeholder: string
  inputType: string
  inputSize: CheckoutAddressInputSize
}

export function CheckoutInput({ placeholder, inputType, inputSize }: CheckoutInputProps) {
  return (
    <CheckoutFormInput
      type={inputType}
      placeholder={placeholder}
      addressInputSize={inputSize}
    />
  )
}