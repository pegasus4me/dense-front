import axios,{AxiosResponse} from "axios";
import { ApiUserStrucure, IuserType } from "../../domain/api.types";

class ApisAuth implements ApiUserStrucure {
    
    async POST<T extends IuserType>(args?: T | T[] | undefined): Promise<any> {
        
        try {
            const res:AxiosResponse<IuserType[], any> = await axios.post("/api/v3/user/register", {
                ...args
             });

            return res

        } catch(e : any) {
            return e
        }
    }

    async GET<T>(args?: T | undefined): Promise<any> {
        try {
            const res = await axios.get(`/api/v3/user/get/${args}`)
            return res        
        } catch (e : any) {
            return e
        }
    }
    async PUT<T>(args?: T | T[] | undefined): Promise<any> {
        try {
            const res : AxiosResponse<IuserType | any> = await axios.put(`/api/v3/user/update`, {
                ...args
            })
            return res            
        } catch (e: any) {
            return e
        }
    }
    async DELETE<T>(args?: T | undefined | T[]): Promise<any> {
        try {
            const res:AxiosResponse<IuserType | any> = await axios.delete(`/api/v3/user/delete/${args}`)
            return res            
        } catch (e : any) {
            return e
        }
    }

}

export default ApisAuth