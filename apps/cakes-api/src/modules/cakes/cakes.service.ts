import { Injectable } from '@nestjs/common';
import { Cake } from '@waracle-test/models';
import { PrismaClientService } from '@waracle-test/prisma-client';

@Injectable()
export class CakesService {
  constructor(private prisma: PrismaClientService) {}

  async findAll() {
    return this.prisma.cake.findMany();
  }

  async create(cake: Cake) {
    return this.prisma.cake.create({
      data: {
        ...cake,
      },
    });
  }

  async delete(id: number) {
    return this.prisma.cake.delete({
      where: {
        id: Number(id),
      },
    });
  }
}
