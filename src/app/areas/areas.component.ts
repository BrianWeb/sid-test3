import { Component, OnInit } from '@angular/core';

//To get URL from address bar and give it to this component
import { ActivatedRoute } from '@angular/router';

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

  pageTitle: 'initial page title';

  constructor(private contentfulService: ContentfulService,
    private route: ActivatedRoute) { }

 


  ngOnInit() {

    this.contentfulService.getAreasPage()
      .then(areasPages => this.areasPages = areasPages)  //Area Intro

    this.contentfulService.getAreas()
      .then(areas => this.areas = areas)//Area Details


     //put ActivatedRoute in a local var
    let areaName = this.route.snapshot.paramMap.get('areaName');

    this.pageTitle += ` : ${areaName}`;
  }
}

