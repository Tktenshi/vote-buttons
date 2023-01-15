import styled, { keyframes } from 'styled-components';

export const MainButtons = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;  
  //gap: 0 8%;
  //flex-wrap: wrap;
  //margin: 5%;
  //background: black;
`

export const ScoreButtons = styled.div`  
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5%;
  gap: 8%;
  width: 100%;
  height: 60%;
`

export const FinishButton = styled.button`    
  width: 100px;
  height: 40px;
  margin: 1% 0 4%;
`

const glowing = keyframes`
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
`

export const Button = styled.button`
  width: 35%;
  height: 80%;
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  -webkit-tap-highlight-color: transparent;
  box-shadow: rgb(0 0 0 / 25%) 0 8px 15px;
  transition: transform 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  touch-action: manipulation;
  will-change: transform;
  
  &:hover {
    transform: translate(-0.5%, -0.5%);
  }

  &:active {
    color: #000;
    box-shadow: none;
    transform: translate(0, 0);
    transition-duration: .35s;
  }

  &:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: ${glowing} 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
  }

  &:hover:before {
    opacity: 1;
  }

  &:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: inherit;
    left: 0;
    top: 0;
    border-radius: 10px;
    opacity: 1;
  }

  &:active:after {
    //opacity: 0.9;
  }
`

export const RedButton = styled(Button)`
  background: #FF4742; 
`

export const BlackButton = styled(Button)`
  background: #191919;
`
