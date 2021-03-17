import { Appointment } from "../entities/Appointment"

class AppointmentService {

    static getNext = async (): Promise<Appointment> => {
        return {
            date: new Date(),
            service: "Haircut"
        }
    }
}

export default AppointmentService