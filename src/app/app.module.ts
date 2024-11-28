import { AppMiddleware } from '@app/app.middleware';
import { AuthModule } from '@auth/auth.module';
import { ConfigModule } from '@config/config.module';
import { UserDatabaseModule } from '@database/users/users.module';
import { HealthModule } from '@health/health.module';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

@Module({
	imports: [AuthModule, ConfigModule, UserDatabaseModule, HealthModule],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer): void {
		consumer.apply(AppMiddleware).forRoutes('*');
	}
}
