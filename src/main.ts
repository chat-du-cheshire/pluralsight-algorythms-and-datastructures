import {ListNode} from './linked-list/ListNode';
import {LinkedList} from './linked-list/LinkedList';

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);

const list1 = new LinkedList<number>();

list1.addFirst(node1);
list1.addFirst(node2);
list1.addFirst(node3);

const iterator = list1.enumerate();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
