import { Supplier } from '../../suppliers/entities/supplier.entity';
import { User } from '../../users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
@Entity()
export class Purchase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  reference: string; // ex: APP-2025-0001

  @ManyToOne(() => Supplier)
  supplier: Supplier;

  @Column({ type: 'date' })
  date: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  totalAmount: number;

  @Column({ default: 'PENDING' })
  status: string; // PENDING, PAID

  @ManyToOne(() => User)
  createdBy: User;
}
