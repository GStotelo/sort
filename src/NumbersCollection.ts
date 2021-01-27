export class NumbersCollection {
  constructor(public data: number[]) {}

  compare(leftIndex: number, righIndex: number): boolean {
    return this.data[leftIndex] > this.data[righIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }

  // Then you can extract this data as properties
  get length(): number {
    return this.data.length;
  }
}
