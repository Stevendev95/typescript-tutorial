export class Invoice {
  readonly client: string;
  private details: string;
  public amount: number;

  constructor(client: string, details: string, amount: number) {
    this.client = client;
    this.details = details;
    this.amount = amount;
  }

  format() {
    return `${this.client} owes $ ${this.amount} for this ${this.details}`;
  }
}

