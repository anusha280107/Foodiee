const API_URL = "https://6a7425c115e0453fe1b46fc3.mockapi.io/Foods";
export const getFoods = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch foods");
  }

  return await response.json();
};
export const getFoodById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Food not found");
  }
  return await response.json();
};
export const addFood = async (food) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(food),
  });
  if (!response.ok) {
    throw new Error("Unable to add food");
  }
  return await response.json();
};
export const updateFood = async (id, food) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(food),
  });
  if (!response.ok) {
    throw new Error("Unable to update food");
  }
  return await response.json();
};
export const deleteFood = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Unable to delete food");
  }
  return true;
};