import { Employee } from '../../models/employee'

export class Init {
    load() {
        if (localStorage.getItem('employees') === null || localStorage.getItem('employees') == undefined) {
            console.log('No employees Found... Creating...');

            let emps: Employee[] = [];

            localStorage.setItem('employees', JSON.stringify(emps));
            return
        } else {
            console.log('Found employees...');
        }
    }
}