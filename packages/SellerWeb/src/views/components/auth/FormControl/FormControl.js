import React from "react";
import Wrapper, { Label, Input, Textarea } from "./FormControl.styled";
import Customselect from "../Customselect/Customselect";
// import icons
import { Icon } from "@iconify/react";

export default function FormControl({
  htmlFor,
  specialLabelClassName,
  labelValue,
  specialClassName,
  spanIcon,
  input,
  inputValue,
  type,
  placeholder,
  select,
  options,
  dropdownIcon,
  onChange,
  onKeyUp,
  onClick,
  passwordType,
  textarea,
}) {
  return (
    <Wrapper>
      {labelValue && (
        <Label htmlFor={htmlFor} className={specialLabelClassName}>
          {labelValue} <span className={specialClassName}>{spanIcon}</span>
        </Label>
      )}
      {input && (
        <Input>
          <input
            type={type}
            id={htmlFor}
            value={inputValue}
            onChange={onChange}
            placeholder={placeholder}
            onKeyUp={onKeyUp}
          />
          {passwordType && (
            <button onClick={onClick}>
              {type === "password" ? (
                <Icon icon="akar-icons:eye" />
              ) : (
                <Icon icon="charm:eye-slash" />
              )}
            </button>
          )}
        </Input>
      )}
      {select && <Customselect options={options} dropdownIcon={dropdownIcon} />}
      {textarea && <Textarea></Textarea>}
    </Wrapper>
  );
}
