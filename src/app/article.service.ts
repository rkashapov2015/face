import {Jsonp, Http, Headers, RequestOptions, URLSearchParams, Response} from '@angular/http';
import { Article } from './article';
//import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class ArticleService {

  public articles: Article[];
  constructor( private http: Http, private jsonp: Jsonp ) {
  }
  siteUrl= window.location.origin+'/get-data';
  getArticles(): Promise<Article[]> {
    let params = new URLSearchParams();
    params.set('action','articles');
    params.set('callback','JSONP_CALLBACK');
    return this.jsonp
      .get(this.siteUrl, {search: params})
      .toPromise()
      .then(response => response.json().data as Article[])
      .catch(this.handleError);
      /*.map(response => {
        if(response.status == 200) {
          let array_data = response.json();
          if(array_data.length > 0) {
            var articles: Array<Article> = [];
            for (let data of array_data) {
              let article = new Article(data);
              console.log(article);
              articles.push(article);
            }
            this.articles = articles;
            return this.articles;
          }
        }
      });*/
  }

  getArticlesSlowly(): Promise<Article[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getArticles()), 2000);
    });
  }

  getArticle(id: number): Promise<Article> {
    return this.getArticles()
      .then(articles => articles.find(article => article.id === id));
    /*if(this.getArticles()) {
      for(let article of this.articles) {
        if(id == article.id) {
          return article;
        }
      }
    }
    return false;*/
      //.find(article => article.id === id);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  /*getMessages(id: number, next: string): Observable<Message[]> {
    let params = new URLSearchParams();
    var str_id = '0';
    if(id) {
      str_id = id.toString();
    }
    params.set('action','message');
    params.set('id_corresp', str_id);
    params.set('callback','JSONP_CALLBACK');
    if(next) {
      params.set('last', next);
    }
    return this.jsonp
      .get(this.siteUrl, {search: params})
      //.map(response => response.json());
      .map(response => {
        if(response.status == 200) {
          let array_data = response.json();
          if(array_data.length > 0) {
            var message: Array<Message> = [];
            for (let data of array_data) {
              let new_message = new Message(data);
              console.log(new_message);
              message.push(new_message);
            }
            this.message = message;
            return this.message;
          }
        }
      });

  }*/
  /*addMessage(message: string, id_corresp: number) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    //let params = new URLSearchParams();
    var str_id_corresp = '0';
    if(id_corresp) {
      str_id_corresp = id_corresp.toString();
    }
    /!*params.set('action','new_message');
     params.set('message', message);
     params.set('id_corresp', str_id_corresp);
     params.set('callback','JSONP_CALLBACK');*!/
    //console.log(message);
    //console.log(id_corresp);
    //var body = JSON.stringify({ message, str_id_corresp });
    return this.http.post(window.location.origin+'/cabinet/add-msg-json', { message, str_id_corresp }, options)
      .map(this.extractData)
      .catch(this.handleError);
  }*/
}
