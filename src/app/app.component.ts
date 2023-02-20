import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Task';

  tableData: any;
  constructor(private Service: ServiceService) {
    this.Service.getTableData().subscribe((data) => {
      this.tableData = data;
    });
  }
}
