// Using 1-counter.md or 2-counter.md from the easy section, can you create a clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

// HH:MM::SS (Eg. 13:45:23)

// HH:MM::SS AM/PM (Eg 01:45:23 PM)

const clock = () => {
    setInterval(()=> {
        const now = new Date();
        let seconds = now.getSeconds();
        let minutes = now.getMinutes();
        let hours = now.getHours();

        let time24Hour = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        let amPm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        let time12Hour = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${amPm}`;

        console.log(`24-hour format: ${time24Hour}`);
        console.log(`12-hour format: ${time12Hour}`);
    }, 1000);
}

clock();