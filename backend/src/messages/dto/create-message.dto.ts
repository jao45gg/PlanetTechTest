import { IsNotEmpty } from "class-validator";

export class CreateMessageDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  sender: string;

  @IsNotEmpty()
  timestamp: string;
}
