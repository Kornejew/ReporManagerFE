export class Company {
  constructor(name?: string) {
    this._name = name;
  }

  private _id: number;

  get id(): number {
    return this._id;
  }

  private _name: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}
