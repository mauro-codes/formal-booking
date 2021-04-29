import dayjs from "dayjs";

class DateHelper {
    static getLongDate = (date: Date): string => {
        return dayjs(date).format("dddd, MMMM DD, YYYY");
    };
    static getNormalDate = (date: Date): string => {
        return dayjs(date).format("dddd, MMMM DD");
    };
    static getHour = (date: Date): string => {
        return dayjs(date).format("hh:mm a");
    };
}

export default DateHelper;
