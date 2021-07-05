import {Time} from '@angular/common';
import {Report} from './report';

export class Entry {
  private _id: number;

  get id(): number {
    return this._id;
  }

  private _date: Date;

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  private _startTime: Time;

  get startTime(): Time {
    return this._startTime;
  }

  set startTime(value: Time) {
    this._startTime = value;
  }

  private _endTime: Time;

  get endTime(): Time {
    return this._endTime;
  }

  set endTime(value: Time) {
    this._endTime = value;
  }

  private _duration: Time;

  get duration(): Time {
    return this._duration;
  }

  set duration(value: Time) {
    this._duration = value;
  }

  private _report: Report;

  get report(): Report {
    return this._report;
  }

  set report(value: Report) {
    this._report = value;
  }

  private _description: string;

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}
