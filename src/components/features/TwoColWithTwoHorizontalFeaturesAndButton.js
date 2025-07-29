import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import TeamIllustrationSrc from "images/team-illustration-2.png";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-8 md:py-12 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-6/12 mt-10 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.img((props) => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const DecoratorBlob = tw(
  SvgDotPattern
)`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`;

const TextContent = tw.div`text-center md:text-left`;
const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.div`mt-6 text-justify md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Paragraph = styled.p`
  ${tw`mb-3`}
`;

const PrimaryButton = styled(PrimaryButtonBase)`
  ${tw`text-lg px-24 py-5 font-bold`}
`;

const descriptionParagraphs = [
  "Buscar seguro de auto no debería ser complicado ni estresante. Pero muchos Latinos en EE. UU. terminan pagando de más — por falta de orientación, barreras de idioma o simplemente por no saber por dónde empezar. En Confianza Total, estamos aquí para cambiar eso.",
  "No trabajamos para las aseguradoras. Trabajamos para ti. Te guiamos paso a paso, comparamos precios con nuestros aliados de confianza y te conectamos con agentes que hablan tu idioma y entienden tus necesidades. Aquí no hay presión, solo ayuda real, como si te apoyara alguien de tu familia.",
  "Una llamada corta puede significar un gran ahorro. En menos de 3 minutos, puedes encontrar una opción mejor. Todo en español, sin robots ni menús confusos. Llámanos con confianza — Confianza Total no es solo un nombre, es nuestra promesa.",
];

export default ({
  subheading = "Atención con Corazón",
  heading = (
    <>
      Diseñado por Latinos <span tw="text-primary-500">Para Latinos.</span>
    </>
  ),
  primaryButtonText = "Compara Precios",
  primaryButtonUrl = "https://timerse.com",
  imageSrc = TeamIllustrationSrc,
  buttonRounded = true,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  showDecoratorBlob = false,
  textOnLeft = true,
}) => {
  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image
            src={imageSrc}
            imageBorder={imageBorder}
            imageShadow={imageShadow}
            imageRounded={imageRounded}
          />
          {showDecoratorBlob && <DecoratorBlob />}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading>
            <Description>
              {descriptionParagraphs.map((text, index) => (
                <Paragraph key={index}>{text}</Paragraph>
              ))}
            </Description>
          </TextContent>
        </TextColumn>
      </TwoColumn>
      <div tw="mt-6 mb-16 flex flex-col items-center space-y-3">
        <PrimaryButton
          buttonRounded={buttonRounded}
          as="a"
          href={primaryButtonUrl}
        >
          {primaryButtonText}
        </PrimaryButton>
        <p tw="text-base sm:text-lg font-semibold text-gray-800">
          Habla con un agente autorizado:{" "}
        </p>
        <p>
          <a href="tel:8001234567" tw="underline">
            (800) 123-4567
          </a>
        </p>
      </div>
    </Container>
  );
};
