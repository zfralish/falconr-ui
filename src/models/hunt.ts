export interface Hunt {
  id: string;
  birdID: string;
  startTime: Date;
  endTime: Date;
  preyType: string;
  preyCount: number;
  notes: string;
}
