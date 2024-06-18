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

  @Index({
    unique: true,
  })
  @Column({
    name: 'transfer_id',
  })
  transferId: string;

  @Index()
  @Column()
  destination: number;

  @Column({
    type: 'decimal',
  })
  amount: number;

  @Column()
  status: 'pending' | 'completed' | 'failed';

  @Column({
    name: 'transfer_type',
  })
  transferType: string;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ type: 'jsonb', default: '{}' })
  metadata: Record<string, any>;
}
