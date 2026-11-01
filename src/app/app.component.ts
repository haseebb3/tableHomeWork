import { Component } from '@angular/core';
import { aiArr,math, roboticsArr, businessArr,geographyArr as geo, biologyArr} from './data/studentsCards';
import { courseArr, empArr, productArr, studentArr } from './data/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tableHomeWork';
  //cards
  aiArr1 = aiArr;
  math = math;
  robotics = roboticsArr;
  businessArr = businessArr;
  geography = geo;
  biology = biologyArr;

  //tables
  employees = empArr;
  students = studentArr;
  products = productArr;
  courses = courseArr;
}
