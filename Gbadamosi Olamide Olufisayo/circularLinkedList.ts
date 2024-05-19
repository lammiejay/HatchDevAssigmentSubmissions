class LNode<T> {
    data: number;
    next: LNode<T> | null;

    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
};

class CircularLinkedList<T> {
    head: LNode<T> | null;
    tail: LNode<T> | null;
    size: number;

    constructor () {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // add at the end
    append(val: T) {
        const newNode = new LNode(val);

        if (this.head === null){
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode;
        } else {
            newNode.next = this.head;
            this.tail!.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    // insert node at beginning
    prepend(val: T): void {
        const newNode =  new LNode(val);

        if(this.head === null) { // if list is empty
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode;
        } else {
            newNode.next = this.head; // new node points to head
            this.tail!.next = newNode; // old tail points to new node
            this.head = newNode; // update head to new node
        }
        this.size++;
    }

    // insert at center
    insertToMiddle(val: T): void {
        if (this.size < 2) {this.append(val);
    } else {
        const newNode = new LNode(val);
        let currentNode = this.head;
        const mid = Math.floor(this.size / 2) - 1;

        for (let i = 0; i < mid; i++) {
            currentNode = currentNode!.next;
        }
        // insert new node after middle node
        newNode.next = currentNode!.next;
        currentNode!.next = newNode;

        this.size++;
        }
    }

    printNodes(): void {
        
        if (this.head === null) {
            return [];
        }

        let currentNode = this.head;
        const elements = [];

        do {
            elements.push(currentNode.data);
            currentNode = currentNode.next!;
        } while (currentNode !== this.head);

        console.log(elements.join(" -> ") + " -> " +
         (this.head ? this.head.data : "null") + " (head)");
    }
}const circularLinkedList = new CircularLinkedList();

circularLinkedList.append(1);
circularLinkedList.append(2);
circularLinkedList.append(3);

console.log("After inserting at the end:");
circularLinkedList.printNodes(); // Output: 1 -> 2 -> 3 -> 1 (head)

circularLinkedList.prepend(0);
console.log("After inserting at the beginning:");
circularLinkedList.printNodes(); // Output: 0 -> 1 -> 2 -> 3 -> 0 (head)

circularLinkedList.insertToMiddle(1.5);
console.log("After inserting at the center:");
circularLinkedList.printNodes(); // Output: 0 -> 1 -> 1.5 -> 2 -> 3 -> 0 (head)
