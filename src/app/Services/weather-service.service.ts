import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const API_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const API_GEOCODING_URL = 'http://api.openweathermap.org/geo/1.0/direct?q=';

const API_KEY = 'ddc21e07f82d7a2ecb024116c1cccb12';

@Injectable({
  providedIn: 'root'
})

export class WeatherServiceService {
  
  constructor(private http: HttpClient) { }

  getGeocoding(location: string):Observable<any>{
    return this.http.get<any[]>(API_GEOCODING_URL+ location + '&limit=1&appid=' + API_KEY);
  }

  getWeather(lat : string, lon: string):Observable<any>{
    return this.http.get<any[]>(API_URL+'lat=' + lat + '&lon='+ lon +'&appid=' + API_KEY+'&lang=es');
  }
}
