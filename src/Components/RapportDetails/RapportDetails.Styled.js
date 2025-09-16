import styled from "styled-components";

export const RapportDetailsStyled = styled.section`
  max-width: 1000px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: var(--color-bg);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  font-family: 'Arial', sans-serif;

  .back-link {
    display: inline-block;
    margin-bottom: 1rem;
    color: #0077cc;
    text-decoration: none;
    font-weight: bold;
  }

  .rapport-image {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 1.5rem;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .meta {
    color: #666;
    margin-bottom: 1rem;
    font-size: 0.95rem;
  }

  .category {
    display: inline-block;
    padding: 0.3rem 0.7rem;
    background-color: #eef6fa;
    color: #005a8d;
    text-transform: uppercase;
    border-radius: 6px;
    font-size: 0.85rem;
    margin-bottom: 1.5rem;
  }

  .rapport-content {
    background-color: var(--color-bg);
    font-size: 1rem;


    p {
      color: white;
    }
  }
`;
