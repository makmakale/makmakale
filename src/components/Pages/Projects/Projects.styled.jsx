import { mobileWidth } from '@/common/constants/media';
import styled from 'styled-components';

const BORDER_SIZE = 8;
const LOCK_SIZE = 40;
const FIRST_BG_COLOR = '#ff4d4d';
const SECOND_BG_COLOR = '#3ae374';
const THIRD_BG_COLOR = '#5fa7ff';
const FORTH_BG_COLOR = '#af5fff';

export const ProjectsContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  @media screen and (${mobileWidth}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ProjectCardContent = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 25px;
  gap: 10px;
  transition: .5s;
  transition-delay: 0s;
  opacity: 0;

  h2 {
    text-align: center;
    font-weight: 600;
    letter-spacing: .1em;
  }

  p {
    text-align: center;
    color: #ffffff;
  }
`;

export const ProjectCardButtonsGroup = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  gap: 1rem;

  a {
    color: #fff;
    padding: 10px 15px;
    text-decoration: none;
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: .1em;
  }
`;

const DefaultWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 500ms;
`;

export const ProjectCardImage = styled(DefaultWrapper)`
  background: #ffffff no-repeat center center;
  background-size: cover;
  height: 55%;
  z-index: 1;
  transform-origin: bottom;

  &::before {
    content: '';
    position: absolute;
    bottom: -${BORDER_SIZE / 2}px;
    left: 50%;
    transform: translateX(-50%);
    width: ${LOCK_SIZE}px;
    height: ${LOCK_SIZE / 2}px;
    background: ${({ theme }) => theme.whiteColor};
    border: ${BORDER_SIZE}px solid ${({ theme }) => theme.primaryColorDark};
    border-bottom: 0;
    border-top-left-radius: ${LOCK_SIZE}px;
    border-top-right-radius: ${LOCK_SIZE}px;
    z-index: 1;
  }
`;

export const ProjectCardText = styled(DefaultWrapper)`
  height: 45%;
  border-top: ${BORDER_SIZE}px solid ${({ theme }) => theme.primaryColorDark};
  transform-origin: top;
  transition-delay: .5s;
  align-items: flex-end;

  &::before {
    content: '';
    position: absolute;
    top: -${BORDER_SIZE / 2}px;
    left: 50%;
    transform: translateX(-50%);
    width: ${LOCK_SIZE}px;
    height: ${LOCK_SIZE / 2}px;
    background: ${({ theme }) => theme.whiteColor};
    border: ${BORDER_SIZE}px solid ${({ theme }) => theme.primaryColorDark};
    border-top: 0;
    border-bottom-left-radius: ${LOCK_SIZE}px;
    border-bottom-right-radius: ${LOCK_SIZE}px;
    z-index: 1;
  }

  h2 {
    color: #222;
    font-size: 1.25em;
    letter-spacing: 0.15em;
    font-weight: 500;
    text-transform: uppercase;
    background: #ffffff;
    padding: 5px 25px;
    box-shadow: 0 0 0 ${BORDER_SIZE}px ${({ theme }) => theme.primaryColorDark};
  }
`;

export const ProjectCard = styled.div`
  position: relative;
  width: 100%;
  height: 380px;
  border: ${BORDER_SIZE}px solid ${({ theme }) => theme.primaryColorDark};
  background: ${({ theme }) => theme.primaryColorDark};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;

  &:nth-child(1) {
    ${ProjectCardText} {
      background: ${FIRST_BG_COLOR};
    }

    ${ProjectCardContent} {
      h2 {
        color: ${FIRST_BG_COLOR};
      }
    }

    ${ProjectCardButtonsGroup} {
      a {
        background: ${FIRST_BG_COLOR};
      }
    }
  }

  &:nth-child(2) {
    ${ProjectCardText} {
      background: ${SECOND_BG_COLOR};
    }

    ${ProjectCardContent} {
      h2 {
        color: ${SECOND_BG_COLOR};
      }
    }

    ${ProjectCardButtonsGroup} {
      a {
        background: ${SECOND_BG_COLOR};
      }
    }
  }

  &:nth-child(3) {
    ${ProjectCardText} {
      background: ${THIRD_BG_COLOR};
    }

    ${ProjectCardContent} {
      h2 {
        color: ${THIRD_BG_COLOR};
      }
    }

    ${ProjectCardButtonsGroup} {
      a {
        background: ${THIRD_BG_COLOR};
      }
    }
  }

  &:nth-child(4) {
    ${ProjectCardText} {
      background: ${FORTH_BG_COLOR};
    }

    ${ProjectCardContent} {
      h2 {
        color: ${FORTH_BG_COLOR};
      }
    }

    ${ProjectCardButtonsGroup} {
      a {
        background: ${FORTH_BG_COLOR};
      }
    }
  }

  &:hover {
    ${ProjectCardImage} {
      transform: translateY(-100%) rotateX(90deg);
    }

    ${ProjectCardText} {
      transform: translateY(100%) rotateX(90deg);
    }

    ${ProjectCardContent} {
      opacity: 1;
      transition-delay: .5s;
    }
  }
`;
