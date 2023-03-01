const { add, bestFruit } = require("./index");
const api = "http://localhost:4000/v1";
const axios = require("axios");

const names = ["Edwin", "Jules", "Cynthia", "Gentille"];

describe("Testing small functions", () => {
  test("Addition test", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("Test our favorite", () => {
    expect(bestFruit).not.toBe("Banana");
  });

  test("Find Gentille", () => {
    expect(names).toContain("Gentille");
  });
});

describe("Testing the student API", () => {
  test("Get functionality", async () => {
    const res = await axios.get(`${api}/students`);
    expect(res.status).toBe(200);
    expect(res.data).toEqual([
      { id: 1, name: "student1" },
      { id: 2, name: "student2" },
    ]);
  });

  test("Add a new student", async () => {
    const res = await axios.post(`${api}/students`, {
      id: 3,
      name: "student3",
    });

    expect(res.status).toBe(201);
    expect(res.data).toEqual("Student Created Succesffuly 3");

    const students = await axios.get(`${api}/students`);
    expect(students.data.length).toBe(3);
  });
});
