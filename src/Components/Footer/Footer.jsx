import React from 'react';
import {
  FooterStyled,
  Container,
  Section,
  Row,
  Column,
  TextContent,
  SocialSection,
  Divider,
} from './Footer.Styled';

export const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <Section>
          <Row>
          </Row>
        </Section>

        <Divider />

        <Section>
          <TextContent>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Totam quam a ut odio blanditiis omnis adipisci nobis in libero eaque, tempora voluptates dolore similique dicta ipsam laborum sit optio ea.
          </TextContent>
        </Section>

        <SocialSection>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-github"></i></a>
        </SocialSection>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
