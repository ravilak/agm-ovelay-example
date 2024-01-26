import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
//Newark
	lat = 40.730222; 
	lng = -74.173131;

	geoJsonData = './newark.geojson'; 

  ngOnInit() {}
}

