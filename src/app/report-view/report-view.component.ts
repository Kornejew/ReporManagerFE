import {Component, OnInit} from '@angular/core';
import {Report} from '../model/report';
import {User} from '../model/user';
import {Company} from '../model/company';
import {ReportService} from '../service/report.service';

@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.scss']
})
export class ReportViewComponent implements OnInit {

  public reports: Report[] = [];

  constructor(private reportService: ReportService) {
  }

  ngOnInit(): void {
    const user: User = new User('John', 'Doe');
    const company: Company = new Company('msg DAVID');
    const report = new Report();
    report.user = user;
    report.company = company;
    report.startDate = new Date('2019-08-1');
    report.endDate = new Date('2022-07-31');
    report.instructorName = 'Michael';

    console.log(report);
    this.reports.push(report);

    this.reportService.getReports().subscribe(data => {
      this.reports.push(data);
    });
  }

}
