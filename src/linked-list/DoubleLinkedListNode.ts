import {ListNode} from './ListNode';

export class DoubleLinkedListNode<T> extends ListNode<T> {
    constructor(public node: T, public next: DoubleLinkedListNode<T> = null, public prev: DoubleLinkedListNode<T> = null) {
        super(node, next);
    }
}
