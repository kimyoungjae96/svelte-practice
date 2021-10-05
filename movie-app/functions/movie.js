const axios = require('axios');
const { OMDB_API_KEY } = process.env;

exports.handler = async (event, context) => {
  const params = JSON.parse(event.body);
  const { title, type, year, page, id } = params;

  const url = id
    ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}&plot=full`
    : `https://www.omdbapi.com/?i=tt3896198&apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`;

  try {
    const res = await axios.get(url);
    console.log(res.data);
    if (res.data.Error) {
      return {
        statusCode: 400,
        body: res.data.Error,
      };
    }
    return {
      statusCode: 200,
      body: JSON.stringify(res.data),
    };
  } catch (e) {
    return {
      statusCode: e.response.status,
      body: e.message,
    };
  }
};
