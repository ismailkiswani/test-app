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
   ServerName:string="";
   constructor()
   {
    setTimeout(() => this.AllowServer=true,2000);

   }
   ngOnInit(): void {
       
   }
   OnCreateServer()
   {
    console.log("Server Created");
    this.ServerCreationStatus="Server Created";
   }
   OnUpdateServer(event:Event)
   {
    this.ServerName=(<HTMLInputElement>event.target).value;

    console.log(this.ServerName);
   }
}
