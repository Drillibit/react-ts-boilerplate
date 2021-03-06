import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import { SupportiveFields, InputText } from '../Fields';

const StyledWrapper = styled.div`
    margin: 0 auto;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const StyledMainBlock = styled.div`
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
    box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2);
`;

const StyledInput = styled.input`
    border: none;
    border-bottom: 2px solid #fff;
    background: transparent;
    outline: none;
    color: #fff;
    font-size: 1.4rem;
    width: 82%;
`;

const StyledLabel = styled.label`
    color: #fff;
    font-family: Roboto;
    position: absolute;
    transition: 0.2s ease all;
    top: 48px;
    ${StyledInput}:focus ~ &, ${StyledInput}:valid ~ &{
        top: 26px;
        font-size: .7rem;
    } 
`;

const StyledFieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    position: relative;
    border: none;
    width: 70%;
    margin: 5% auto;
`;

const StyledHeader = styled.h1`
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #fff;
    margin: 0;
    text-align: center;
`;

const StyledButton = styled.button`
    border-radius: 3px;
    border: 1px solid #4BA1EE; 
    padding: 7px 15px;
    transition: all .3s ease-in-out;
    color: #4BA1EE;
    outline: none;
    &:hover {
        box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2);        
    }
    &:active {
        transform: scale(.9);  
    }
`;

const StyledInnerBlock = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledLinkButton = styled.button`
    border: none;
    border-radius: 5px;
    font-size: 1.1rem;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #fff;
    box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2);
    width: 20%;
    outline: none;
    background-color: #68E8D1;
    transition: all .3s ease-in-out;
    &:active {
        transform: scale(.9);  
    }
`;

const StyledSection = styled.div`
    display: flex;
    margin: 20px auto;
    width: 60%;
    justify-content: space-between;
`;

const StyledSpan = styled.span`
    margin-left: 3px;
`;

export const MainInput = () => {
    const [ meetUpName, setName ] = useState<string>('');
    const [ setEventName, confirmName] = useState<boolean>(false);
    const [ cardNumber, setCardNumber ] = useState<string>('');

    return (
        <StyledWrapper>
            <StyledForm>
                <StyledMainBlock>
                    <StyledFieldset>
                        <StyledHeader>SetUp Event.</StyledHeader>
                        <StyledInnerBlock>
                            <StyledInput required name="eventName" type="text" value={meetUpName} onChange={(e) => setName(e.target.value)} />
                            <StyledLabel htmlFor="eventName">
                                Event Name
                            </StyledLabel>
                            <StyledButton onClick={(e) => {
                                    e.preventDefault();
                                    confirmName(!setEventName);
                                }}>
                                    Set Event
                            </StyledButton>
                        </StyledInnerBlock>
                    </StyledFieldset> 
                </StyledMainBlock>
            </StyledForm>
            <StyledSection>
                <SupportiveFields>                              
                        <InputText name={"setCardNumber"} value={cardNumber} onChange={setCardNumber} label={'Set wallet credentials'}/>
                </SupportiveFields>
                <StyledLinkButton>
                        <FontAwesomeIcon icon={faLink} />
                        <StyledSpan>Create a link</StyledSpan>
                    </StyledLinkButton>
            </StyledSection>
        </StyledWrapper>  
    );
};
