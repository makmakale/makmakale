import styled from 'styled-components';

const Cover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: ${(props) => props.theme.cover};
  border-top-left-radius: 0.6rem;
  border-bottom-left-radius: 0.6rem;
  transform-origin: right;

  &::after {
    position: absolute;
    content: '';
    top: ${(props) => props.theme.coverPadding};
    bottom: ${(props) => props.theme.coverPadding};
    left: ${(props) => props.theme.coverPadding};
    right: 0;
    background-color: ${(props) => props.theme.whiteColor};
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
  }
`;

export const CoverLeft = styled(Cover)`
  &::before {
    position: absolute;
    content: '';
    left: calc(100% - 1.5px);
    z-index: 1;
    width: 3px;
    height: 100%;
    box-shadow: -3px 0 10px rgba(0, 0, 0, .5);
  }
`;

export const CoverRight = styled(Cover)`
  left: 0;
  transform: rotateY(180deg);
`;
