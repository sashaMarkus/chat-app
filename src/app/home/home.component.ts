import { Component, OnInit } from '@angular/core';
import { ChatMessage } from '../models/chat-message.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    angularFirestore: any;

  constructor() { }

  ngOnInit() {
  }

  addMessage(messageInput) {
      const _doc: ChatMessage = {
        message: messageInput.value,
        timestamp: new Date,
        userName: 'a'
      }

      this.angularFirestore.collection('messages').add(_doc).then(res => {
          console.log('added');
      })
  }

}
