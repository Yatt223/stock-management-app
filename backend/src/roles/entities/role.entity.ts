import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string; // ex: ADMIN, MANAGER, EMPLOYEE

  @Column({ type: 'text', nullable: true })
  description: string;
}
