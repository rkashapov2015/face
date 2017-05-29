/**
 * Created by rinat on 22.05.17.
 */
import 'rxjs/add/operator/switchMap';
import {Component, OnInit}      from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location}               from '@angular/common';
import {Article}                from './article';
import {ArticleService}         from './article.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  article: any;

  constructor(private articleService: ArticleService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.articleService.getArticle(+params['id']))
      .subscribe(article => this.article = article);
  }
}
