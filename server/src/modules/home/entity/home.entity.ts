import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Home {
  @PrimaryGeneratedColumn()
  homeId: string;

  @Column({ default: 'url' })
  url: string;
}
