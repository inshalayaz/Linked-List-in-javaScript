const LinkedList = require('./LinkedList.js');

describe('#insertAtHead', () => {
  test('It Adds element to the head of the linked list', () => {
    const ll = new LinkedList();
    ll.insertAtHead(10);
    const oldHead = ll.head;
    ll.insertAtHead(20);

    expect(ll.head.data).toBe(20);
    expect(ll.head.next).toBe(oldHead);
    expect(ll.length).toBe(2);
  });
});

describe('#getByIndex', () => {
  describe('#with index less than 0', () => {
    test('It returns null', () => {
      const ll = LinkedList.fromValues(10, 20);

      expect(ll.getByIndex(-1)).toBeNull();
    });
  });

  describe('#with index greater than Linked List Length', () => {
    test('It returns null', () => {
      const ll = LinkedList.fromValues(10, 20);

      expect(ll.getByIndex(5)).toBeNull();
    });
  });

  describe('#with 0 index ', () => {
    test('It returns the 1st element', () => {
      const ll = LinkedList.fromValues(10, 20);

      expect(ll.getByIndex(0).data).toBe(10);
    });
  });

  describe('#with index at the middle ', () => {
    test('It returns the element on the particular index', () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40, 50);

      expect(ll.getByIndex(2).data).toBe(30);
    });
  });
});

describe('#insertAtIndex', () => {
  describe('with index less than 0', () => {
    test("it doesn't insert the value", () => {
      const ll = LinkedList.fromValues(10, 20);

      ll.insertAtIndex(-1, 30);

      expect(ll.length).toBe(2);
    });
  });

  describe('index greater than list length', () => {
    test("it doesn't insert the value", () => {
      const ll = LinkedList.fromValues(10, 20);

      ll.insertAtIndex(5, 30);

      expect(ll.length).toBe(2);
    });
  });

  describe('with index 0', () => {
    test('It inserts the value at the head', () => {
      const ll = LinkedList.fromValues(10, 20);

      ll.insertAtIndex(0, 30);

      expect(ll.head.data).toBe(30);
      // expect(ll.head.next.value).toBe(10);
      expect(ll.length).toBe(3);
    });
  });

  describe('with index in the middle', () => {
    test('It inserts the value at the given index', () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40);

      ll.insertAtIndex(2, 50);

      let node = ll.getByIndex(2);

      expect(ll.head.data).toBe(10);
      expect(node.data).toBe(50);
      expect(node.next.data).toBe(30);
      expect(ll.length).toBe(5);
    });
  });
  test('It adds Element at the given index of the linked List', () => {
    const ll = LinkedList.fromValues(10, 20, 30, 40);

    ll.insertAtIndex(2, 50);

    expect(ll.getByIndex(2).data).toBe(50);
    expect(ll.length).toBe(5);
  });
});

describe('#removeAtHead', () => {
  test('Removes the element at the head', () => {
    ll = LinkedList.fromValues(10, 20, 30, 40);

    ll.removeAtHead();

    expect(ll.length).toBe(3);
    expect(ll.head.data).toBe(20);
  });
});

describe('#removeAtIndex', () => {
  describe('with index less than zero', () => {
    test('it returns nothing', () => {
      let ll = LinkedList.fromValues(10, 20, 30);
      ll.removeAtIndex(-1);
      expect(ll.length).toBe(3);
    });
  });

  describe('with index Greater than length of linked list', () => {
    test('it returns nothing', () => {
      let ll = LinkedList.fromValues(10, 20, 30);
      ll.removeAtIndex(5);
      expect(ll.length).toBe(3);
    });
  });

  describe('removal from the head', () => {
    test('deletes the node at zero index', () => {
      let ll = LinkedList.fromValues(10, 20, 30);
      ll.removeAtIndex(0);
      expect(ll.length).toBe(2);
      expect(ll.head.data).toBe(20);
    });
  });

  describe('removal at the last index', () => {
    test('It removes Element from the last index of the linked List', () => {
      let ll = LinkedList.fromValues(10, 20, 30, 40, 50);
      ll.removeAtIndex(4);

      let node = ll.getByIndex(4);
      expect(ll.length).toBe(4);
      expect(node).toBe(null);
    });
  });

  describe('removal from any index', () => {
    test('It removes Element from the given index of the linked List', () => {
      let ll = LinkedList.fromValues(10, 20, 30, 40, 50);
      ll.removeAtIndex(2);

      let node = ll.getByIndex(2);
      expect(ll.length).toBe(4);
      expect(node.data).toBe(40);
    });
  });
});
