import styled from 'styled-components';

export const LayoutContainer = styled.div`
  margin: 0 auto;
`;

export const HeaderContainer = styled.header`
background-color: #c75952;
padding: 20px;
text-align: center;
margin-bottom: 20px;
display: flex;
align-items: baseline;
justify-content: space-between;
  margin-bottom: 20px;
  h1 {
    margin: 0;
    font-size: 24px;
    color: #333;
  }
`;

export const HeaderLogoContainer = styled.div`
display: flex;
align-items: baseline;
gap: 4px;
`;

export const ScoreBoardContainer = styled.div`
display: flex;
align-items: center;
width: 50%;
margin: auto;
gap: 5px;
`;
