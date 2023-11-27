import { mobileWidth } from '@/common/constants/media';
import styled from 'styled-components';

export const CompanyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (${mobileWidth}) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const CompanyLogo = styled.img`
  height: 40px;
  width: auto;

  @media screen and (${mobileWidth}) {
    width: 100%;
    height: auto;
  }
`;

export const WorkPeriod = styled.div`
  font-style: italic;
`;

export const ProjectInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media screen and (${mobileWidth}) {
    flex-direction: column;
  }
`;

export const ProjectImage = styled.img`
  margin: 0 auto;
  font-style: italic;
  shape-margin: 1rem;
  max-width: 200px;
  height: auto;
  vertical-align: middle;
  outline: 1px solid ${({ theme }) => theme.primaryColor};
  border-radius: 10px;

  @media screen and (${mobileWidth}) {
    max-width: 100%;
  }
`;

export const ProjectTable = styled.table`
  width: 100%;

  tr {
    margin-top: 5px;
    margin-bottom: 5px;

    &:nth-child(odd) {
      background: #eee;
    }

    td {
      padding: 3px 7px;

      &:first-child {
        font-weight: 600;
        min-width: 100px;
      }

      .small {
        margin-left: .5rem;
        font-size: .8rem;
        color: #777;
      }
    }
  }
`;

export const ProjectDescription = styled.div`
  text-align: justify;
`;

export const ProjectResponsibilities = styled.ul`
  list-style-type: square;
  margin-left: 20px;
  text-align: justify;
`;

export const SectionTitle = styled.h4`
  text-transform: uppercase;
`;
