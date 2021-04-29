import { Turn } from "../entities/Turn";
import { TypeOfWork } from "../entities/TypeOfWork";
import { Appointment } from "../types/Appointment";
import { UserProfile } from "../types/UserProfile";

class AppointmentService {
    static getNext = async (): Promise<Appointment> => {
        return {
            date: new Date(),
            service: "Haircut",
        };
    };

    static getTypesOfWork = async (): Promise<TypeOfWork[]> => {
        return [
            {
                id: "1234",
                name: "Haircut",
                duration: "45 minutes",
                price: 20,
            },
            {
                id: "3456",
                name: "Haircut and beard trim",
                duration: "1 hour",
                price: 30,
            },
            {
                id: "568979",
                name: "Traditional shave",
                duration: "45 minutes",
                price: 15,
            },
        ];
    };

    static getTurns = async (date: Date, typeOfServiceId: string): Turn[] => {
        return [
            {
                hour: 12,
                minutes: 30,
                available: true,
            },
            {
                hour: 14,
                minutes: 30,
                available: true,
            },
            {
                hour: 16,
                minutes: 30,
                available: false,
            },
            {
                hour: 18,
                minutes: 30,
                available: true,
            }
        ];
    };

    static getUserProfile = async (): Promise<UserProfile> => {
        return {
            email: "user@email.com",
            fullName: "Example User",
            phoneNumber: "+54 11 1234 5678",
            birthDate: "01/01/1970",
        };
    };
}

export default AppointmentService;
