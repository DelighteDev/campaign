"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Promote Intra-Club Interaction:",
    children:
      "A club is meant to be a place for people with similar interests to come together. Interaction that sets a foundational relationship between the members is critical for delivering successful events and must be first priority.",
  },
  {
    icon: FingerPrintIcon,
    title: "Involve Faculty Advisors",
    children:
      "Recognizing a gap in involvement, I propose actively engaging faculty advisors. Many are unaware of club activities, and by bringing clubs to their attention, we unlock potential collaborations. This not only taps into faculty expertise but also creates an interactive ecosystem beyond the classroom for students and faculty alike.",
  },
  {
    icon: HashtagIcon,
    title: "Spreading Awareness to Student Body",
    children:
    "In order to reach students not yet connected with clubs and acknowledge the efforts of active clubs, the Cultural Committee will maintain and publish a monthly log. This log will showcase the accomplishments and activities of clubs over the past month, effectively spreading awareness and fostering appreciation for the diverse initiatives on campus.",
  },
  {
    icon: SwatchIcon,
    title: "Encourage More SMPs",
    children:
    "More Student Mentorship Programs (SMP) from clubs must be encouraged, to benefit students who are interested in joining clubs they may lack a skill-set for. Should the clubs require aid in conducting SMPs, they will be recognized. ",
  },
  {
    icon: EyeIcon,
    title: "Promoting External Participation:",
    children:
    "Work with External Affairs Committee to scout out potential events in Delhi NCR, where we can encourage our clubs to participate, and promote marketing of our own events to other colleges.",
  },
  {
    icon: DocumentTextIcon,
    title: "Testing and Quality AssuranceConsistency between Cultural and Technical Clubs",
    children:
    "There are different deadlines and structures for both kinds of clubs, which is often the cause of confusion. The technical affairs committee and cultural committee require more efficient communication and coordination.",
  },
  {
    icon: FingerPrintIcon,
    title: "The Club Incubator",
    children:
    " For the clubs with no core, or an inactive core, a uni-wide form can be circulated to infer interest regarding the dead clubs. If there is enough interest, revivement of clubs and subsequent calls for core members who will announce recruitments. (A last push to dead clubs)",
  },
  {
    icon: HashtagIcon,
    title: "Expand the Cultural Committee",
    children:
    "with the “Fest Committee”. For big events, a separate committee to handle venues like G block, Breeze Ground etc will allow for handling external vendors, and external participants in a more manageable way. This will also allow the Cultural Committee to differentiate and divide workload, and will make sure that smaller events and clubs are not overlooked when CC is expanded. The Fest Committee doubles as POCs for clubs in idle time.",
  },
  {
    icon: RectangleGroupIcon,
    title: "Revamped Club POC System",
    children:
    "Every club has unique demands, which cannot be met by one person. A well-trained POC from the cultural committee can cater to all requirements of a club, albeit logistics, permissions, marketing, etc. This would be better than one person being the POC of 4 big clubs at a time, and would add a personal touch and highlight club culture. ",
    },
    {
      icon: SwatchIcon,
      title: "Encourage More SMPs",
      children:
      "More Student Mentorship Programs (SMP) from clubs must be encouraged, to benefit students who are interested in joining clubs they may lack a skill-set for. Should the clubs require aid in conducting SMPs, they will be recognized. ",
    },
  ];
  
export function Skills() {
  return (
    <section className="px-8" id="vision">
      <div className="container mx-auto mb-20 mt-10 text-center">
        <Typography placeholder="placeholder" color="blue-gray" className="mb-2 font-bold uppercase"
           >
          my vision
        </Typography>
        <Typography placeholder="placeholder" variant="h1" color="blue-gray" className="mb-4"
           >
          What I want to do
        </Typography>
        <Typography placeholder="placeholder"
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        
        >
          I am eager to share my tried-and-tested methodology to elevate our collective experience. As part of my commitment to fostering a vibrant community, I plan to expand the Cultural Committee, ensuring ample resources for organizing top-notch events that cater to the diverse needs of our multi-disciplinary student body.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
