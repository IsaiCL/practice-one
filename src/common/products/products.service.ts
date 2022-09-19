/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm/dist";
import { Repository } from "typeorm";
import { ProductsEntity } from "src/common/products/products.entity";

@Injectable()

export class ProductsService{
    
    constructor(
    @InjectRepository(ProductsEntity) private productsRepository: Repository<ProductsEntity>,
    ) { }

    async getProducts(product: ProductsEntity): Promise<ProductsEntity[]> {
        return await this.productsRepository.find();
    }

    async getProduct(_id: number): Promise<ProductsEntity> {
        return this.productsRepository.findOne({ where: { id: _id }})
    }

    async updateProduct(id: number, product: ProductsEntity) {
        return this.productsRepository.update({id}, product)
    }

    async createProducts(product:ProductsEntity) {
        return this.productsRepository.save(product);
    }

    async deleteProducts(product: ProductsEntity) {
        return this.productsRepository.delete(product)
    }
    
}