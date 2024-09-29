import { Module } from '@nestjs/common';
import { PrismaModule } from './infra/database/prisma/prisma.module';
import { AuthModule } from './core/modules/auth/auth.module';

@Module({ imports: [PrismaModule, AuthModule] })
export class RootModule {}
