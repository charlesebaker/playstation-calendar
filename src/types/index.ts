export type Event = {
  id: string;
  launchDate: string;
  title: string;
  summary: string;
  imageFilenameThumb: string;
  imageFilenameFull: string;
  learnMoreLink: string;
  purchaseLink: string;
};

export type EventDate = {
  date: Date;
  event: Event;
  active: boolean;
};
