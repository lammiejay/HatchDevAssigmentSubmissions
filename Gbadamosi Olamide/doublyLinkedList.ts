class LNode<T> {
    data: T;
    next: LNode<T> | null = null;
    prev: LNode<T> | null = null;

    constructor(val: T) {
        this.data = val;
    }
}

class LinkedList<T> {
    head: LNode<T> | null = null;
    tail: LNode<T> | null = null;
    size: number = 0;

    add(val: T, position?: number) {
        const newNode = new LNode(val);

        if (position === undefined || position < 0 || position > this.size) {
            position = this.size; // Default to adding at the end
        }

        if (position === 0) {
            // Insert at the head
            if (this.head === null) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                newNode.next = this.head;
                this.head.prev = newNode;
                this.head = newNode;
            }
        } else if (position === this.size) {
            // Insert at the end
            if (this.tail === null) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                this.tail.next = newNode;
                newNode.prev = this.tail;
                this.tail = newNode;
            }
        } else {
            // Insert at the specified position
            let currentNode = this.head;
            let currentIndex = 0;

            while (currentIndex < position - 1 && currentNode) {
                currentNode = currentNode.next!;
                currentIndex++;
            }

            newNode.next = currentNode!.next;
            newNode.prev = currentNode;

            if (currentNode!.next) {
                currentNode!.next.prev = newNode;
            }

            currentNode!.next = newNode;
        }

        this.size++;
    }

    delete(position: number): void {
        if (position < 0 || position >= this.size) {
            throw new Error("Position out of bounds");
        }

        if (position === 0) {
            // Delete the head
            if (this.head === this.tail) {
                // If there's only one element
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head!.next;
                if (this.head) {
                    this.head.prev = null;
                }
            }
        } else if (position === this.size - 1) {
            // Delete the tail
            if (this.tail === this.head) {
                // If there's only one element
                this.head = null;
                this.tail = null;
            } else {
                this.tail = this.tail!.prev;
                if (this.tail) {
                    this.tail.next = null;
                }
            }
        } else {
            // Delete a node at the specified position
            let currentNode = this.head;
            let currentIndex = 0;

            while (currentIndex < position && currentNode) {
                currentNode = currentNode.next!;
                currentIndex++;
            }

            if (currentNode) {
                currentNode.prev!.next = currentNode.next;
                currentNode.next!.prev = currentNode.prev;
            }
        }

        this.size--;
    }


    getSize(): number {
        return this.size;
    }

    print() {
        let currentNode = this.head;
        const nodes = [];
        while (currentNode) {
            nodes.push(currentNode.data);
            currentNode = currentNode.next;
        }
        console.log(nodes.join(" <-> "));
    }
}

// Example usage
const l = new LinkedList<number>();
l.add(1);
l.add(2);
l.add(3);
l.add(0, 0);    // Adds 0 at the head (position 0)
l.add(1.5, 3);  // Adds 1.5 at position 3
l.add(4, 100);  // Adds 4 at the end since position 100 is out of bounds

l.print();  

// Test cases for the delete method
l.delete(0);    // Deletes head (0)
l.delete(2);    // Deletes the node at position 2 (1.5)
l.delete(l.getSize() - 1); // Deletes the tail (4)
l.print()
