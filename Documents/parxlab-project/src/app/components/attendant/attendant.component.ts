import { Component, OnInit } from '@angular/core';
import { Attendant } from 'src/app/models/attendant.model';


const attendants: Attendant[] = [
  { id: 1, plate: "34 AA 271", attendant: "Berk Şahin", location: "41.281, 29.782" },
  { id: 2, plate: "34 AB 271", attendant: "Erhan Erdoğan", location: "41.281, 29.642" },
  { id: 3, plate: "34 AC 275", attendant: "Kübra Uçacan", location: "41.581, 29.682" },
  { id: 5, plate: "34 AT 281", attendant: "Erhan Erdoğan", location: "41.251, 29.572" },
  { id: 6, plate: "34 TY 291", attendant: "Berk Şahin", location: "41.281, 29.382" },
  { id: 7, plate: "34 BA 371", attendant: "Erhan Erdoğan", location: "41.881, 29.282" },
  { id: 1, plate: "34 AA 271", attendant: "Berk Şahin", location: "41.281, 29.782" },
  { id: 2, plate: "34 AB 271", attendant: "Erhan Erdoğan", location: "41.281, 29.642" },
  { id: 3, plate: "34 AC 275", attendant: "Kübra Uçacan", location: "41.581, 29.682" },


]

@Component({
  selector: 'app-attendant',
  templateUrl: './attendant.component.html',
  styleUrls: ['./attendant.component.scss']
})
export class AttendantComponent implements OnInit {

  displayedColumns: string[] = [ 'plate', 'attendant', 'location'];

  dataSource = attendants;

  successMessage: boolean = true;

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      this.successMessage = false;
    }, 3000);
    
    logout(){
    this.router.navigateByUrl('/login')
  }
  }

}
