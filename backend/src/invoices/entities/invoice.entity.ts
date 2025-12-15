import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Client } from '../../clients/entities/client.entity';
import { Sale } from '../../sales/entities/sale.entity';

@Entity()
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  invoiceNumber: string; // FACT-2025-0001

  @OneToOne(() => Sale, { nullable: true })
  @JoinColumn()
  sale: Sale;

  @ManyToOne(() => Client)
  client: Client;

  @Column({ type: 'date' })
  issueDate: string;

  @Column({ type: 'date', nullable: true })
  dueDate: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total: number;

  @Column({ default: 'UNPAID' })
  status: string;
}
