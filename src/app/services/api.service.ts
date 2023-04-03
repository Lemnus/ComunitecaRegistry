import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = '';

  constructor(private http: HttpClient) {
  }

  public post(endpoint: string, body: any) {
    return this.http.post(this.baseUrl + '/' + endpoint, body);
  }

  public get(endpoint: string) {
    return this.http.get(this.baseUrl + '/' + endpoint);
  }
}
