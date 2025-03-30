import { aggregateData } from "../src/app/utils/utils";
import { User } from "../src/app/types";

test("aggregateData should correctly aggregate user data by department", () => {
  const users: User[] = [
    {
      id: 1,
      firstName: "Alice",
      lastName: "Smith",
      age: 30,
      company: { department: "HR" },
      gender: "female",
      hair: { color: "Blonde" },
      address: { postalCode: "12345" },
    },
    {
      id: 2,
      firstName: "Bob",
      lastName: "Brown",
      age: 25,
      company: { department: "Engineering" },
      gender: "male",
      hair: { color: "Black" },
      address: { postalCode: "18876" },
    },
    {
      id: 3,
      firstName: "Charlie",
      lastName: "Davis",
      age: 28,
      company: { department: "HR" },
      gender: "male",
      hair: { color: "Blonde" },
      address: { postalCode: "13579" },
    },
  ];

  const result = aggregateData(users);

  expect(result).toEqual({
    department: {
      HR: {
        male: 1,
        female: 1,
        ageRange: "28-30",
        hair: { Blonde: 2 },
        addressUser: {
          AliceSmith: "12345",
          CharlieDavis: "13579",
        },
      },
      Engineering: {
        male: 1,
        female: 0,
        ageRange: "25-25",
        hair: { Black: 1 },
        addressUser: {
          BobBrown: "18876",
        },
      },
    },
  });
});

