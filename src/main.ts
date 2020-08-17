import {ListNode} from './linked-list/ListNode';
import {LinkedList} from './linked-list/LinkedList';

const list1 = new LinkedList();

list1.add(1);
list1.add(2);
list1.add(3);
list1.print('List1 Before:');
list1.remove(1);
list1.print('List1 After:');
console.log(list1);
const list2 = new LinkedList();

list2.add(1);
list2.add(2);
list2.add(3);
list2.print('List2 Before:');
list2.remove(2);
list2.print('List2 After:');
console.log(list2);
const list3 = new LinkedList();

list3.add(1);
list3.add(2);
list3.add(3);
list3.print('List3 Before:');
list3.remove(3);
list3.print('List3 After:');
console.log(list3);

const list4 = new LinkedList();
list4.add(4);
list4.print('List4 Before:');
list4.remove(4);
list4.print('List4 After:');
console.log(list4);
