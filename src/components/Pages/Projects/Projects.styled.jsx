import { mobileWidth } from '@/common/constants/media';
import styled from 'styled-components';

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
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
`;

export const ProjectCardContentDetails = styled.div`
  padding: 1rem 1.5rem;
  text-align: center;
  color: #ffffff;
  height: 100%;
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

export const ProjectCardImage = styled.div`
  position: relative;
  top: 15px;
  width: 200px;
  height: 150px;
  padding: 10px;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media screen and (${mobileWidth}) {
    width: 250px;
    height: 200px;
  }

  &::before {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    width: 500px;
    height: 150px;
    background: linear-gradient(transparent, #ff3c7b, #ff3c7b, #ff3c7b, transparent);
    animation: animateCardImageLines 6s linear infinite;
  }

  &::after {
    position: absolute;
    content: '';
    inset: 3px;
    background: #292929;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    z-index: 1;
  }

  @keyframes animateCardImageLines {
    0% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
  }
`;

export const ProjectLines = styled.div`
  position: absolute;
  inset: 0;
  background: #000;
  overflow: hidden;

  &::before {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    width: 600px;
    height: 120px;
    background: linear-gradient(transparent, #45f3ff, #45f3ff, #45f3ff, transparent);
    animation: animateCardLines 4s linear infinite;
  }

  &::after {
    position: absolute;
    content: '';
    inset: 3px;
    background: ${({ theme }) => theme.projectBg};
  }

  @keyframes animateCardLines {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

export const ProjectCard = styled.div`
  position: relative;
  width: 100%;
  min-height: 380px;
  background: ${({ theme }) => theme.primaryColorDark};
  transition: .5s;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  &:nth-child(1) {
    ${ProjectCardContent} {
      h3 {
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
    ${ProjectLines},
    ${ProjectCardImage} {
      &::before {
        animation-delay: .5s;
      }
    }

    ${ProjectCardContent} {
      h3 {
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
    ${ProjectLines},
    ${ProjectCardImage} {
      &::before {
        animation-delay: 1s;
      }
    }

    ${ProjectCardContent} {
      h3 {
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
    ${ProjectLines},
    ${ProjectCardImage} {
      &::before {
        animation-delay: 1.5s;
      }
    }

    ${ProjectCardContent} {
      h3 {
        color: ${FORTH_BG_COLOR};
      }
    }

    ${ProjectCardButtonsGroup} {
      a {
        background: ${FORTH_BG_COLOR};
      }
    }
  }
`;
