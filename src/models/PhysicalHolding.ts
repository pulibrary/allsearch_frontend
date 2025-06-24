export class PhysicalHolding {
  library: string;
  call_number?: string;
  status?: string;
  barcode?: string;

  constructor(
    library: string,
    call_number?: string,
    status?: string,
    barcode?: string
  ) {
    this.library = library;
    this.call_number = call_number;
    this.status = status;
    this.barcode = barcode;
  }
  label() {
    if (this.library && this.call_number) {
      return `${this.library} » ${this.call_number}`;
    } else if (this.library) {
      return this.library;
    }
  }
  statusLabel() {
    if (this.status === 'Available') {
      return 'AVAILABLE AT';
    } else {
      return 'REQUEST';
    }
  }
  statusColor(): string {
    if (this.status === 'Available') {
      return 'green';
    } else {
      return 'yellow';
    }
  }
}
