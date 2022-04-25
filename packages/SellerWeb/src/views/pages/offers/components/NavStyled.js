import styled from "styled-components";


const NavStyled = styled.nav`
  margin-top: 19px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  .menu {
    border: none;
    background-color: transparent;
    margin-right: 20px;
    line-height: 1;
    margin-bottom: 15px;
    svg {
      width: 19px;
    }
  }
  .nav-link-btn {
    display: block;
    margin-right: 20px;
    padding: 5px 10px;
    height: 32px;
    border-radius: 5px;
    text-decoration: none;
    color: #4c6870;
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 15px;
    white-space: nowrap;
    transition: background-color 0.2s linear;
    &:hover {
      background: #b4e1db57;
      /* color: white;
      span {
        color: white;
      } */
    }
    &.active {
      background: var(--theme-clr);
      color: white;
      span {
        color: white;
      }
    }
    span {
      color: #a0afb4;
    }
  }
  .link {
    svg {
      width: 42px;
    }
  }
`;

export default NavStyled