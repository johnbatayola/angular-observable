import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {

  // public firstObservable: Observable<any>;
  public firstObservable: Subscription; // assign as subscription

  constructor() {}

  ngOnInit() {
    // this.firstObservable = interval(1000).subscribe((count) => {
    //   console.log(count)
    // });

    let count = 0;
    const customObservable = Observable.create((observer) => {
      setInterval(() => {
        observer.next(count);
        // if(count === 5){
        //   observer.complete('completed');
        // }

        // if(count === 3){
        //   observer.error(new Error('error exist'));
        // }
        count++;
      }, 1000);
    });

    this.firstObservable = customObservable.subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      },
      (complete) => {
        console.log(complete);
      }
    );
  }

  ngOnDestroy() {
    this.firstObservable.unsubscribe();
  }
}
