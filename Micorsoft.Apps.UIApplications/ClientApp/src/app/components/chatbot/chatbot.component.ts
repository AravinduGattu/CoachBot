import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from '@angular/router';

declare global {
  interface Window {
    WebChat: any;
  }
}

window.WebChat = window.WebChat || {};

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  

  constructor(private router: Router) { }

  @ViewChild("botWindow", { static: true }) botWindowElement: ElementRef;

  public ngOnInit(): void {
    const directLine = window.WebChat.createDirectLine({
      token: 'Token'
    });

    window.WebChat.renderWebChat(
      {
        directLine: directLine,
        userID: "USER_ID",
        styleOptions: {
          hideUploadButton: true
        }
      },
      this.botWindowElement.nativeElement
    );

    //directLine
    //  .postActivity({
    //    from: { id: "USER_ID", name: "USER_NAME" },
    //    name: "requestWelcomeDialog",
    //    type: "event",
    //    value: "token"
    //  })
    //  .subscribe(
    //    id => console.log(`Posted activity, assigned ID ${id}`),
    //    error => console.log(`Error posting activity ${error}`)
    //  );
  }

  back() {
    this.router.navigate(['/app/microsoft']);
  }

}
