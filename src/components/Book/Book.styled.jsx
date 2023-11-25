import styled from 'styled-components';

export const BookWrapper = styled.div`
  position: relative;
  width: 80rem;
  height: 60rem;
  padding: ${(props) => props.theme.coverPadding};
`;
