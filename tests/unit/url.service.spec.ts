import { Test, TestingModule } from '@nestjs/testing';
import { UrlService } from '../../src/modules/url/url.service';
import { Url } from '../../src/modules/url/url.model';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';

describe('UrlService', () => {
  let service: UrlService;
  let model: Model<Url>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UrlService,
        {
          provide: getModelToken(Url.name),
          useValue: {
            find: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<UrlService>(UrlService);
    model = module.get<Model<Url>>(getModelToken(Url.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

});
