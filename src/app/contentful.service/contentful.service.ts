import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';


const CONFIG = {
  space: 'hd2itpa5txrc',
  accessToken: 'jI6x6KXWxEFmCLBxEynkTp8ywZ782ZK9T3ThGVeGW_A',

  contentTypeIds: {
    homePageIntro: 'homePageIntro',
    areasPage: 'areasPage',
    area: 'area',
    servicesFooter: 'servicesFooter',
    faq: 'faq',
    blogPost: 'blogPost'
  }

  /*
    space: 'wl1z0pal05vy',
  accessToken: '0e3ec801b5af550c8a1257e8623b1c77ac9b3d8fcfc1b2b7494e3cb77878f92a',

  contentTypeIds: {
    product: '2PqfXUJwE8qSYKuM0U6w8M'
  }
  */
}

@Injectable({
  providedIn: 'root'
})


export class ContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() { }

  //HOME PAGE
  getHomePageIntro(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.homePageIntro
    }, query))
      .then(res => res.items);
  }

  //SERVICES

  getServicesFooter(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.servicesFooter
    }, query))
      .then(res => res.items);
  }

  //FAQ

  getFaq(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.faq
    }, query))
      .then(res => res.items);
  }

  //AREAS PAGE
  getAreasPage(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.areasPage
    }, query))
      .then(res => res.items);
  }

  // fetch areas
  getAreas(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.area,
      order: 'fields.id'
    }, query))
      .then(res => res.items);
  }


  // fetch products with a given slug
  // and return one of them
  getArea(slug: string): Promise<Entry<any>> {
    return this.getAreas({ 'fields.slug': slug })
      .then(items => items[0])
  }

  //BLOG

  getBlogPosts(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.blogPost
    }, query))
      .then(res => res.items);
  }


  // fetch blog with a given slug
  // and return one of them
  getBlogPost(slug: string): Promise<Entry<any>> {
    return this.getBlogPosts({ 'fields.slug': slug })
      .then(items => items[0])
  }


}
