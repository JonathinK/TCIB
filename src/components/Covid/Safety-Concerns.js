import React from 'react';
import { getImage,GatsbyImage } from 'gatsby-plugin-image';
import { graphql,useStaticQuery } from 'gatsby';
import { 
  TextContainer,
  CovidList,
  CovidListItem, 
  ImageWrapper, 
  CovidSections,
  SummaryTitle,
  ListTitle,
  Summary,
  SectionTitle
} from "./styles";

const SafetyConcerns = () => {
    const data = useStaticQuery(graphql`
    query {
      safetyConcernsJson {
        Name
        Description
        SymptomsName
        image {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              pngOptions: {quality: 60}
              quality: 50
              formats: AUTO
            )
          }
        }
        ListItems {
          Item
        }
      }
    }
  `)
  console.log({data})
  const info = data.safetyConcernsJson;
  const image = getImage(info.image)
  return(
    <CovidSections>
      <TextContainer 
        SafetyConcerns
        Row="1/2"
        Column="3/9"
        TRow="1/2"
        TColumn="2/10"
        MRow="1/2"
        MColumn="2/6"
        >
       <SummaryTitle AS>{info.Name}</SummaryTitle>
       <Summary>{info.Description}</Summary>
      </TextContainer>
      <ImageWrapper 
        CovidMolecule
        Row="1/2"
        Column="11/13"
        TRow="2/3"
        TColumn="6/10"
        
        >
        <GatsbyImage image={image} alt=""/>
      </ImageWrapper>
      <CovidList SymptomsList>
        <ListTitle>{info.SymptomsName}</ListTitle>
        {info.ListItems.map(items => {
          return <CovidListItem>{items.Item}</CovidListItem>
        })}
      </CovidList>
    </CovidSections>
  )
}
export default SafetyConcerns