import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string) {
    return this.http.get<WeatherData>(
      environment.weatherApiBaseUrl + cityName,
      {
        headers: new HttpHeaders()
          .set('X-RapidAPI-Key', environment.weatherApiKey)
          .set('X-RapidAPI-Host', environment.weatherApiHost),
      }
    );
  }
}
