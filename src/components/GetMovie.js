let getMovie = async (title, year) => {
  let apiKey = "e419ac0c";
  let response;
  let data;
  if (title && year) {
    response = await fetch(
      `https://www.omdbapi.com/?apiKey=${apiKey}&t=${title}&y=${year}`
    );

    data = await response.json();
  } else if (title) {
    response = await fetch(
      `http://www.omdbapi.com/?apiKey=${apiKey}&t=${title}`
    );
    data = await response.json();
  }
  //For unexpected situations
  else response = null;

  console.log(data);
  return data;
};

export default getMovie;
