"use client";
import Hero_2 from "@/components/Hero/Hero_2";
import PrepareSection from "@/components/JopReady/PrepareSection";
import LearningMaterialComponent from "@/components/JopReady/LearningMaterialComponent";
import CTAMaterial from "@/components/JopReady/CTAMaterial/CTAMaterial";
import CallToActionComponent from "@/components/JopReady/CallToActionComponent";
import HandsOnProjectsComponent from "@/components/JopReady/HandsOnProjectsComponent";
import HackathonsComponent from "@/components/JopReady/HackathonsComponent";

import ResumeLogo from "@/components/JopReady/WorldWideLogo";
import InternationalLogo from  "@/components/JopReady/WorldWideLogo";
import ManSearchLogo from  "@/components/JopReady/WorldWideLogo";
import WorkingHomeLogo from "@/components/JopReady/WorldWideLogo";
import WorldWideLogo from  "@/components/JopReady/WorldWideLogo";
import { Disc } from "lucide-react";

const heroObj = {
  News: {
    id: 1,
    date: "2020-01-01",
    content: "New Season just landed💯",
    link: "/blog/news",
  },
  sub_heading_text: " With Dragons Bootcamp in ",
  hero_highlighted_text: "Only 6 Month",
  hero_heading: "Become Job Ready ",
  disctiption: "Join Dragons Bootcamp and become job-ready in just 6 months. Gain essential skills and hands-on experience for a successful career",
};

const prepObj = {
  gridItems: [
    {
      title: "Hands-on Project",
      description: "Gain practical experience by working on real projects.",
      logo: <WorkingHomeLogo />,
    },
    {
      title: "Hackathons and challenges",
      description:
        "Participate in hackathons and challenges to test your skills.",
      logo: <InternationalLogo />,
    },
    {
      title: "Internships and Apprenticeships",
      description:
        "Get opportunities to work in internships and apprenticeships.",
      logo: <WorldWideLogo />,
    },
    {
      title: "interviews preparation",
      description:
        "Receive guidance on resume building and interview techniques.",
      logo: <ResumeLogo />,
    },
    {
      title: "Real World Projects",
      description: "Work on projects that simulate real-world scenarios.",
      logo: <ManSearchLogo />,
    },
    {
      title: "Material",
      description: "Access to high-quality learning materials and resources.",
      logo: <InternationalLogo />,
    },
  ],
  headingText: "How We Prepare You to be",
  heroHighlightedText: " Job Ready ?",
  CTATextBelow: "Offering a complete experience, beyond just the tech.",
  buttonText: "Apply Now",
  subHeadingText: "Add your subheading text here",
  heroHeading: "Add your hero heading here",
  Disctiption: "Add your description here",
};

const JopReady: React.FC = () => {
  return (
    <div className='relative w-full'>
      <Hero_2 {...heroObj}/>
      <div className='bg-purple-950/20 w-full rounded-t-3xl'>
        <PrepareSection {...prepObj} />
      </div>

      <LearningMaterialComponent />
      <CTAMaterial />
      <CallToActionComponent />
      <HandsOnProjectsComponent />
      <HackathonsComponent />
    </div>
  );
};
export default JopReady;


