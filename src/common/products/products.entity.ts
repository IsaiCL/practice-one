/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')

export class ProductsEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    name: string;

    @Column('varchar')
    image: string;

    @Column('varchar')
    notesDescription: string ;

    @Column('int')
    priceExcludingVAT: number;

    @Column('int')
    priceIncludingVAT: number;

    @Column('date')
    expireOn: Date;
    
}