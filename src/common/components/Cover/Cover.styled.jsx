import styled from 'styled-components';

const Cover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: ${({ theme }) => theme.cover};
  border-top-left-radius: 0.6rem;
  border-bottom-left-radius: 0.6rem;
  box-shadow: ${({ theme }) => theme.coverShadow};
  transform-origin: right;
`;

export const CoverLeft = styled(Cover)`
  transform: rotateY(180deg);
  transition: transform 1s cubic-bezier(.645, .045, .355, 1);

  &.turn {
    transform: rotateY(0deg);
  }
`;

export const CoverRight = styled(Cover)`
  transform: rotateY(180deg);
`;
