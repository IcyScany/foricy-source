import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Album {
  @PrimaryGeneratedColumn()
  albumId: string;

  @Column({ default: 'title' })
  title: string;

  @Column({ default: 'url' })
  url: string;
}
