class Calendar{
date: Date;
weekdays: string[];
mondayDate: Number;
    constructor(){
        this.date = new Date();
        this.weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        this.mondayDate = this.getMonday();
    }
    daysToMilliseconds(day: number){
     return day * 24 * 60 * 60 * 1000;
    }
    getMonday(): Number{
       const mondayDate = this.date.setTime(this.date.getTime() - (this.daysToMilliseconds(this.date.getDay() - 1)));
        return mondayDate

    }


}


const calendar = new Calendar();