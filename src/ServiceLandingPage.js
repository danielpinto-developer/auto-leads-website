import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import PartnerLogo from "components/features/ThreeColCenteredStatsPrimaryBackground2.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
import Blog from "components/blogs/GridWithFeaturedPost.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "components/faqs/SingleCol.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

const HighlightedText = tw.span`text-primary-500`;

export default () => {
  return (
    <>
      <AnimationRevealPage>
        <Hero />
        <FeatureStats />
        <Features
          heading={
            <>
              Beneficios de <HighlightedText>Confianza</HighlightedText>
            </>
          }
        />
        <PartnerLogo />
        <MainFeature
          heading={
            <>
              Diseñado por Latinos,{" "}
              <HighlightedText>para Latinos</HighlightedText>
            </>
          }
        />
      </AnimationRevealPage>
      {}
      <Footer />
    </>
  );
};
