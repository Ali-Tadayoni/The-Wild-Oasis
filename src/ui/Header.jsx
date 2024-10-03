import styled from "styled-components";

import HeaderMenu from "./HeaderMenu";
import UserAvatr from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  justify-content: flex-end;
  align-items: center;
`;

function Header() {
  return (
    <StyledHeader>
      <UserAvatr />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
