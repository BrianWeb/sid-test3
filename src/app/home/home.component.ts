import { Component, OnInit } from '@angular/core';

//Contentful
import { ContentfulService } from '../contentful.service/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // define private class properties
  homePagePageBannerTickPointss: Entry<any>[] = [];
  homePageIntros: Entry<any>[] = [];
  //homePageBannerTickPoint1: Entry<any>[] = [];
  constructor(private contentfulService: ContentfulService) {
  
  }

  // fetch data on init
  ngOnInit() {
    this.contentfulService.getHomePageIntro()
      .then(homePageIntros => this.homePageIntros = homePageIntros)
  
  }

}
