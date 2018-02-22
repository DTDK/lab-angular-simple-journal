import { Component, OnInit } from '@angular/core';
import { JournalServicesService } from '../../services/journal-services.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  journals: Array<any>

  constructor(private journalServicesService: JournalServicesService) { }

  ngOnInit() {

    this.journalServicesService.getList()
    .then(journals => this.journals = journals);
  }

}
