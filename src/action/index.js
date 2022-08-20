async function exampleFetch() {
  const response = await fetch("https://swapi.dev/api/people");
  const json = await response.json();
  console.log("json", json.results);
  return json.results;
}

export const showName = async () => {
  const data = await exampleFetch();
  console.log(data);
  return {
    type: "SHOW_NAME",
    payload: {
      data: data,
    },
  };
};

export const addName = (data) => {
  return {
    type: "ADD_NAME",
    payload: {
      id: new Date().getTime().toString(),
      name: data,
    },
  };
};
