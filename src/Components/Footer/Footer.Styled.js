import styled from 'styled-components';

export const FooterStyled = styled.footer`
    display: flex;
    justify-content: center;
    margin-top: auto;
    text-align: center;
    color: var(--color-text-primary);
`;

export const Container = styled.div`
    max-width: 1140px;
    margin: 0 auto;
    padding: 2rem 1rem;
`;

export const Section = styled.div`
    margin-top: 3rem;
    margin-bottom: 3rem;
`;

export const Row = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 3rem;
    text-align: center;
`;

export const Column = styled.div`
    flex: 0 0 auto;
    width: 20%;
    min-width: 150px;
    margin-bottom: 1rem;

  h6 {
    text-transform: uppercase;
    font-weight: bold;
  }

  a {
    color: var(--color-text-primary);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const TextContent = styled.p`
    max-width: 700px;
    margin: 0 auto 2rem;
`;

export const SocialSection = styled.div`
    text-align: center;
    margin-bottom: 3rem;

  a {
    color: var(--color-text-primary);
    margin: 0 1rem;
    font-size: 1.25rem;
  }
`;

export const Divider = styled.hr`
    margin: 3rem 0;
`;
