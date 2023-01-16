import React, { memo, ReactNode } from 'react';

import * as Styled from './styled';

interface IDropdownBtnProps {
  children: ReactNode;
  className?: string
}

const DropdownBtn: React.FC<IDropdownBtnProps> = ({ children, className }) => {
  return (
    <Styled.Dropdown className={className}>
      <Styled.DropdownBtn>
        Menu
        <Styled.DropdownContent>
          {children}
        </Styled.DropdownContent>
      </Styled.DropdownBtn>
    </Styled.Dropdown>
  );
};

export default memo(DropdownBtn);
