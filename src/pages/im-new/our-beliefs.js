import React from 'react';
import { Belief } from '../../components/OurBeliefs/Belief';
import { Hero } from '../../components/OurBeliefs/Hero';
import { TextWrapper, Section, LargeHeadline, Body} from '../../components/styles';
import Layout from "../../Layout/Layout";


const OurBeliefs = () => {
  return(
    <Layout>
      <Hero/>
      <Section SectionPadding>
        <TextWrapper
          R="1/2"
          C="3/13"
          TC="2/10"
          MC="2/6"
          CenteredWrapper
        >
          <LargeHeadline AltColor TextCenter>Core values of our church</LargeHeadline>
          <Body>Learn more about the value pillars of our church</Body>
        </TextWrapper>
      </Section>
      <Section SectionPadding>
        <Belief
          Row="1/2"
          headline="Being Intentionally Inclusive"
          body="We welcome and actively support local groups celebrating ethnic and gender diversity. We honor our active and retired Military. We recognize emotional and physical challenges, recently renovating our building in accordance with the American Disabilities Act(ADA)."
        />
        <Belief
          Row="2/3"
          headline="Focus on Children & Youth"
          body="We offer programs that not only teach children about the basics of God’s best ways for us to live as seen in Jesus - to love God and to love all humankind as we love ourselves. We offer a Montessori based program on Sunday morning call Children And Worship that engages all the senses. We have a fantastic music program for all ages, and children share their songs in worship regularly. Nursery care is available for God’s youngest children."
        />
        <Belief
          Row="3/4"
          headline="Expand our Mission & Outreach"
          body="We financially and physically support with our presence and participation in several local and not so local missions projects. God calls us to engage all humanity and we find joy in serving side by side with others and receive so much more than we give."
        />
        <Belief
          Row="4/5"
          headline="Support and Counseling for Congregation & Community"
          body="Our church currently houses several independent support groups such as Alcoholics Anon,  Nor-Anon, Al-Anon,  Grief Support and several opportunities for learning such as Tuesday Bible study."
        />
        <Belief
          Row="5/6"
          headline="Grow the spiritual and physical health for congregation & community"
          body="We want to offer opportunities to our congregation and local communities to grow themselves spiritually and physically. A group of seniors meet to exercise and eat a healthy lunch together. Exercise is lead by a trainer who has helped many seniors live a happier and healthier life."
        />
      </Section>
    </Layout>
  )
}
export default OurBeliefs