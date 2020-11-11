import { Component, OnInit } from '@angular/core';

//Contentful
import { ContentfulService } from '../../contentful.service/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-plumber-swords',
  templateUrl: './plumber-swords.component.html',
  styleUrls: ['./plumber-swords.component.scss']
})
export class PlumberSwordsComponent implements OnInit {

  areas: Entry<any>[] = [];


   constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {

    this.contentfulService.getAreas()
      .then(areas => this.areas = areas)//Area Details

  }

}
