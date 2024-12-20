import { ConfigService } from '@config/config.service';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
	providers: [ConfigService],
	exports: [ConfigService],
})
export class ConfigModule {}
