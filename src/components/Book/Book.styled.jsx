import styled from 'styled-components';

export const BookWrapper = styled.div`
  position: relative;
  width: 80rem;
  height: 60rem;
  padding: ${(props) => props.theme.coverPadding};

  &::before,
  &::after {
    position: absolute;
    content: '';
    z-index: -1;
    bottom: 30px;
    left: 4%;
    width: 70%;
    height: 70%;
    background-color: #000;
    transform-origin: right;
    transform: skewY(-4.5deg);
    filter: blur(15px);
    opacity: .5;
  }

  &::after {
    left: unset;
    right: 4%;
    transform-origin: left;
    transform: skewY(4.5deg);
  }
`;
