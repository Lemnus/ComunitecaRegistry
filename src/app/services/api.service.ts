import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://erv77k6r4c.execute-api.eu-central-1.amazonaws.com';

  constructor(private http: HttpClient) {
  }

  public post(endpoint: string, body: any): any {
    return this.http.post(this.baseUrl + '/' + endpoint, body);
  }

  public get(endpoint: string): any {
    return this.http.get(this.baseUrl + '/' + endpoint);
  }

  public patch(endpoint: string): any {
    return this.http.patch(this.baseUrl + '/' + endpoint, null);
  }
}
