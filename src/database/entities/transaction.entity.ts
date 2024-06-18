import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'transactions',
})
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column()
  source: number;

  @Index()
  @Column()
  destination: number;

  @Column({
    type: 'decimal',
  })
  amount: number;

  @Column()
  status: 'pending' | 'completed';
}
