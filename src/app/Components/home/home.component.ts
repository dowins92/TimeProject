import { Component } from '@angular/core';
import { filter } from 'rxjs';
import { WeatherServiceService } from 'src/app/Services/weather-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  location = '';
  coordenadas:any;
  clima:any; 

  constructor(private weatherService: WeatherServiceService){}

  
  async getClima(){
    try{
      this.coordenadas = await this.weatherService.getGeocoding(this.location).toPromise();
      this.clima = await this.weatherService.getWeather(this.coordenadas[0].lat, this.coordenadas[0].lon).toPromise();
    } catch (error){
      alert('Error al obtener datos');
    }
    console.log(this.coordenadas[0])
    console.log(this.clima);
  } 
}