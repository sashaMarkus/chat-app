import { Component, OnInit } from '@angular/core';
import { ChatMessage } from '../models/chat-message.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {

    messages: ChatMessage[];

  constructor(private angularFirestore: AngularFirestore) { 

    this.messages = [];
  }

  ngOnInit() {
      this.angularFirestore.collection<ChatMessage>('messages').valueChanges().subscribe(res => {
          this.messages = res;
      })
  }

}
