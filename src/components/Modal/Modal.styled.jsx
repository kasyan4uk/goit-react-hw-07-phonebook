import styled from 'styled-components';
import { Form } from 'formik';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const StyledModal = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 20px;
  border: 2px solid black;
  width: 480px;
  height: 480px;
  margin: 0 auto;
  background-color: #fff;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 50px;
`;

export const Input = styled.input`
  width: 300px;
  height: 28px;
  font-size: 16px;
  outline-color: skyblue;
`;

export const Span = styled.span`
  padding-bottom: 10px;
`;

export const Button = styled.button`
  min-width: 100px;
  height: 24px;
  font-weight: 600;
  font-size: 14px;
  outline: none;
  border: 1px solid skyblue;
  border-radius: 4px;
  margin-right: 30px;
`;
