interface WeatherData {
  city: string;
  temperature: number;
  humidity: number;
  wind: number;
  rain: number;
}

interface DaysData {
  city: string;
  dayOne: number;
  dayTwo: number;
  dayThree: number;
  
}

interface HealthRecord {
  patientName: string;
  age: number;
  gender: string;
  medicalCondition: string;
  prescription: string;
  labResults: {
    cholesterol: number;
    bloodPressure: string;
    bloodSugar: number;
  };
  appointments: {
    date: Date;
    doctor: string;
    department: string;
  }[];
}
