import styled from 'styled-components';

export const PagesContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  perspective: 300rem;
  z-index: 2;
`;

const Page = styled.div`
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  background: ${(props) => props.theme.pageColor};
  box-shadow: ${(props) => props.theme.pageShadow};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;

  &::before,
  &::after {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

export const LeftPage = styled(Page)`
  padding-right: 3rem;

  &::after {
    background: ${(props) => props.theme.leftPageBg};
  }

  .page-content {
    font-style: italic;
    z-index: 1;

    &.front {
      padding-right: 3rem;
      transform: unset;
    }
  }
`;

export const RightPage = styled(Page)`
  right: 0;
  transform-style: preserve-3d;
  transform-origin: left;
  transition: transform 1s cubic-bezier(.645, .045, .355, 1);
  padding-left: 3rem;
  z-index: ${(props) => props.zIndex};

  &::before {
    background: ${(props) => props.theme.rightPageBg};
  }

  &.turn {
    transform: rotateY(-180deg);
  }
`;

export const PaginationButton = styled.div`
  position: absolute;
  display: block;
  top: 0;
  right: 0;
  bottom: 0;
  width: ${(props) => props.theme.coverPadding};
  cursor: pointer;
  z-index: 999;
  transition: 500ms;

  &:hover{
    background: #eee;
  }
`;

export const PageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  &.front {
    transform: rotateY(180deg) translateZ(1px);
  }

  &.back {
    transform: rotateY(0deg) translateZ(1px);
  }
`;
