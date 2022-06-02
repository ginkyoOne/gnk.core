Date.prototype.getWeekOfMonth = function () {
    var firstDay = new Date(this.setDate(1)).getDay();
    var totalDays = new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
    return Math.ceil((firstDay + totalDays) / 7);
}


class dates {

    currentDate = null
    currentDateFormat = 'YYYY-MM-DD HH:MM:SS'
    currentLocale = 'en'
    currentDateIsValid = false

    monthsNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    daysNames = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]


    custructor(string = null, format = 'YYYY-MM-DD HH:MM:SS') {
        try {
            
            switch (true) {
                case (string === Date): //Date obejct
                    this.currentDate = string
                    this.currentDateIsValid = true
                    break;
                
                case (string === Object): //Object
                    const [y = 1985,M = 7,d = 18,h = 7,m = 35,s = 00,ms = 00]  = string    
                    this.currentDate = new Date(y,M,d,h,m,s,ms)
                    
                case (Number.isInteger(string) && string.length == 13): //Unix Timestamp (milliseconds)
                    this.currentDate = new Date(string)
                    break;
                
                case (Number.isInteger(string) && string.length == 10): //Unix Timestamp (seconds)
                    this.currentDate = new Date(string * 1000)
                    break;
                
                case (string !== null): //Date as string 
                    this.currentDate = new Date( string )
                    break;
                
                case (string !== null && format !== null): //Date as string and format
                    this.currentDate = new Date( string ).format( format )
                    break;
                
                default: //Current Date
                    this.currentDate = new Date()
                    break;
            }

            this.currentDateIsValid = (this.currentDate !== 'Invalid Date') && (this.currentDate !== null) && (this.currentDate !== undefined) //Check if date is valid

        } catch (error) { //Error loading given date
            this.currentDate = null
            this.currentDateIsValid = false
        }
    }
    

    isValid() { //Check if date is valid
        return this.currentDateIsValid
    }


    value() { //Return current date as Date object
        return this.currentDate
    }

    valueToString() { //Return current date as string
        return this.currentDate.format(this.currentDateFormat)
    }
    

    miliseconds(add = 0) {
        this.currentDate.setMilliseconds(this.currentDate.getMilliseconds() + add)
        return (!!add && Number.isInteger(add) && add > 0) ? this : this.currentDate.getMilliseconds()
    }
    seconds(add = 0) {
        this.currentDate.setSeconds(this.currentDate.getSeconds() + add)
        return (!!add && Number.isInteger(add) && add > 0) ? this : this.currentDate.getSeconds()
    }
    minutes(add = 0) {
        this.currentDate.setMinutes(this.currentDate.getMinutes() + add)
        return (!!add && Number.isInteger(add) && add > 0) ? this : this.currentDate.getMinutes()
    }
    hours(add = 0) {
        this.currentDate.setHours(this.currentDate.getHours() + add)
        return (!!add && Number.isInteger(add) && add > 0) ? this : this.currentDate.getHours()
    }


    day(add = 0) {
        this.currentDate.setDate(this.currentDate.getDate() + add)
        return (!!add && Number.isInteger(add) && add > 0) ? this : this.currentDate.getDate()
    }
    dayOfWeek(add = 0) { //0 = Sunday, 6 = Saturday depending on locale
        this.currentDate.setDate(this.currentDate.getDate() + add)
        return (!!add && Number.isInteger(add) && add > 0) ? this : this.currentDate.getDay()
    }
    dayOfWeekName(short = false) {
        return (short) ? this.monthsNames[this.currentDate.getDay()].slice(0, 3) : this.monthsNames[this.currentDate.getDay()]
    }



    quarter(add = 0) {
        this.currentDate.setMonth(this.currentDate.getMonth() + add)
        return (!!add && Number.isInteger(add) && add > 0) ? this : Math.floor(this.currentDate.getMonth() / 3) + 1
    }
    halfYear(add = 0) {
        this.currentDate.setMonth(this.currentDate.getMonth() + add)
        return (!!add && Number.isInteger(add) && add > 0) ? this : Math.floor(this.currentDate.getMonth() / 6) + 1
    }



    month(add = 0) {
        this.currentDate.setMonth(this.currentDate.getMonth() + add)
        return (!!add && Number.isInteger(add) && add > 0) ? this : this.currentDate.getMonth()
    }
    monthName(short = false) {
        return (short) ? this.monthsNames[this.currentDate.getMonth()].slice(0,3) : this.monthsNames[this.currentDate.getMonth()]
    }



    year(add = 0) {
        this.currentDate.setFullYear(this.currentDate.getFullYear() + add)
        return (!!add && Number.isInteger(add) && add > 0) ? this : this.currentDate.getFullYear()
    }



    weekOfYear() {
        return Math.floor((this.currentDate - new Date(this.currentDate.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24 * 7));
    }
    weeksInYear() {
        return Math.floor(this.currentDate.getFullYear() / 52) + 1
    }

    daysInMonth() {
        return new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate()
    }
    dayOfYear() {
        return Math.floor((this.currentDate - new Date(this.currentDate.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    }
    daysInYear() {
        return ((new Date(this.currentDate.getFullYear(), 12, 0)) - (new Date(this.currentDate.getFullYear(), 0, 0))) / (1000 * 60 * 60 * 24)
    }

    isLeapYear() {
        return (this.currentDate.getFullYear() % 4 == 0 && this.currentDate.getFullYear() % 100 != 0) || this.currentDate.getFullYear() % 400 == 0
    }


    isToday() {
        return this.currentDate.toISOString().slice(0, 10) = (new Date()).toISOString().slice(0, 10)
    }


    isBefore(date) {
        if (!(date instanceof dates)) return null
        return this.currentDate < date.value
    }
    isAfter(date) {
        if (!(date instanceof dates)) return null
        return this.currentDate > date.value
    }
    isBetween(date1, date2) {
        if (!(date1 instanceof dates) || !(date2 instanceof dates)) return null
        return (this.currentDate > date1.value && this.currentDate < date2.value)
    }


    mounthInWeeks(add = 0) {
        this.currentDate.setMonth(this.currentDate.getMonth() + add)
        var firstDay = new Date(this.setDate(1)).getDay();
        var totalDays = new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
        return Math.ceil((firstDay + totalDays) / 7);
    }




    clone() {
        return new dates(this.currentDate)
    }
    diff(date) {
        if(!(date instanceof dates)) return null
        return new dates(new Date(this.currentDate.getTime() - date.value().getTime()));
    }



}