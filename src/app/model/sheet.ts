import {Entry} from './entry';
import {Report} from './report';

export class Sheet {
  private id: number;
  private startDate: Date;
  private endDate: Date;
  private entries: Entry[];
  private report: Report;
}
