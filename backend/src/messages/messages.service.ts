import { Injectable } from "@nestjs/common";
import { CreateMessageDto } from "./dto/create-message.dto";

@Injectable()
export class MessagesService {
  db = [
    {
      id: "550e8400-e29b-41d4-a716-446655440000",
      content: "Olá, como vai?",
      sender: "João",
      timestamp: "2024-12-20T15:32:00Z",
    },
    {
      id: "9b72e4e7-44e6-43f2-901e-32a6bb69d1fa",
      content: "Tudo ótimo, e você?",
      sender: "Maria",
      timestamp: "2024-12-21T15:33:00Z",
    },
  ];

  private sortDbByTimestamp() {
    this.db.sort(
      (a, b) =>
        new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime(),
    );
  }

  create(createMessageDto: CreateMessageDto) {
    this.db.push(createMessageDto);
    this.sortDbByTimestamp();
  }

  findAll() {
    return this.db;
  }
}
