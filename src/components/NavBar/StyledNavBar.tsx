import styled from "styled-components";

export const StyledNavBar = styled.header`
  padding: 0.75rem 2rem;
  box-shadow: 0px 2px 5px 0px #cccccc;
  position: sticky;
  background-color: white;
  top: 0;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  a {
    color: ${(props) => props.theme.colors.main};
    font-size: 1.5rem;
    font-weight: 500;
    text-decoration: none;
  }
  svg {
    position: relative;
    inset: 5px 0 0 31px;
  }
  input {
    padding: 0.5rem 0.75rem 0.5rem 2.5rem;
    border-radius: 0.375rem;
    border: 1px solid #d1d5db;
    width: 300px;
    font-size: 0.875rem;
  }
  input:focus {
    outline-offset: -2px;
    outline: 2px solid transparent;
    border-color: #6366f1;
    box-shadow: inset 0px 0px 1px #313131;
  }
`;
