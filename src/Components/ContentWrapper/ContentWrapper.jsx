import { ContentWrapperStyled } from './ContentWrapper.Styled.js';

export const ContentWrapper = ({ children }) => {
    return (
        <ContentWrapperStyled>
            {children}
        </ContentWrapperStyled>
    )
}