import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Company } from '../core/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private static URL_COMPANIES = 'http://localhost:8080/companies';

  constructor(private http : HttpClient) { }

  public getAll () : Observable<Company[]> {
    return this.http.get<Company[]>(CompanyService.URL_COMPANIES);
  }
  public getCompanyById(id : number) : Observable<Company> {
    return this.http.get<Company>(CompanyService.URL_COMPANIES+'/'+id);
  }
}
