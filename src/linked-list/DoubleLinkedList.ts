import {LinkedList} from './LinkedList';
import {DoubleLinkedListNode} from './DoubleLinkedListNode';
import {ListNode} from './ListNode';

export class DoubleLinkedList<T> extends LinkedList<T> {
    head: DoubleLinkedListNode<T> = null;
    tail: DoubleLinkedListNode<T> = null;

    addFirst(node: DoubleLinkedListNode<T>) {
        if (this.count) {
            this.head.prev = node;
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
            } else {
                this.head.prev = null;
            }
        }
    }

    addLast(node: DoubleLinkedListNode<T>) {
        if (this.count) {
            node.prev = this.tail;
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
                const node = this.tail.prev;
                this.tail.prev = null;
                node.next = null;
                this.tail = node;
            }
            this.count--;
        }
    }

    remove(value: T) {
        let node = this.head;

        while (node && node.node !== value) {
            node = node.next;
        }

        if (node && node.node === value) {
            if (node === this.head) {
                this.head = node.next;
                this.head.prev = null;
            } else {
                node.prev.next = node.next;

                if (node === this.tail) {
                    this.tail = node.prev;
                }
            }
            node.next = null;
            node.prev = null;
            this.count--;
        }
    }
}
