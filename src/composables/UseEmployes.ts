import axios from "axios";

export const useEmployes = ()  => {



  const getEmployes = async (token: string, limit: string, page: string): Promise<any> => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    try {
      const { data, status } = await axios.get(`https://fepruebatecnicaculqi-backend-production.up.railway.app/empleados?limit=${limit}&page=${page}`, config);
      console.log(status)
      return data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('Error: ', error.message);
        return error.message;
      } else {
        console.log('Error inesperado: ', error);
        return 'A ocurrido un error inesperado';
      }
    }
  }
  return { getEmployes }
}