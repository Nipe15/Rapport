import { HeaderStyled } from "./Header.Styled";
import { Nav } from "../Nav/Nav";
import { Divider } from "../Footer/Footer.Styled";

export const Header = ({}) => {
    return (
        <>
            <HeaderStyled>
                <h1>RAPPORT.DK</h1>
                <Nav />
            </HeaderStyled>
        </>
    )
}