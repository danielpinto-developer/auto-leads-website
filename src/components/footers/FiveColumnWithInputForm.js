import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import LogoImage from "images/logo.svg";
import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "images/youtube-icon.svg";

const Container = tw.div`relative bg-gray-200 text-gray-700 -mb-8 -mx-8 px-8 py-10`;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;

const LinkRow = tw.div`flex flex-wrap justify-center text-center gap-6 text-sm font-medium text-gray-600`;
const FooterLink = tw.a`hover:underline cursor-pointer`;

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between gap-4`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-24`;
const LogoText = tw.h5`ml-2 text-xl font-black tracking-wider text-gray-800`;

const CopywrightNotice = tw.p`text-center text-sm sm:text-base font-medium text-gray-500`;

const SocialLinksContainer = tw.div`flex mt-4 md:mt-0`;
const SocialLink = styled.a`
  ${tw`cursor-pointer p-2 rounded-full bg-gray-900 text-gray-100 hover:bg-gray-700 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

export default () => {
  return (
    <Container>
      <Content>
        <LinkRow>
          <FooterLink href="#">Política de Privacidad</FooterLink>
          <FooterLink href="#">Términos y Condiciones</FooterLink>
          <FooterLink href="#">Nuestros Socios</FooterLink>
          <FooterLink href="#">No Vendas Mi Información</FooterLink>
        </LinkRow>
        <ThreeColRow>
          <LogoContainer>
            <LogoImg src={LogoImage} />
          </LogoContainer>

          <CopywrightNotice>
            &copy; {new Date().getFullYear()} Confianza Total. Todos los
            derechos reservados.
          </CopywrightNotice>

          <SocialLinksContainer>
            <SocialLink href="https://facebook.com">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
        </ThreeColRow>
      </Content>
    </Container>
  );
};
