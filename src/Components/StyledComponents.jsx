import styled from 'styled-components'

export const Container = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    background: #1A1D20;
    color: white
`
export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
`

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const FormLeft = styled.form`
    background: #B81D24;
    min-width: 400px;
    min-height: 50%;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 5px;

`

export const Form = styled.form`
    background: #1A1D20;
    min-width: 400px;
    min-height: 50%;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 5px;

`


export const TitleWrapper = styled.h1`
    margin-bottom: 40px;
    display: inline;
    text-align: center;
`

export const FormLabel = styled.label`
    margin-bottom: 8px
    font-size: 14px
    color: white;
`

export const FormInput = styled.input`
    padding: 15px 15px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`

export const FormButton = styled.button`
    padding: 15px 0;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
`

export const Text = styled.span`
    text-align: center;
    margin: 25px auto;
    color: white;
    font-size: 15px;
`
