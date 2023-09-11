interface ICalendar {
    date: Date;
    weekdays: string[];
    mondayDate: Date;
    daysToMilliseconds(day: number): number;
    getMonday(): Date;
    getWeek(): { weekdays: string; dateString: string }[];
}

class Calendar implements ICalendar {
    date: Date;
    weekdays: string[];
    mondayDate: Date ;
    constructor(timeOffset: number){
        this.date = new Date();
        this.date.setTime(this.date.getTime() + timeOffset);
        this.weekdays  = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        this.mondayDate = this.date;
        
    }

    daysToMilliseconds(day: number): number{
        return day * 24 * 60 * 60 * 1000;
    }

    getMonday(): Date{
        const currentDay = this.date.getDay();

        const millisecondsToMonday = this.daysToMilliseconds(currentDay === 0 ? 6 : currentDay - 1);
            
        return new Date(this.date.getTime() - millisecondsToMonday);
            
    }

    getWeek(): { weekdays: string; dateString: string }[] {
        const startDate: Date = this.getMonday();
        const weekArray: { weekdays: string; dateString: string }[] = [];

        for (let i = 0; i < this.weekdays.length; i++) {
            const dateObject = new Date(startDate);
            dateObject.setDate(startDate.getDate() + i); // Set the date for the current day of the week

            const dateString: string = dateObject.toLocaleDateString();
            weekArray.push({ weekdays: this.weekdays[i], dateString });
        }

        return weekArray;
        }
}
 
export default Calendar;
