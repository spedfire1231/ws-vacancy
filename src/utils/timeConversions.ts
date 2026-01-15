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
      dayShift: "17:30 – 02:30",
      nightShift: "02:30 – 11:30",
      timezone: "IST (UTC+5:30)"
    },
    {
      country: "Nigeria",
      dayShift: "13:00 – 22:00", 
      nightShift: "22:00 – 07:00",
      timezone: "WAT (UTC+1)"
    },
    {
      country: "Ghana",
      dayShift: "13:00 – 22:00",
      nightShift: "22:00 – 07:00", 
      timezone: "GMT (UTC+0)"
    },
    {
      country: "Kenya",
      dayShift: "15:00 – 00:00",
      nightShift: "00:00 – 09:00",
      timezone: "EAT (UTC+3)"
    },
    {
      country: "Colombia",
      dayShift: "07:00 – 16:00",
      nightShift: "16:00 – 01:00",
      timezone: "COT (UTC-5)"
    },
    {
      country: "Venezuela", 
      dayShift: "07:00 – 16:00",
      nightShift: "16:00 – 01:00",
      timezone: "VET (UTC-4)"
    }
  ];
};