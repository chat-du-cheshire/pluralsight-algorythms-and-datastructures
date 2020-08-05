import {ListNode} from './linked-list/ListNode';
import {LinkedList} from './linked-list/LinkedList';

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);

const list1 = new LinkedList<number>();

list1.addFirst(node1);
list1.addFirst(node2);
list1.addFirst(node3);
list1.removeFirst();
list1.print();

console.log('================');

const nodeA = new ListNode('A');
const nodeB = new ListNode('B');
const nodeC = new ListNode('C');

const list2 = new LinkedList<string>();
list2.addLast(nodeA);
list2.addLast(nodeB);
list2.addLast(nodeC);
list2.removeLast();
list2.print();
