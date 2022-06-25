import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit
{
   ID:Number=10;
   Status:String="Offline";
   AllowServer:Boolean=false;
   ServerCreationStatus:string="No Server was Created";
   constructor()
   {
    setTimeout(() => this.AllowServer=true,2000);

   }
   ngOnInit(): void {
       
   }
   OnCreateServer()
   {
    this.ServerCreationStatus="Server Created";
   }
}
