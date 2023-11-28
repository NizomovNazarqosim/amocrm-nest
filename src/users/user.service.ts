import {Injectable} from '@nestjs/common';
import {AmoCRMApiClient} from '../amoCRMApiClient';
import {CreateUserDto} from './dto/create-user.dto';


@Injectable()
export class UserService{
    constructor(private readonly client: AmoCRMApiClient) {}

    create(createUser: CreateUserDto) {
        return this.client.CREATE_CONTACT(createUser);
    }

    findOneByEmail(email: string) {
        return this.client.FETCH_CONTACT_BY_FILTER('756829', email);
    }

    findOneByPhone(phone: string) {
        return this.client.FETCH_CONTACT_BY_FILTER('757025', phone);
    }
    
    update(id: number, updateContactDto:CreateUserDto ) {
        return this.client.UPDATE_CONTACT(id, updateContactDto);
    }
}