import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "my-app",
  template: `
    <select>
      <option *ngFor="let item of items" [value]="item.title">{{
        item.title
      }}</option>
    </select>
  `
})
export class AppComponent {
  items: any;
  constructor(private http: HttpClient) {
    this.http
      .get("https://jsonplaceholder.typicode.com/todos")
      .subscribe(res => (this.items = res));
  }
}
