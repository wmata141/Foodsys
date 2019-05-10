import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { v4 as uuid } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  emps;
  text;
  oldText
  appState = 'default';

  constructor(
    private empService: EmployeeService,
    private router: Router
  ) { }

  @ViewChild("f") form: any;

  ngOnInit() {
    this.emps = this.empService.getEmployees();
  }

  onSubmit() {
    if (this.form.value) {
      console.log("this.form.value", this.form.value);

      let newEmployee = {
        id: uuid(),
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        occupation: this.form.value.occupation,
      }
      console.log("newEmployee", newEmployee);

      this.emps.push(newEmployee);
      this.empService.addEmployee(newEmployee);
      this.router.navigate(['employee-list']);
    }
  }


}
