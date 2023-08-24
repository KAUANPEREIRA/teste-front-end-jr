import styled from "styled-components";

export const CardsCategoryContainer = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  margin: auto;
`;

export const CardBoxImage = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 128px;
  min-height: 128px;
  height: 100%;
  border-radius: 10px;
  background-color: rgba(244, 244, 244, 1);
`;

export const Card = styled.div`
  padding-left: 40px;
  width: 128px;
  height: 174px;
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: rgba(78, 78, 78, 1);
  font-weight: 500px;
`;
