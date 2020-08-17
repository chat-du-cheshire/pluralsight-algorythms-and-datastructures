import {ListNode} from './ListNode';

export class LinkedList<T> {
    head: ListNode<T> = null;
    tail: ListNode<T> = null;
    count = 0;

    addFirst(node: ListNode<T>) {
        if (this.count) {
            node.next = this.head;
        } else {
            this.tail = node;
        }

        this.head = node;
        this.count++;
    }

    removeFirst() {
        if (this.count) {
            this.head = this.head.next;
            this.count--;

            if (!this.head) {
                this.tail = null;
            }
        }
    }

    addLast(node: ListNode<T>) {
        if (this.count) {
            this.tail.next = node;
        } else {
            this.head = node;
        }

        this.tail = node;
        this.count++;
    }

    removeLast() {
        if (this.count) {
            if (this.head === this.tail) {
                this.head = null;
                this.tail = null;
            } else {
                let node = this.head;
                while (node.next !== this.tail) {
                    node = node.next;
                }
                node.next = null;
                this.tail = node;
            }
            this.count--;
        }
    }

    print() {
        let node = this.head;
        while (node !== null) {
            console.log(node);
            node = node.next;
        }
    }

    *enumerate() {
        let current = this.head;
        while (current !== null) {
            yield current;
            current = current.next;
        }
    }

    find(value: T) {
        let node = this.head;

        while (node && node.node !== value) {
            node = node.next;
        }

        return node;
    }

    add(value: T) {
        const node = new ListNode(value);

        this.addFirst(node);
    }

    // TODO:
    //  remove
    //  clear
}
