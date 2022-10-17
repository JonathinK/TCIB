import styled from "styled-components";

/* Styles For Drop Down Hover When Hovered Are Located In DesktopListItem Styled Component */
export const TriggerLink = styled.button`
/* Default Styles For The Trigger Link That Opens The Desktop DropDown */
  font-family: ${props => props.theme.fonts.reading};
  background:transparent;
  font-weight:${props => props.theme.fontWeight.semiBold};
  font-size:1.125rem;
  text-transform:uppercase;
  color:${({theme}) => theme.colors.body};
  border:none;

/* If Device Has Hover Capability */
  @media ${({theme}) => theme.breakpoints.hover}{
    cursor:pointer;
  }


  `