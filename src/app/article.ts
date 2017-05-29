/**
 * Created by rinat on 22.05.17.
 */
export class Article {
  id: number;
  title: string;
  body: string;
  author: string;
  views: number;
  created_at: string;

  constructor(data: any) {
    this.id = data.id;
    this.title = data.title;
    this.body = data.body;
    this.author = data.author;
    this.views = data.views;
    this.created_at = data.created_at;
  }
}
