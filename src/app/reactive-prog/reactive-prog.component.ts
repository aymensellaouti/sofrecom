import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-reactive-prog',
  templateUrl: './reactive-prog.component.html',
  styleUrls: ['./reactive-prog.component.css']
})
export class ReactiveProgComponent implements OnInit {
  observable: Observable<string>;
  src = '';
  images = [
    '404error.jpeg',
    'as.jpg',
    'cv.gif'
  ];
  constructor() {
  }

  ngOnInit() {
    this.observable = new Observable<string>((observer) => {
      let i = this.images.length - 1;
      setInterval(() => {
        observer.next(this.images[i--]);
        if (i < 0) {
          i = this.images.length - 1;
        }
      }, 1000);
    });

  }

}
