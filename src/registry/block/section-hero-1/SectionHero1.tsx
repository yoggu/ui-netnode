import React from "react";

import BodyCopy from "../../ui/BodyCopy";
import Box from "../../ui/Box";
import Container from "../../ui/Container";
import CTALink from "../../ui/CTALink";
import DisplayTitle from "../../ui/DisplayTitle";
import Grid from "../../ui/Grid";
import GridItem from "../../ui/GridItem";
import Label from "../../ui/Label";
import Section from "../../ui/Section";

// Define the interface for props
interface SectionHero1Props {
  label?: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
}

const SectionHero1: React.FC<SectionHero1Props> = ({
  label,
  title,
  description,
  ctaText,
  ctaHref,
}) => {
  return (
    <Section
      name="hero"
      marginTop="large"
      marginBottom="large"
      className="bg-surface-bright3"
    >
      <Container width="wide" height="hero_sub" className="h-full">
        <Grid container gap={{ base: 2, md: 16 }} className="h-full">
          <GridItem
            size={{ base: 10, md: 6 }}
            className="flex h-full flex-col justify-between space-y-6"
          >
            <Box>
              <Label variant="primary">{label}</Label>
            </Box>
            <Box className="pb-9">
              <DisplayTitle size="xl">{title}</DisplayTitle>
            </Box>
            <Box>
              <BodyCopy size="base">{description}</BodyCopy>
            </Box>
            {ctaHref && ctaText && (
              <Box>
                <CTALink href={ctaHref}>{ctaText}</CTALink>
              </Box>
            )}
          </GridItem>
          <GridItem size={{ base: 2, md: 4 }}>
            <div className="max-h-96"></div>
          </GridItem>
        </Grid>
      </Container>
    </Section>
  );
};

export default SectionHero1;
