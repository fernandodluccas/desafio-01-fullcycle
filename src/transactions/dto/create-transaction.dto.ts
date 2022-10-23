import { IsIn, IsNumber, IsString } from 'class-validator';

export class CreateTransactionDto {
  @IsString()
  @IsIn(['credit', 'debit'])
  type: string;

  @IsNumber()
  amount: number;
}
