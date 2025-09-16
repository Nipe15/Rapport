import styled from 'styled-components';

export const NavStyled = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
        ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-height: 900px;
            padding: 0;

            li {
                list-style: none;
                margin: 1rem;

                a, .dropbtn {
                    font-weight: 750;
                    text-decoration: none;
                    cursor: pointer;
                }

                .dropdown-content {
                    display: block;
                    flex-direction: column;
                }

                .dropdown-content li {
                    text-transform: uppercase;
                }

                hr {
                    width: 100px;
                    margin: auto;
                }
            }
        }
    }

    @media (min-width: 768px) {
        ul {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 0;

            li {
                list-style: none;
                margin: 1rem;
                position: relative;

                a, .dropbtn {
                    display: block;
                    font-weight: 750;
                    text-decoration: none;
                    cursor: pointer;
                }

                .dropdown-content {
                    position: absolute;
                    top: 100%;
                    margin-top: 0.3rem;
                    left: 0;
                    width: max-content;
                    background-color: var(--color-bg);
                    z-index: 10;
                    display: flex;
                    flex-direction: row;
                    padding: 0rem 1rem;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
                    border-radius: 4px;
                }

                hr {
                    height: 20px;
                    margin: 1rem;
                }

                .dropdown-content li {
                    text-transform: uppercase;
                    margin: 1rem 0;
                }
            }
        }
    }
`;

export const Divider = styled.hr`
    margin: 1rem 0;
`;
