import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { ContactsController } from './user.controller';
import { AmoCRMApiClient } from 'src/amoCRMApiClient';
import {LeadsService} from '../leads/leads.service';

@Module({
  controllers: [ContactsController],
  providers: [UserService,LeadsService, AmoCRMApiClient],
})
export class UserModule {}