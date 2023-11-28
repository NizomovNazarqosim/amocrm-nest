import { Controller, Get, Query } from '@nestjs/common';
import { LeadsService } from 'src/leads/leads.service';
// import { Contact, QueryFields } from 'src/types';
import { UserService } from './user.service';
import {CreateUserDto} from './dto/create-user.dto'

@Controller('contacts')
export class ContactsController {
  constructor(
    private readonly userService: UserService,
    private readonly leadsService: LeadsService,
  ) {}

  @Get()
  async findOne(@Query() query: CreateUserDto) {
    let contact: any;
    // (1) SEARCH for a contact by email
    contact = await this.userService.findOneByEmail(query.email);

    // (2) IF NO contact found, SEARCH for a contact by phone
    if (!contact) {
      contact = await this.userService.findOneByPhone(query.phone);
    }

    let contactId: number;
    // (3) IF NO contact found, CREATE a new contact
    if (!contact) {
      const { id } = await this.userService.create(query);
      contactId = id;
    } else {
      // (4) if the contact is found, UPDATE a new contact and retrieve the id
      const { id } = await this.userService.update(
        contact.id,
        query,
      );
      contactId = id;
    }

    // (5) CREATE a lead with the contact
    const leads = await this.leadsService.create(contactId);

    // (6) return contact id and lead id
    return { contactId, leads };
  }
}