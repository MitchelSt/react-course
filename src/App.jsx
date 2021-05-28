import styled from "styled-components";

export default function App() {
  return (
    <>
      <StyledButton primary>I want this to be red</StyledButton>
      <StyledLargeButton>Large button</StyledLargeButton>
    </>
  );
}

const StyledButton = styled.button`
  background-color: ${(props) => (props.primary ? "red" : "green")};

  &:hover {
    background-color: purple;
  }

  @media (max-width: 500px) {
    background-color: yellow;
  }
`;

const StyledLargeButton = styled(StyledButton)`
  padding: 1em;
`;
