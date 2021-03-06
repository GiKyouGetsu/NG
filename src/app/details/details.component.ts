import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user$: Object;
  constructor(private data: DataService, private route:ActivatedRoute) { 
    this.route.params.subscribe(
      params => this.user$ = params.id
    )
  }

  ngOnInit() {
    this.data.getUserById(this.user$).subscribe(
      data => this.user$ = data
    )
  }

}
