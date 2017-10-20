import {Injectable} from '@angular/core';
import {Customer} from './customer.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

const url = environment.apiEndpoint + '/customers';

@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  // getAll(): Observable<Customer[]> {
  // return this.http.getAll('http://customerapp-mtd-easv.azurewebsites.net';).map

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>
    (url);
  }

  getById(id: number): Observable<Customer> {
    return this.http.get<Customer>
    (url + '/' + id);
  }
  delete(id: number): Observable<Customer> {
    return this.http.delete<Customer>
    (url + '/' + id);
  }
}
