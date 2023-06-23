import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const ErrorText = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: red;
`;

export const ErrorButton = styled.button`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 28px;
  width: 115px;
  font-weight: 600;
  font-size: 14px;
  outline: none;
  border: 1px solid skyblue;
  border-radius: 4px;
`;
