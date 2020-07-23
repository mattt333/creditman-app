import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/shared/company.service';
import { Company } from 'src/app/core/company';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  constructor(private companyService : CompanyService) { }

  companies : Company[] = [];

  ngOnInit(): void {
    this.companyService.getAll().subscribe((companiesFromServeur)=>{
      this.companies=companiesFromServeur;
      console.log(companiesFromServeur);
    })
  }

}
