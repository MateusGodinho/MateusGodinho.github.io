export interface ArtifactEntry {
  title: string;
  description: string;
  url: string;
  relatedHref: string;
  relatedLabel: string;
}

export const ARTIFACTS: ArtifactEntry[] = [
  {
    title: "SARB LLM Index — Statement vs. Speech Contribution",
    description: `The successor to the Henry-dictionary Combined Index below, scored by a
      calibrated LLM (Claude Haiku 4.5) instead of a word dictionary -- the index actually
      crosses zero on cutting cycles now, instead of running structurally hawkish.`,
    url: "https://claude.ai/code/artifact/b9ccfd37-dad8-4bd1-985d-f1a575fe4201",
    relatedHref: "/articles/sarb-llm-index",
    relatedLabel: "Reading the SARB With an LLM",
  },
  {
    title: "SARB Hawkish/Dovish Reader",
    description: `Paste any SARB statement, speech, or central-bank text and see it scored
      two ways side by side -- the Henry (2008) word-count dictionary and a calibrated LLM
      (Claude Haiku 4.5) that reads for stance in context. A free public demo, hosted on
      the project's own API usage, not yours.`,
    url: "https://sarb-hawkish-dove-llm-59qcmhguxqvpvab9kldq2q.streamlit.app/",
    relatedHref: "/articles/sarb-llm-index",
    relatedLabel: "Reading the SARB With an LLM",
  },
  {
    title: "SARB Henry-Dictionary Index — Statement vs. Speech Contribution",
    description: `Every SARB meeting since 1999, broken down into how much of the
      combined hawkish/dovish reading came from the MPC statement itself versus the
      speeches leading up to it. Updated after every SARB meeting, not a one-off
      snapshot.`,
    url: "https://claude.ai/code/artifact/1d19bc96-5611-45a1-81e8-9e2a2746481c",
    relatedHref: "/articles/sarb-communication",
    relatedLabel: "Reading the SARB Between the Lines",
  },
];
