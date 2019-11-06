import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { Router } from '@angular/router';

import { BotDirective, BotHelperDirective, StyleSetDirective, BotService, ComService, IPayload, DEFAULT_OPTIONS } from 'ngx-microsoft-bot-framework';

@Component({
  selector: 'app-microsoft',
  templateUrl: './microsoft.component.html',
  styleUrls: ['./microsoft.component.css']
})
export class MicrosoftComponent implements OnInit, AfterViewInit {

  public name: string;
  public enableChat = false;

  @ViewChild("botWindow", { static: true }) botWindowElement: ElementRef;

  constructor(private router: Router,
    private comService: ComService,
    private bot: BotDirective) { }

  
  public passViewChild: ViewChild;

  payload: IPayload = {
    secret: 'VQDSUGBn3Lo.SxWHKP4UXAvJWZaLXkUQGBABH4sjZU3NIjeesJnmW-g',
    url: 'https://webchat.botframework.com/api/tokens',
    secretSetting: false,
    userId: 'USER_ID',
    webSocket: true
  };

  stylesetPayload: DEFAULT_OPTIONS = {
      rootHeight: '100%',
      botAvatarInitials: 'BF',
      userAvatarInitials: 'CH',
      backgroundColor: '#131313',
      root: {
        /* width */
        ' ::-webkit-scrollbar': {
          width: '3px'
        }
      },
      textContent: {
        fontFamily: '\'Comic Sans MS\', \'Arial\', sans-serif',
        fontWeight: 'bold',
      }
    };
    styleOptionsPayload: DEFAULT_OPTIONS = {
      rootHeight: '100%',
      botAvatarInitials: 'BF',
      userAvatarInitials: 'CH',
      backgroundColor: 'red',
    };

  ngOnInit() {
    this.name = sessionStorage.getItem('Username');

    //this.obtainStylePayload();
    //this.obtainLocalToken();
  }

  ngAfterViewInit() {
    //this.setBotDirective();
  }

  back() {
    this.router.navigate(['/login']);
  }

  stratChat() {
    this.enableChat = true;
    this.router.navigate(['/app/chatbot']);

  }

  setBotDirective(): void {
    this.passViewChild = this.botWindowElement.nativeElement;
    this.bot.botDirective(this.passViewChild);
  }

  obtainLocalToken() {
    this.comService.obtainToken(this.payload);
  }

  obtainStylePayload() {
    this.comService.obtainStylePayload(this.stylesetPayload, this.styleOptionsPayload)
  }

}
