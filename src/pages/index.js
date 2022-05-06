import React from 'react';

//Layout Imports
import { Layout } from "../components/PageLayout";
//PageWrapper Element Import
import { HomePageWrapper} from '../elements/HomePage/PageWrapper';
//Component Imports
import { HeroSection,DiversitySection,EventsSection,DevotionSection,PrayerSection} from "../components/HomePage";



const HomePage = () => {
  return(
    <Layout>
    <HomePageWrapper>
      <HeroSection
        HeroMain="Join Us Next Sunday"
        HeroAlt="Online & In-Person"
        HeroTime="10am - 11am"
        Link="i'm new"
        ButtonText="I'm New"
      />
    </HomePageWrapper>
    <DiversitySection
      MainHeading="Celebrate Diversity"
      AltHeading="Creating and open and inclusive community"
      Paragraph="The Church In Brielle believes that all humanity is created in the image of God.
      We are a Christian-based community that welcomes all walks of life. We continue to look for great leaders,
      build a dynamic community, help those in need and create a safe space to find a higher purpose
      for yourself. At this church god doesn't judge you, he loves you!"
      Link="about-us"
      ButtonText="Read More"
    />
    <EventsSection
      MainHeading="Come Hang Out With Us"
      ButtonText="All Events"
      Link="Events"
    />
    <DevotionSection
      MainHeading="Daily Devotion"
      Summary="Daily Devotions will be posted daily or weekly. We may follow a full passage or sometimes pick different pieces. We try to keep things fresh."
      Text="Devotions"
      Link="daily-devotion"
    />
    <PrayerSection
      MainHeading="In Need Of A Prayer?"
    />
    </Layout>
  )
}
export default HomePage;