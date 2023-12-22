import { coverRotateTimeout, totalPages } from '@/common/constants/book';
import { mobileOrTabletWidth, mobileWidth } from '@/common/constants/media';
import styled from 'styled-components';

const Cover = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.cover};
  color: ${({ theme }) => theme.whiteColor};
  border-top-right-radius: 0.6rem;
  border-bottom-right-radius: 0.6rem;
  box-shadow: ${({ theme }) => theme.coverShadow};
  display: flex;
  align-items: center;

  @media screen and (${mobileOrTabletWidth}) {
    border-top-right-radius: unset;
    border-bottom-right-radius: unset;
    box-shadow: unset;
  }
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
    font-size: 4.5rem;
    letter-spacing: .5rem;
    text-transform: uppercase;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0004);
    line-height: .7em;
    text-shadow: 5px 5px 10px #000;

    @media screen and (${mobileWidth}) {
      font-size: 3rem;
    }
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

  @media screen and (${mobileOrTabletWidth}) {
    position: relative;
    transform-origin: unset;
    z-index: unset;

    &.turn {
      transform: unset;
    }
  }
`;

export const CoverRight = styled(Cover)`
  position: relative;
  z-index: -1;

  @media screen and (${mobileOrTabletWidth}) {
    display: none;
  }
`;
