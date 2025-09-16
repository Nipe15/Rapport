import styled from "styled-components";

export const RapportStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    padding: 1rem;
    margin: 1rem;
    overflow-y: auto;
    max-height: 320px;
    justify-items: center;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-height: calc(3 * 320px);
        overflow-y: auto;
    }

    figure {
        width: 100%;
        max-width: 400px;
        height: 300px;
        border-radius: 0 0 4px 4px;
        padding: 1rem;
        margin: 0;
        background-color: var(--color-bg);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    h3 {
        font-weight: 750;
        margin: 0.5rem 0;
    }

    a {
        text-decoration: none;
    }

    p {
        color: var(--color-text-primary);
    }

    .category {
        font-family: 'Heebo', sans-serif;
        font-size: 0.75rem;
        font-weight: 500;
        letter-spacing: 0.025rem;
        text-transform: uppercase;
        color: var(--color-text-primary);
        background-color: var(--color-accent);
        border-radius: 0.25rem;
        padding: 0.35rem 0.5rem;
        width: fit-content;
        border: none;
    }

    img {
        height: 180px;
        width: 100%;
        object-fit: cover;
        border-radius: 4px;
    }
`;
