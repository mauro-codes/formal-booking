import { Appointment } from "../types/Appointment"
import { Service } from "../types/Service"
import { UserProfile } from "../types/UserProfile"

class AppointmentService {

    static getNext = async (): Promise<Appointment> => {
        return {
            date: new Date(),
            service: "Haircut"
        }
    }

    static getServices = async (): Promise<Service[]> => {
        return [
            {
                name: "Haircut",
                duration: "45 minutes",
                price: 20
            },
            {
                name: "Haircut and beard trim",
                duration: "1 hour",
                price: 30
            },
            {
                name: "Traditional shave",
                duration: "45 minutes",
                price: 15
            },
        ]
    }

    static getUserProfile = async (): Promise<UserProfile> => {
        return {
            email: "user@email.com",
            fullName: "Example User",
            phoneNumber: "+54 11 1234 5678",
            birthDate: "01/01/1970"
        }
    }
}

export default AppointmentService