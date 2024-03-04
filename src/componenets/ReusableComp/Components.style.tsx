import { BsFillInfoSquareFill } from 'react-icons/bs';
import styled from 'styled-components';
import { IoIosCloseCircleOutline } from "react-icons/io";

export const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const CardContainer = styled.div`
  perspective: 1000px;
  margin-bottom: 20px;
  height: 60lvH;
  width: 100%;
  background-color: #c75952;
  border-radius: 10px;
`;

export const Card = styled.div<{ flipped: boolean }>`
  width: 260px;
  height: 260px;
  transition: transform 0.5s;
  transform-style: preserve-3d;
  ${({ flipped }) => flipped && 'transform: rotateY(180deg);'}
  display: flex;
    margin: auto;
    padding-top: 50px;
`;

export const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

export const Back = styled.div`
  background: white;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  margin-left: -7px;
  border: 1px solid;
  padding: 5px;
  border-radius: 5px;
`;


export const ChoicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  justify-content: center;
  gap: 20px;
`;

export const Option = styled.button<{ isselected: boolean; iscorrect: boolean | null }>`
  background-color: ${({ isselected, iscorrect }) => (
    isselected ? (iscorrect ? 'green' : 'red') : 'white'
  )};
  color: ${({ isselected, iscorrect }) => (isselected ? 'white' : 'black')};
  width: 100%;
  border: 1px solid;
  border-radius: 5px;
  padding: 5px 10px; /* Adjust padding for better spacing */
  transition: background-color 0.3s;
  position: relative;

  &:hover {
    background-color: #e0dede;
  }
`;

export const Circle = styled.div<{ isselected: boolean }>`
  width: 40px;
  height: 40px;
  background-color: #333;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: -7px;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  font-weight: bold;
`;

export const ChoiceButton = styled.button`
  margin: 5px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Image = styled.img`
width: 260px; /* Set the width of the container */
height: 260px; /* Set the height of the container */
object-fit: cover;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
background-blend-mode: darken;
`;

export const QuestionContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
  max-width: 750px;
  margin: auto;
  padding: 15px;
`;

export const QuestionText = styled.h2`
display: flex;
width: 100%;
padding-left: 70px;
`;


export const BoxContainer = styled.div`
display: flex;
gap: 20px;
width: 90%;
`;

export const InfoIcon = styled(BsFillInfoSquareFill)`
position: absolute;
top: 5px;
right: 5px;
`;

export const CloseIcon = styled(IoIosCloseCircleOutline)`
position: absolute;
top: 5px;
right: 5px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  width: 80%;
  margin: auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const ModalCloseButton = styled.button`
  background-color: #ff6347;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
`;

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
`;