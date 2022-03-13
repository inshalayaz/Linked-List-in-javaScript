class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead = (data) => {
    const newNode = new LinkedListNode(data, this.head);
    this.head = newNode;
    this.length++;
  };

  getByIndex = (index) => {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  };

  printLinkedList = () => {
    let output = '';
    let current = this.head;

    while (current) {
      output = `${output}${current.data} -> `;
      current = current.next;
    }
    console.log(`${output}null`);
  };

  insertAtIndex = (index, data) => {
    // insertion at head
    if (index === 0) return this.insertAtHead(data);

    const prev = this.getByIndex(index - 1);

    if (prev === null) return null;

    prev.next = new LinkedListNode(data, prev.next);

    this.length++;
  };

  removeAtHead = () => {
    this.head = this.head.next;

    this.length--;
  };

  removeAtIndex = (index) => {
    if (index === 0) return this.removeAtHead();

    const prev = this.getByIndex(index - 1);

    if (prev === null) return null;

    const curr = this.getByIndex(index);

    if (curr.next === null) {
      prev.next == null;
    }

    prev.next = curr.next;

    this.length--;
  };
}

class LinkedListNode {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

LinkedList.fromValues = (...values) => {
  const ll = new LinkedList();
  for (i = values.length - 1; i >= 0; i--) {
    ll.insertAtHead(values[i]);
  }
  return ll;
};

module.exports = LinkedList;
