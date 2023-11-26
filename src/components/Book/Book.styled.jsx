import styled from 'styled-components';

export const BookWrapper = styled.div`
  position: relative;
  width: 40rem;
  height: 60rem;
  transition-duration: 1s;
  transform: translateX(${(props) => (props.open ? '20rem' : 0)});
`;
