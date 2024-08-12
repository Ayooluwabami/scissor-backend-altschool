import { ConfigService } from '@nestjs/config';

export default (configService: ConfigService) => ({
  uri: configService.get<string>('MONGODB_URI'),
});
