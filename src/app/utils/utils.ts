import { User, DepartmentSummary, AggregateData, MinMaxAge } from "../types";

export function aggregateData(users: User[]): DepartmentSummary {
  const departmentData: { [key: string]: AggregateData } = {};
  const minMaxAge: MinMaxAge = {};

  users.forEach((user) => {
    const department = user.company?.department ?? "";

    if (!departmentData[department]) {
      departmentData[department] = {
        male: 0,
        female: 0,
        ageRange: "",
        hair: {},
        addressUser: {},
      };
    }

    if (!minMaxAge[department]) {
      minMaxAge[department] = { minAge: 1000000, maxAge: 0 };
    }

    const data: AggregateData = departmentData[department];

    // Count male and female
    if (user.gender === "male") {
      data.male += 1;
    } else if (user.gender === "female") {
      data.female += 1;
    }

    // Update age range
    if (user.age < minMaxAge[department].minAge) {
      minMaxAge[department].minAge = user.age;
    }

    if (user.age > minMaxAge[department].maxAge) {
      minMaxAge[department].maxAge = user.age;
    }

    departmentData[
      department
    ].ageRange = `${minMaxAge[department].minAge}-${minMaxAge[department].maxAge}`;

    // Count hair colors
    const hairColor = user.hair?.color ?? "";
    if (!data.hair[hairColor]) {
      data.hair[hairColor] = 0;
    }
    data.hair[hairColor] += 1;

    // Collect full name and postal code
    const fullName = `${user.firstName}${user.lastName}`;
    data.addressUser[fullName] = user.address?.postalCode ?? "";
  });

  return { department: departmentData };
}
