import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  
})
export class ServersComponent implements OnInit {

  serverStatus=Math.random() > 0.5 ? "Online" : "Offline";
  constructor() { }

  ngOnInit(): void {
  }
  getServerStatus()
  {
    return this.serverStatus;
  }
  getColor()
  {
    return this.serverStatus=== "Online" ? "Green":"Red";
  }

}
