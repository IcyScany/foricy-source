import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Story {
  @PrimaryGeneratedColumn()
  storyId: string;

  @Column({ default: 'title' })
  title: string;

  @Column({ default: 'url' })
  url: string;

  @Column({ default: '#FFFFFF' })
  color: string;

  @Column('text')
  text: string;
}
