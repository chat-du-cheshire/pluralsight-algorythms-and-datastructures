import {ListNode} from './linked-list/ListNode';
import {LinkedList} from './linked-list/LinkedList';

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);

const list1 = new LinkedList<number>();

list1.add(1);
list1.add(2);
list1.add(3);

console.log(list1.print());

