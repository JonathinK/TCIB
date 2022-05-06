import styled,{css} from 'styled-components';

export const BannerTitle = styled.h1`
  position: relative;
  color:${props => props.theme.colors.body};
  grid-column: 7 / 9;
  grid-row: 1 / 2;
  justify-self:center;
  align-self:center;
  font-family:${props => props.theme.fonts.main};
  font-size:5rem;
  font-weight:300;
  text-align:center;
  text-transform:uppercase;
  
`