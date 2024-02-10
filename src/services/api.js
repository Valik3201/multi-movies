import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const baseOptions = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTMyZWM5MzExODExYjA2NDkyNzhmZGFmYzEyMzAwZSIsInN1YiI6IjY1YzIwN2U2ZjQ0ZjI3MDE2M2MwYzBjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zkFtcEcge5gUigfN2sq7K5C-DaNfEfDz1qyoSucACIQ',
  },
};

export { axios, baseOptions };
