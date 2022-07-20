import styled from "styled-components";

const Wrapper = styled.div`
  .nav {
    gap: 18px;
    .search {
      flex: 1;
      width: inherit;
      margin-bottom: 11px;
    }
    .sort {
      padding: 10px;
      width: 40px;
      height: 40px;
      background: #ffffff;
      border: 1px solid rgba(232, 232, 232, 0.5);
      border-radius: 5px;
    }
    button {
      margin-bottom: 11px;
    }
  }
  .expanded-table-main {
    padding: 0 30px;
    border: 1px solid #05ae4b;
    border-left-width: 6px;
    border-radius: 5px;
  }
  .filters {
    margin-bottom: 11px;
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    .width {
      width: 150px;
    }
  }
  .archive-table-range {
    padding-left: 0;
    .rs-picker-toggle {
      height: 39px !important;
    }
    svg {
      path {
        fill: #ccd4d6;
      }
    }
    .rs-picker-toggle-placeholder {
      color: #ccd4d6;
    }
  }
`;

const ExpandedTableStyled = styled.table`
  width: 100%;
  td {
    padding: 12px 0;
    border-bottom: 1px solid #ebeeef;
    &:first-of-type {
      width: 25%;
    }
    .img {
      margin-right: 10px;
      width: 50px;
      height: 50px;
      border: 1px solid #e8e8e8;
      background: #979797;
      border-radius: 5px;
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
    a {
      text-decoration: none;
    }
    p {
      font-size: 13px;
      font-weight: 500;
      line-height: 130%;
      color: rgba(0, 0, 0, 0.8);
      margin: 0;
      &.grey {
        color: #0027334d;
        margin-bottom: 6px;
      }
    }
  }
`;

export { Wrapper, ExpandedTableStyled };
