import styled from "styled-components";

export const HeaderStyled = styled.header`
    text-align: center;
    padding: 1rem 0 1rem 0;
    h1 {
            font-size: 3rem;
            font-weight: 900;
            color: var(--color-accent);
        }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`