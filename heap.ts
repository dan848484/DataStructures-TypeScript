export class HeapNode {}

export class MaxHeap {
  /**
   *
   */
  array: number[] = [];

  constructor(private input: number[]) {
    this.buildHeap(input);
  }

  swap(nodeNum1: number, nodeNum2: number) {
    const nodeNum1Value = this.array[nodeNum1 - 1];
    this.array[nodeNum1 - 1] = this.array[nodeNum2 - 1];
    this.array[nodeNum2 - 1] = nodeNum1Value;
  }

  getLeftChildNodeNum(parentNodeNum: number) {
    return 2 * parentNodeNum;
  }

  getRightChildNodeNum(parentNodeNum: number) {
    return 2 * parentNodeNum + 1;
  }

  maxHeaptify(nodeNum: number) {
    const nodeValue = this.array[nodeNum - 1];
    const leftChildNodeValue =
      this.array[this.getLeftChildNodeNum(nodeNum) - 1];
    const rightChildNodeValue =
      this.array[this.getRightChildNodeNum(nodeNum) - 1];
    //値が大きい方の子供のnodeNum
    const largerNodeNum =
      rightChildNodeValue > leftChildNodeValue
        ? this.getRightChildNodeNum(nodeNum)
        : this.getLeftChildNodeNum(nodeNum);
    //値が大きい方の子供の値
    const largerChildNodeValue = this.array[largerNodeNum - 1];
    //その子の値が親の値より大きい場合はスワップする
    if (nodeValue < largerChildNodeValue) {
      this.swap(largerNodeNum, nodeNum);

      this.maxHeaptify(largerNodeNum);
    }
  }

  buildHeap(input: number[]) {
    this.array = [];
    for (let value of input) {
      this.array.push(value);
    }
    for (let i = Math.floor(this.array.length / 2); i > 0; i--) {
      this.maxHeaptify(i);
    }
  }

  push(value: number) {
    this.input.push(value);
    this.buildHeap(this.input);
  }

  shift() {
    const firstQuantity = this.hashMap.get(this.array[0]);
    const secondQuantity = this.hashMap.get(this.array[1]);
    if (firstQuantity && secondQuantity && secondQuantity > firstQuantity) {
      this.swap(1, 2);
    }
    const firstValue = this.array.shift();
    this.buildHeap();
    return firstValue;
  }
  pop() {
    return this.array.pop();
  }
}
