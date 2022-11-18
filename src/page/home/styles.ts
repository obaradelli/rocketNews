import styled, { css } from "styled-components";

export const DivContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* grid-template-rows: 1fr 1fr; */

    height: 100vh;

    .bg-image {
      max-width: 100%;
      min-width: 100%;

      max-height: 100%;
      min-height: 100%;
    }
  `}
`;

export const SecondDivContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-left: 35px;
    padding-top: 50px;

    .geral-box {
      display: flex;
      flex-direction: column;

      gap: 5.75rem;
      height: 100%;
    }

    .header-img {
      width: 24.375rem;
      height: 5.875rem;
    }

    .texts {
      display: flex;
      flex-direction: column;

      padding-right: 2.3125rem;
      gap: 0.5625rem;
      width: 100%;

      h1 {
        font-family: ${theme.fontFamily.workSans};
        font-weight: ${theme.fontWeight.bold};
        font-size: ${theme.fontSize[24]};
        line-height: ${theme.lineHeight[160]};

        font-style: normal;
        color: ${theme.colors["--title-color"]};
      }

      p {
        font-family: ${theme.fontFamily.leagueSpartan};
        font-weight: ${theme.fontWeight.bold};
        font-size: ${theme.fontSize[14]};
        line-height: ${theme.lineHeight[160]};

        font-style: normal;
        color: ${theme.colors["--text-color"]};
      }

      span {
        font-family: ${theme.fontFamily.leagueSpartan};
        font-weight: ${theme.fontWeight.regular};
        font-size: ${theme.fontSize[14]};
        line-height: ${theme.lineHeight[130]};

        font-style: normal;
        color: ${theme.colors["--text-color"]};
      }
    }

    .form {
      position: relative;
      display: flex;
      flex-direction: column;

      gap: 1.0625rem;

      filter: drop-shadow(4px 10px 15px rgba(0, 0, 0, 0.5));

      label {
        font-family: ${theme.fontFamily.leagueSpartan};
        font-weight: ${theme.fontWeight.bold};
        font-size: ${theme.fontSize[14]};
        line-height: ${theme.lineHeight[130]};

        font-style: normal;
        color: ${theme.colors["--form-color"]};
      }

      input {
        all: unset;

        background: white;
        border-left: 5px solid #04d361;

        height: 3rem;
        min-width: 105%;
        max-width: 105%;

        font-family: ${theme.fontFamily.workSans};
        font-weight: ${theme.fontWeight.regular};
        font-size: ${theme.fontSize[12]};
        line-height: ${theme.lineHeight[130]};

        font-style: normal;
        /* color: ${theme.colors["--form-color"]}; */
        padding-left: 1rem;
      }
    }

    .divRow {
      position: relative;
      display: flex;
      flex-direction: row;

      button {
        cursor: pointer;
        position: relative;
        all: unset;
        background: ${theme.colors["--bg-button-color"]};

        padding: 0.625rem;

        img,
        svg {
          cursor: pointer;
          color: white;
        }
      }
    }

    .letMeRead {
      a {
        cursor: pointer;

        font-family: ${theme.fontFamily.leagueSpartan};
        font-weight: ${theme.fontWeight.bold};
        font-size: ${theme.fontSize[14]};
        line-height: ${theme.lineHeight[130]};

        font-style: normal;
        color: ${theme.colors["--bg-button-color"]};
      }

      img,
      svg {
        color: #8257e5;
        vertical-align: middle;
      }
    }
  `}
`;
