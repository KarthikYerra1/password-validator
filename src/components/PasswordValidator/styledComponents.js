import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #24263c;
`

export const BgContainer = styled.div`
  width: 90%;
  background-color: #383a4e;
  padding: 15px 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 2px 0px #434451;
  @media screen and (min-width: 768px) {
    width: 45%;
    padding: 30px 15px;
  }
`
export const AppTitle = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
export const AppDescription = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #f8fafc;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
export const Input = styled.input`
  height: 40px;
  width: 90%;
  border-style: none;
  border-radius: 2px;
  background-color: #edeeff;
  padding: 10px 15px;
  color: #24263c;
  margin-top: 20px;
  outline: none;
  margin-bottom: 3px;
`

export const ErrorMsg = styled.p`
  color: #ef4444;
  margin: 0;
  padding: 0;
  font-family: 'Roboto';
  font-size: 10px;
  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`
