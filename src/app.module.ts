import { Module } from '@nestjs/common';
import {UserModule} from "./users/user.module"
// import {AmoCRMApiClient} from './amoCRMApiClient';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
