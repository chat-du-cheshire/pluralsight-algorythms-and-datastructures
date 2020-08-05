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

    addLast(node: ListNode<T>) {
        if (this.count) {
            this.tail.next = node;
        } else {
            this.head = node;
        }

        this.tail = node;
        this.count++;
    }

    print() {
        let node = this.head;
        while (node != null) {
            console.log(node);
            node = node.next;
        }
    }
}
