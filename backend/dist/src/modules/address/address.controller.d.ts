import { AddressService } from './address.service';
import { AccessTokenPayload } from '../auth/types.js';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
export declare class AddressController {
    private readonly addressService;
    constructor(addressService: AddressService);
    findAll(req: Request & {
        user: AccessTokenPayload;
    }): Promise<{
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        userId: number;
        phoneNumber: string;
        country: string;
        state: string;
        city: string;
        street: string;
        buildingNumber: string;
        zipCode: string;
    }[]>;
    create(req: Request & {
        user: AccessTokenPayload;
    }, address: CreateAddressDto): Promise<{
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        userId: number;
        phoneNumber: string;
        country: string;
        state: string;
        city: string;
        street: string;
        buildingNumber: string;
        zipCode: string;
    }>;
    update(req: Request & {
        user: AccessTokenPayload;
    }, address: UpdateAddressDto): Promise<{
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        userId: number;
        phoneNumber: string;
        country: string;
        state: string;
        city: string;
        street: string;
        buildingNumber: string;
        zipCode: string;
    }>;
}
