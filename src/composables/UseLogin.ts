import axios from "axios";

export const useLogin = ()  => {

  const postLogin = async (email: string, pass: string): Promise<any> => {
    try {
      const { data, status } = await axios.post('https://fepruebatecnicaculqi-backend-production.up.railway.app/auth/login', {
        "correo": email,
        "password": pass
      });
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
  return { postLogin }
}