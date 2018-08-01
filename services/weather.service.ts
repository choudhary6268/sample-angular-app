import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) { }
  weatherAPI = 'http://dummy.restapiexample.com/api/v1/employees';

  getTodayWeather() {
    return this.http.get<any[]>(this.weatherAPI);
  }

}
