import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

// Import images from src/images or src/images/logos
import progressiveLogo from "images/progressive.png";
import geicoLogo from "images/geico.png";
import stateFarmLogo from "images/statefarm.png";
import allstateLogo from "images/allstate.png";
import nationwideLogo from "images/nationwide.png";

const Container = tw.div`bg-blue-600 py-10 px-6 -mx-8`;
const Title = tw.div`text-center text-xl font-semibold text-gray-100 uppercase tracking-wider`;

// horizontal scroll container
const LogoScroll = tw.div`mt-6 flex overflow-x-auto items-center space-x-6 px-4 py-4 justify-start sm:justify-center`;

// each logo gets a white box, padding, shadow
const LogoWrapper = tw.div`bg-white rounded-md p-3 shadow-md flex-shrink-0 flex items-center justify-center`;
const Logo = styled.img`
  ${tw`h-10 w-auto sm:h-12`}
`;

export default ({
  title = "Nuestros Socios",
  partnerLogos = [
    progressiveLogo,
    geicoLogo,
    stateFarmLogo,
    allstateLogo,
    nationwideLogo,
  ],
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <LogoScroll>
        {partnerLogos.map((logo, index) => (
          <LogoWrapper key={index}>
            <Logo src={logo} alt={`Logo ${index + 1}`} />
          </LogoWrapper>
        ))}
      </LogoScroll>
    </Container>
  );
};
