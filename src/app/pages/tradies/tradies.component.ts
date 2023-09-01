import { Component, OnInit } from '@angular/core';
import { TradiesService } from '../../service/tradies.service';
import { Store } from '@ngrx/store';
import { fetchTradesSuccess, fetchTradesFailure, fetchTradiesSuccess } from '../../store/trade.action';
import { selectTrades, selectLoading, selectError, selectTradies } from '../../store/trade.selectors';
import { Observable, of, map } from 'rxjs';


@Component({
  selector: 'app-tradies',
  templateUrl: './tradies.component.html',
  styleUrls: ['./tradies.component.css']
})
export class TradiesComponent implements OnInit {
  trades!: Observable<any[]>;
  loading!: Observable<boolean>;
  error!: Observable<any>;
  selectedTrade!: Observable<string>;
  selectedSubTrade!: Observable<string>;
  searchLocation = '';
  tradies!: Observable<any[]>;
  filteredTradies!: Observable<any[]>;



  constructor(private store: Store, private tradiesService: TradiesService) { }

  ngOnInit() {
    this.trades = this.store.select(selectTrades);
    this.loading = this.store.select(selectLoading);
    this.error = this.store.select(selectError);
    this.tradies = this.store.select(selectTradies);

    this.selectedTrade = of('Carpenter');
    this.selectedSubTrade = of('');
    this.fetchTrades();
    this.searchTradies();
  }

  fetchTrades() {
    this.tradiesService.getTrades().subscribe(
      (response: any) => {
        this.store.dispatch(fetchTradesSuccess({ trades: response }));
        console.log(response);
      },
      error => {
        this.store.dispatch(fetchTradesFailure({ error }));
      }
    );
  }

  selectTrade(tradeName: string) {
    this.selectedTrade = of(tradeName);
    this.searchTradies();
  }

  getSelectedTrade(trades: any[] | null, selectedTradeName: string): any | undefined {
    return trades ? trades.find(trade => trade.name === selectedTradeName) : undefined;
  }

  selectSubTrade(subTradeName: string) {
    this.selectedSubTrade = of(subTradeName);
    this.tradies = this.store.select(selectTradies);
    this.tradies = this.tradies.pipe(
      map((tradies) => {
        if (tradies != undefined) {
          const filteredTradies = tradies.filter((trady) => {
            const isMatch = trady.workTypeArr.includes(subTradeName.toLowerCase());
            return isMatch;
          });
          return filteredTradies;
        } else {
          return [];
        }
      })
    );
  }

  searchTradies() {
    this.selectedTrade.subscribe(event => {
      const obj = {
        "data": {
          "location": this.searchLocation,
          "trade": [event]
        }
      };
      this.tradiesService.findTrades(obj).subscribe(
        (response: any) => {
          this.store.dispatch(fetchTradiesSuccess({ tradies: response }));
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
    });
  }

  resetAll() {
    this.selectedTrade = of('Carpenter');
    this.selectedSubTrade = of('');
    this.searchLocation = '';
    this.tradies = this.store.select(selectTradies);
    this.searchTradies();
  }
}
