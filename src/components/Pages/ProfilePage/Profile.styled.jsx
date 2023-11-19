import styled from 'styled-components';

export const ProfileImage = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: .25rem solid ${(props) => props.theme.primaryColor};
  margin-bottom: .8rem;
  overflow: hidden;
  
  img{
    height: 100%;
  }
`;

export const ProfileName = styled.h1`
  font-size: 2.7rem;
  line-height: 1;
`;
export const ProfileJobTitle = styled.h3`
  font-size: 1.5rem;
  color: ${(props) => props.theme.primaryColor};
`;

export const ProfileDescription = styled.p`
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: justify;
  text-indent: 1.5rem;
`;

export const ProfileSection = styled.div`
  position: relative;
  width: 90%;
  padding-top: 1.5rem;
  border: 2px solid ${(props) => props.theme.primaryColor};
  border-radius: .8rem;
  margin-top: 2rem;
`;
export const ProfileSectionTitle = styled.h3`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -1.2rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.primaryColor};
  background: ${(props) => props.theme.whiteColor};
  border: 2px solid ${(props) => props.theme.primaryColor};
  border-radius: 1.5rem;
  padding: .3rem 1rem;
  font-size: 1rem;
  transition: 500ms;
  
  &:hover{
    color: ${(props) => props.theme.whiteColor};
    background: ${(props) => props.theme.primaryColor};
    border-color: ${(props) => props.theme.whiteColor};
  }
`;

export const ProfileTable = styled.table`
  margin-bottom: 1rem;
  width: 100%;
  
  tr{
    margin-top: 5px;
    margin-bottom: 5px;
    
    &:nth-child(odd){
      background: #eee;
    }
    
    td{
      padding: 3px 7px;
      
      &:first-child{
        font-weight: 600;
      }
      
      .small{
        margin-left: .5rem;
        font-size: .8rem;
        color: #777;
      }
      
      a{
        color: ${(props) => props.theme.primaryColor};
        text-decoration: none;
      }
    }
  }
`;
