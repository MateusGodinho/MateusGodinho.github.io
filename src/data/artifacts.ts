export interface ArtifactEntry {
  title: string;
  description: string;
  url: string;
  relatedHref: string;
  relatedLabel: string;
}

export const ARTIFACTS: ArtifactEntry[] = [
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
