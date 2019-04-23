import React, { useState } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    margin: 0 auto;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(280deg, #68E8D1, #4BA1EE);
    min-height: 200px;
    transform: all ease-in .3s;
    transition: all ease-in .3s;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 60%;
    margin: 60px auto 0 auto;
    position: relative;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

const StyledInput = styled.input`
    border: none;
    border-bottom: 2px solid #fff;
    background: transparent;
    outline: none;
    color: #fff;
    font-size: 1.4rem;
    width: 100%;
`;

const StyledLabel = styled.label`
    color: #fff;
    font-family: Roboto;
    position: absolute;
    transition: 0.2s ease all;
    top: 0;
    ${StyledInput}:focus ~ &, ${StyledInput}:valid ~ &{
        top: -15px;
        font-size: .7rem;
    } 
`;

const StyledFieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    position: relative;
    border: none;
    width: 70%;
`;

export const MainInput = () => {
    const [ meetUpName, setName ] = useState<string>('');
    return (
        <StyledWrapper>
            <StyledForm>
                <StyledFieldset>
                    <StyledInput required name="eventName" type="text" value={meetUpName} onChange={(e) => setName(e.target.value)} />
                    <StyledLabel htmlFor="eventName">
                        Event Name
                    </StyledLabel>
                </StyledFieldset> 
            </StyledForm>
        </StyledWrapper>  
    );
};
