import {Component, OnInit} from '@angular/core';
import {EntryService} from '../service/entry.service';
import {Entry} from '../model/entry';

@Component({
  selector: 'app-entry-view',
  templateUrl: './entry-view.component.html',
  styleUrls: ['./entry-view.component.scss']
})
export class EntryViewComponent implements OnInit {

  public entries: Entry[] = [];

  constructor(private entryService: EntryService) {
  }

  ngOnInit(): void {
    this.entryService.getEntries().subscribe(entries => {
      this.entries.push(...entries);
    });
  }

  public logEntry(entry: Entry): void {
    console.log(entry);
  }
}
