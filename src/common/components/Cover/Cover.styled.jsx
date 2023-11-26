import styled from 'styled-components';
import { coverRotateTimeout } from '@/common/constants/book';

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

export const CoverContent = styled.div`
  transform: rotateY(180deg);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  transition: opacity ${coverRotateTimeout - 200}ms;

  h1 {
    font-size: 4rem;
    letter-spacing: .5rem;
    text-transform: uppercase;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0004);
    line-height: .7em;
  }
`;

export const CoverLeft = styled(Cover)`
  transform: rotateY(180deg);
  transition: transform ${coverRotateTimeout}ms cubic-bezier(.645, .045, .355, 1);

  &.turn {
    transform: rotateY(0deg);

    ${CoverContent} {
      opacity: 0;
    }
  }
`;

export const CoverRight = styled(Cover)`
  z-index: -1;
  transform: rotateY(180deg);
`;
