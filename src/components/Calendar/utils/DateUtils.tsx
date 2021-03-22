export default class DateUtils {
    date: Date;
    dayNames : Array<string>;
    monthNames : Array<string>;
    constructor(date: Date) {
        this.date = date;
        this.dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    }

    getDate() {
        return this.date;
    }

    setDate(date: Date) {
        this.date = date;
    }

    getYearFromDate() {
        return this.date.getFullYear().toString();
    }

    getDayNameFromDate() {

        return this.dayNames[this.date.getDay()];
    }

    getDayFromDate() {
        return this.date.getDate().toString();
    }

    getMonthFromDate () {
        return this.monthNames[this.date.getMonth()];
    }

    getDatesOfMonthFromDate(){
        var date = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
        var days = [];

        // Inactive days of prev month
        date.setDate(date.getDate()-date.getDay()-1);
        while (date.getDay() !== 0) {
            date.setDate(date.getDate()+1);
            days.push({
                date:new Date(date),
                active: false
            });
        }

        // Active days of current month
        date = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
        while (date.getMonth() === this.date.getMonth()) {
            days.push({
                date: new Date(date),
                active: true
            });
            date.setDate(date.getDate() + 1);
        }

        date.setDate(date.getDate()+1);

        // Inactive days of next month
        while (date.getDay() !== 0) {
            date.setDate(date.getDate()+1);
            days.push({
                date: new Date(date),
                active:false
            })
        }
        return days;
    }

}