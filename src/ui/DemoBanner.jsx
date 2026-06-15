import styled from "styled-components";

const StyledBanner = styled.div`
  background-color: var(--color-yellow-100);
  color: var(--color-yellow-700);
  padding: 1rem 2.4rem;
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;
  border-bottom: 1px solid var(--color-grey-200);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  @media (max-width: 48em) {
    font-size: 1.2rem;
    padding: 0.8rem 1.2rem;
  }
`;

function DemoBanner() {
  return (
    <StyledBanner>
      <span role="img" aria-label="waving hand">
        👋
      </span>
      <span>Data mutations (create, update, delete) are deactivated in this demo app.</span>
    </StyledBanner>
  );
}

export default DemoBanner;
