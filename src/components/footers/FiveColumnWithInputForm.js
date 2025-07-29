import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

const Container = tw.div`relative bg-gray-200 text-gray-700 -mb-8 -mx-8 px-8 py-10`;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;

const LinkRow = tw.div`flex flex-wrap justify-center text-center gap-2 text-sm font-medium text-gray-600`;
const FooterLink = tw.a`hover:underline cursor-pointer`;

const CopywrightNotice = tw.p`mt-8 text-center text-sm sm:text-base font-medium text-gray-500`;

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
        <CopywrightNotice>
          &copy; {new Date().getFullYear()} Confianza Total. Todos los derechos
          reservados.
        </CopywrightNotice>
      </Content>
    </Container>
  );
};
