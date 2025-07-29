import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import logo from "../../images/logo.svg";

// Matches footer structure: no weird gaps or margins
const Container = tw.div`relative bg-gray-200 text-gray-700 px-4 py-4`;
const Inner = tw.div`max-w-screen-xl mx-auto flex justify-between items-center`;

const Logo = styled.img`
  width: 10rem; /* default mobile size */
  height: auto;

  @media (min-width: 640px) {
    width: 13rem; /* match your desktop size */
  }
`;

const InfoBlock = tw.div`text-right leading-tight`;
const PhoneHeading = tw.div`text-sm sm:text-base font-semibold text-gray-800`;
const PhoneNumber = tw.a`block text-base sm:text-lg text-primary-500 font-bold hover:underline mt-1`;

export default function SimpleHeader() {
  return (
    <Container>
      <Inner>
        <Logo src={logo} alt="Confianza Total Logo" />
        <InfoBlock>
          <PhoneHeading>El Seguro Que Mereces</PhoneHeading>
          <PhoneNumber href="tel:18885888415">1-888-588-8415</PhoneNumber>
        </InfoBlock>
      </Inner>
    </Container>
  );
}
