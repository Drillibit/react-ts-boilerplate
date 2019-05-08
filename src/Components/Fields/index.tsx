import React from 'react';
import styled from 'styled-components';

export const SupportiveFields =  styled.div`
    position: relative; 
    border-radius: 5px;
    box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    width: 78%;
`;

const StyledInputBox = styled.fieldset`
    display: flex;
    position: relative;
    align-self: center;
    border: none;
    width: 70%;
`;

const FieldTextStyled = styled.input`
    background: transparent;
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 2px solid lightgray;
    height: 35px;
`;

const StyledLabel = styled.label`
    color: #68E8D1;
    font-family: Roboto;
    position: absolute;
    transition: 0.2s ease all;
    top: 22px;
    padding-left: 1px;
    ${FieldTextStyled}:focus ~ &, ${FieldTextStyled}:valid ~ &{
        color: lightgray;
        top: 0;
        font-size: .7rem;
    } 
`;

interface InputTextType {
    value: string
    onChange: Function
    name: string
    label: string
};

export const InputText: React.SFC<InputTextType> = ({ value, onChange, name, label }) => (
    <StyledInputBox>
        <FieldTextStyled 
            type="text" 
            value={value} 
            name={name}
            required
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}  
        />
        {label && <StyledLabel htmlFor={name}>
            {label}
        </StyledLabel>}
    </StyledInputBox>
);