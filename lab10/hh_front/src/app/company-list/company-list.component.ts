import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../company.service";
import {Company} from "../company";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit{
  constructor(private companyService: CompanyService) {
  }
  companies!: Company[];

  ngOnInit() {
    this.companyService.getCompanies().subscribe((data)=> {
      console.log(data);
      this.companies = data;
    })
  }
}
