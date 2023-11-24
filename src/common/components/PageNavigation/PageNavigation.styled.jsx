import styled from 'styled-components';

const PageBtn = styled.span`
  position: absolute;
  bottom: .5rem;
  right: .5rem;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: ${({ theme }) => theme.textSecondaryColor};
  transition: 500ms;

  &:hover {
    color: ${({ theme }) => theme.primaryColor};
  }
`;
export const PrevPage = styled(PageBtn)`
  transform: rotateY(-180deg);
`;
export const NextPage = styled(PageBtn)``;
