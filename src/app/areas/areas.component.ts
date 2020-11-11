import { Component, OnInit } from '@angular/core';

//Contentful
import { ContentfulService } from '../contentful.service/contentful.service';
import { Entry } from 'contentful';


@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent implements OnInit {

  // define private class properties
  areasPages: Entry<any>[] = [];
  areas: Entry<any>[] = [];
  //areaNames: Entry<any>[] = [];
  //areaIntro: Entry<any>[] = [];
  
  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {

    this.contentfulService.getAreasPage()
      .then(areasPages => this.areasPages = areasPages)  //Area Intro

    this.contentfulService.getAreas()
      .then(areas => this.areas = areas)//Area Details
      
  }
}

