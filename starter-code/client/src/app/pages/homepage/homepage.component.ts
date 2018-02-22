import { Component, OnInit } from '@angular/core';
import { JournalServicesService } from '../../services/journal-services.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  journals: Array<any>
  journalName: String;
  constructor(private journalServicesService: JournalServicesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.journalServicesService.getList()
    .then(journals => this.journals = journals);

    this.activatedRoute.params
      .subscribe(params => this.journalName = String(params['._id']));
  }

}
