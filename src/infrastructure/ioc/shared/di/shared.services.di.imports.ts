import { HttpModule } from '@nestjs/axios';
import { JwtModule } from '@nestjs/jwt';

export const sharedServicesDIImports = [JwtModule.register({}), HttpModule];
