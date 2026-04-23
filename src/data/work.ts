import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Graphic Designer",
    company: "New Paltz Smash Club",
    region: "SUNY New Paltz",
    description:
      "Designed posters and promotional material for New Paltz Smash Club’s events.",
    technologies: [
      "Clip Studio Paint",
    ],
  },
  {
    title: "Graphic Designer",
    company: "New Paltz Esports Association",
    region: "SUNY New Paltz",
    description:
      "Designed promotional material for New Paltz Esports Association’s events.",
    technologies: [
      "Affinity",
    ],
  },
];

export type WorkItem = (typeof work)[number];

