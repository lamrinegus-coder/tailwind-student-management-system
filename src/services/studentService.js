const API_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchStudents = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch student data");
  }
  const data = await response.json();
  return data.slice(0, 5).map((user) => ({
    id: user.id,
    name: user.name,
    course: "React Development",
  }));
};
