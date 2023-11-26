import styled from 'styled-components';

export const PagesContainer = styled.div`
  position: absolute;
  width: calc(100% - 1.5rem);
  height: calc(100% - 3rem);
  margin-top: 1.5rem;
  perspective: 300rem;
  z-index: 1;
`;

export const Page = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.pageColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 1.5rem 2rem;
  overflow: hidden;

  right: 0;
  transform-style: preserve-3d;
  transform-origin: left;
  transition: transform 1s cubic-bezier(.645, .045, .355, 1);
  padding-left: 3rem;

  &::before,
  &::after {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &::before {
    background: ${(props) => props.theme.pageBg};
  }

  &.turn {
    transform: rotateY(-180deg);
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
