export interface ArtifactEntry {
  title: string;
  description: string;
  url: string;
  relatedHref: string;
  relatedLabel: string;
}

export const ARTIFACTS: ArtifactEntry[] = [
  {
    title: "SARB Combined Index — Statement vs. Speech Contribution",
    description: `Every SARB meeting since 1999, broken down into how much of the
      combined hawkish/dovish reading came from the MPC statement itself versus the
      speeches leading up to it. Updated after every SARB meeting, not a one-off
      snapshot.`,
    url: "https://claude.ai/code/artifact/1d19bc96-5611-45a1-81e8-9e2a2746481c",
    relatedHref: "/articles/sarb-communication",
    relatedLabel: "Reading the SARB Between the Lines",
  },
  {
    title: "Hawkish / Dovish Reader",
    description: `Paste any central bank statement and score it on the same Henry (2008)
      hawkish/dovish scale used in the SARB piece -- runs entirely in your browser,
      nothing you paste is sent anywhere.`,
    url: "https://claude.ai/code/artifact/fc089a17-83b4-45a0-a654-cb95c9e525f6",
    relatedHref: "/articles/sarb-communication",
    relatedLabel: "Reading the SARB Between the Lines",
  },
];
