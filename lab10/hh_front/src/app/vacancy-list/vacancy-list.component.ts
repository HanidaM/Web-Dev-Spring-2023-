import {Component, OnInit} from '@angular/core';
import {Vacancy} from "../vacancy";
import {VacancyService} from "../vacancy.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit{
  vacancies!: Vacancy[];
  id!: number;
  constructor(private vacancyService: VacancyService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const companyIdFromRoute = Number(routeParams.get('id'));
    this.id = companyIdFromRoute;

    this.vacancyService.getVacancyByCompanies(this.id).subscribe((data)=>
    {
      console.log(data);
      this.vacancies = data;
    })
  }
}
