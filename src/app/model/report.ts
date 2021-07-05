import {User} from './user';
import {Company} from './company';

export class Report {

  private _id: number;

  get id(): number {
    return this._id;
  }

  private _instructorName: string;

  get instructorName(): string {
    return this._instructorName;
  }

  set instructorName(value: string) {
    this._instructorName = value;
  }

  private _startDate: Date;

  get startDate(): Date {
    return this._startDate;
  }

  set startDate(value: Date) {
    this._startDate = value;
  }

  private _endDate: Date;

  get endDate(): Date {
    return this._endDate;
  }

  set endDate(value: Date) {
    this._endDate = value;
  }

  private _user: User;

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  private _company: Company;

  get company(): Company {
    return this._company;
  }

  set company(value: Company) {
    this._company = value;
  }
}
