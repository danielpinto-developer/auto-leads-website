import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import logo from "../../images/logo.svg";

const HeaderContainer = tw.header`bg-white w-full py-4 px-6 border-b border-gray-300`;
const InnerContainer = tw.div`max-w-screen-xl mx-auto flex justify-between items-center`;

const Logo = styled.img`
  width: 13rem;
  height: auto;
  margin-right: 1rem;
`;

// Increase base size of text block (optional)
const InfoBlock = tw.div`text-right leading-tight text-gray-800`;

const PhoneHeading = tw.div`text-base sm:text-lg lg:text-xl font-semibold text-gray-800 whitespace-nowrap`;
const PhoneNumber = tw.a`text-primary-500 text-lg sm:text-xl lg:text-2xl font-bold hover:underline`;

export default function SimpleHeader() {
  return (
    <HeaderContainer>
      <InnerContainer>
        <Logo src={logo} alt="Confianza Total Logo" />
        <InfoBlock>
          <PhoneHeading>El Seguro de Auto Que Te Mereces</PhoneHeading>
          <PhoneNumber href="tel:18885888415">1-888-588-8415</PhoneNumber>
        </InfoBlock>
      </InnerContainer>
    </HeaderContainer>
  );
}
