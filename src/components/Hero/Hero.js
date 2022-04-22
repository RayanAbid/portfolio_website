import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Rayan Abid
          <br />
        </SectionTitle>
        <SectionText>
          Hi! I'm a developer from Lahore, Pakistan. With multiple years of
          expirience in defferent technologies such as React.js, React Native,
          Node js and many more.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
