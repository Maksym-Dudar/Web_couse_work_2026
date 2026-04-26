import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { AddressRepository } from './address.repository';
export declare class AddressService {
    private readonly addressRepo;
    constructor(addressRepo: AddressRepository);
    createAddress(address: CreateAddressDto, userId: number): Promise<{
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
    updateAddress(address: UpdateAddressDto, userId: number): Promise<{
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
    getAddress(id: number): Promise<{
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
}
