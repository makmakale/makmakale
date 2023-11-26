import styled from 'styled-components';
import { coverRotateTimeout, totalPages } from '@/common/constants/book';

const Cover = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.cover};
  border-top-right-radius: 0.6rem;
  border-bottom-right-radius: 0.6rem;
  box-shadow: ${({ theme }) => theme.coverShadow};
  display: flex;
  align-items: center;
`;

export const CoverContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  transition: opacity ${coverRotateTimeout / 2}ms;

  h1 {
    font-size: 4rem;
    letter-spacing: .5rem;
    text-transform: uppercase;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0004);
    line-height: .7em;
  }
`;

export const CoverLeft = styled(Cover)`
  position: absolute;
  transform-origin: center left;
  z-index: ${totalPages + 1};
  transition: transform ${coverRotateTimeout}ms cubic-bezier(.645, .045, .355, 1);
  cursor: pointer;

  &.turn {
    transform: rotateY(-180deg);
    cursor: unset;

    ${CoverContent} {
      opacity: 0;
    }
  }
`;

export const CoverRight = styled(Cover)`
  position: relative;
  z-index: -1;
`;
