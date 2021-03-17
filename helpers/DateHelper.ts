import dayjs from "dayjs"

class DateHelper {
    static getLongDate = (date: Date): string => {
        return dayjs(date).format('dddd, MMMM DD, YYYY')
    }

    static getHour = (date: Date): string => {
        return dayjs(date).format('hh:mm a')
    }
}

export default DateHelper