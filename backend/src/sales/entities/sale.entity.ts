import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Client } from '../../clients/entities/client.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Sale {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  reference: string; // VENTE-2025-0001

  @ManyToOne(() => Client, { nullable: true })
  client: Client;

  @Column({ type: 'date' })
  date: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  totalAmount: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  amountPaid: number;

  @Column({ default: 'PENDING' })
  status: string; // PENDING, PARTIAL, PAID

  @ManyToOne(() => User)
  createdBy: User;
}
