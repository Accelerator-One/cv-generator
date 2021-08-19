import { Type, Month } from './enums';

interface Education {
  authority: String;
  score: DoubleRange;
  total: DoubleRange;
  type: Type;
}

interface Experience {
  position: String;
  company: String;
  startMonth: Month;
  endMonth?: Month;
  startYear: Number;
  endYear?: Number;
}

export { Education, Experience };