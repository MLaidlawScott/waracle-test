import { Test } from '@nestjs/testing';
import { PrismaClientService } from '@waracle-test/prisma-client';
import { CakesController } from './cakes.controller';
import { CakesService } from './cakes.service';

describe('CelestialApiBodiesController', () => {
  let controller: CakesController;
  let service: CakesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CakesService, PrismaClientService],
      controllers: [CakesController],
    }).compile();

    controller = module.get(CakesController);
    service = module.get(CakesService);
  });

  describe('findAll', () => {
    it('should return an array of cakes', async () => {
      const result = [
        {
          id: 1,
          name: 'Sponge',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/ChocolateTruffleCakeIdeal01.JPG/220px-ChocolateTruffleCakeIdeal01.JPG',
          comment: 'tasty cake',
          yumFactor: 5,
        },
      ];
      jest
        .spyOn(service, 'findAll')
        .mockImplementation(async () => await result);

      expect(await controller.findAll()).toBe(result);
    });
  });
});
