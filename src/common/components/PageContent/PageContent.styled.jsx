import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.centered ? 'center' : 'flex-start')};
  height: 100%;
  overflow: hidden;
`;

export const PageTitle = styled.h1`
`;
