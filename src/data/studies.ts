export const studies = [
  {
    title: "BFA in Graphic Design",
    institution: "SUNY New Paltz",
    description:
      "Focus on learning different forms of design, typography, and design history.",
    tags: [
      "Graphic Design",
    ],
  },
  // {
  //   title: "M.S. in Software Engineering",
  //   institution: "Tech Institute",
  //   description:
  //     "Focus on distributed systems, testing strategies, and cloud architecture; thesis on resilience patterns in microservices.",
  //   tags: [
  //     "Distributed Systems",
  //     "Cloud Architecture",
  //     "Testing",
  //     "Microservices",
  //   ],
  // },
];

export type StudyItem = (typeof studies)[number];

