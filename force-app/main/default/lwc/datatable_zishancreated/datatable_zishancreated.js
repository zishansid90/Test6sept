/*import { LightningElement,wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

const columns=[{label:'First Name', fieldName:'FirstName' },{label:'Last Name', fieldName:'LastName'}];

export default class ZishanDataTable extends LightningElement {
    @wire(getContactList)
    contacts;
    
}**/

import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

const columns = [
    { label: 'Candidate Name', fieldName: 'FirstName' },
    { label: 'Last Name', fieldName: 'LastName' },
    { label: 'Title', fieldName: 'Title' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Email', fieldName: 'Email', type: 'email' },
];
export default class ApexDatatableExample extends LightningElement {
    error;
    columns = columns;

    @wire(getContactList)
    contacts;
}