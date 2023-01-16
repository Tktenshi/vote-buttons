import styled from 'styled-components';

export const DropdownBtn = styled.button`
  //width: 36px;
  //height: 36px;
  //cursor: pointer;
  //padding: 6px;
  //background-color: #EFEFEF;
  //color: white;
  
  
  //background-color: #4CAF50;
  //border: none;
`
export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  //left: 50%;
  //transform: translateX(-50%);
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  & > * {
    color: black;
    padding: 6px 8px;
    text-decoration: none;
    display: block;

    &:hover {
      //background-color: #ddd;
      background-color: #E5E5E5;
    }
  }
`

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  
  // &:hover ${DropdownBtn} {
  //   //background-color: #3e8e41;
  //   background-color: #E5E5E5;
  // }
  
  &:hover ${DropdownContent} {
    display: block;
  }
`
