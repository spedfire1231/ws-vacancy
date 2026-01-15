export interface CountrySchedule {
  country: string;
  dayShift: string;
  nightShift: string;
  timezone: string;
}

export const convertKievTimeToCountries = (): CountrySchedule[] => {
  // Kiev time: Day: 14:00-23:00, Night: 23:00-08:00
  
  return [
    {
      country: "India",
      dayShift: "5:30 PM – 02:30 AM",
      nightShift: "02:30 AM – 11:30 AM",
      timezone: "IST (UTC+5:30)"
    },
    {
      country: "Nigeria",
      dayShift: "1:00 PM – 10:00 PM", 
      nightShift: "10:00 PM – 5:00 AM",
      timezone: "WAT (UTC+1)"
    },
    {
      country: "Ghana",
      dayShift: "1:00 PM – 10:00 PM",
      nightShift: "10:00 PM – 7:00 AM", 
      timezone: "GMT (UTC+0)"
    },
    {
      country: "Kenya",
      dayShift: "3:00 PM – 12:00 AM",
      nightShift: "12:00 AM – 9:00 AM",
      timezone: "EAT (UTC+3)"
    },
    {
      country: "Colombia",
      dayShift: "07:00 AM – 04:00 PM",
      nightShift: "04:00 PM – 01:00 AM",
      timezone: "COT (UTC-5)"
    },
    {
      country: "Venezuela", 
      dayShift: "07:00 AM – 04:00 PM",
      nightShift: "04:00 PM – 01:00 AM",
      timezone: "VET (UTC-4)"
    }
  ];
};