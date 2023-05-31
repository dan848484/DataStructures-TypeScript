export class MinHeap {
  /**
   *
   */
  nodes: number[] = [];

  constructor(input: number[]) {
    this.buildHeap(input);
  }

  swap(nodeNum1: number, nodeNum2: number) {
    const nodeNum1Value = this.nodes[nodeNum1 - 1];
    this.nodes[nodeNum1 - 1] = this.nodes[nodeNum2 - 1];
    this.nodes[nodeNum2 - 1] = nodeNum1Value;
  }

  getLeftChildNodeNum(parentNodeNum: number) {
    return 2 * parentNodeNum;
  }

  getRightChildNodeNum(parentNodeNum: number) {
    return 2 * parentNodeNum + 1;
  }

  minHeaptify(nodeNum: number) {
    const nodeValue = this.nodes[nodeNum - 1];
    const leftChildNodeValue =
      this.nodes[this.getLeftChildNodeNum(nodeNum) - 1];
    const rightChildNodeValue =
      this.nodes[this.getRightChildNodeNum(nodeNum) - 1];
    //値が小さい方の子供のnodeNum
    const smallerNodeNum =
      leftChildNodeValue > rightChildNodeValue
        ? this.getRightChildNodeNum(nodeNum)
        : this.getLeftChildNodeNum(nodeNum);

    //値が大きい方の子供の値
    const smallerChildNodeValue = this.nodes[smallerNodeNum - 1];

    //その子の値が親の値より小さい場合はスワップする
    if (nodeValue > smallerChildNodeValue) {
      this.swap(smallerNodeNum, nodeNum);
      this.minHeaptify(smallerNodeNum);
    }
  }

  buildHeap(input?: number[]) {
    //入力が与えられた場合はそれで新たにヒープを構築する。そうでなければ既存のnodesに入っているノードたちを再構築する。
    this.nodes = input ? input : this.nodes;
    //後ろから順番にmaxheaptifyを実行。（葉のノードより上の階層のノードたちから）
    for (let i = Math.floor(this.nodes.length / 2); i > 0; i--) {
      this.minHeaptify(i);
    }
  }

  push(value: number) {
    this.nodes.push(value);
    // console.log(this.nodes);
    this.buildHeap(this.nodes);
  }

  shift() {
    const firstValue = this.nodes.shift();
    this.buildHeap();
    return firstValue;
  }
  pop() {
    return this.nodes.pop();
  }
}

// const heap = new MinHeap([5, 8, 23, 1, 3, 9, 2, -20]);

// heap.push(Infinity);
// heap.push(3908);
// heap.push(-8);

// let v: number | undefined = Infinity;
// while (v !== undefined) {
//   v = heap.shift();
//   console.log(v);
// }
