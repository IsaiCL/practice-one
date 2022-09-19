/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProductsService} from './products.service';
import { ProductsEntity } from "./products.entity";
import { Roles } from "../roles/roles.decorator";
import { Role } from "../roles/role.enum";

@Controller('ProductView')
export class ProductsController {
    constructor(private productsService: ProductsService) { }
    
    @Get('mostrarProductos')
    getAll(@Param()params) {
        return this.productsService.getProducts(params.id);
    }

    @Get(':id')
    getOne(@Param()params) {
        return this.productsService.getProduct(params.id);
    }

    @Post()
    @Roles(Role.Admin)
    create(@Body() product: ProductsEntity) {
        return this.productsService.createProducts(product)
    }

    @Put(':id')
    @Roles(Role.Admin)
    update(@Body() product: ProductsEntity, @Param() params) {
        return this.productsService.updateProduct(params.id, product)
    }

    @Delete(':id')
    @Roles(Role.Admin)
    delete(@Param() params) {
        return this.productsService.deleteProducts(params.id)
    }
}