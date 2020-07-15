import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

const HeroImage = styled(Img)`
  min-height: 380px;
  background-size: cover;
  background: no-repeat;
`;

const WorldMap = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "world-map.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <HeroImage fluid={data.placeholderImage.childImageSharp.fluid} />;
}

export default WorldMap;