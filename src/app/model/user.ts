export class User {
  constructor(forename?: string, surname?: string) {
    this._forename = forename;
    this._surname = surname;
  }

  private _id: number;

  get id(): number {
    return this._id;
  }

  private _forename: string;

  get forename(): string {
    return this._forename;
  }

  set forename(value: string) {
    this._forename = value;
  }

  private _surname: string;

  get surname(): string {
    return this._surname;
  }

  set surname(value: string) {
    this._surname = value;
  }
}
