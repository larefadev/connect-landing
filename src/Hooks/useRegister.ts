import type {Register} from "@/Types/Register.ts";
import {sendEmailForRegister} from "@/Services/Register.ts";

export const useRegister = () => {
    const register = async (data: Register):Promise<void> => {
        await sendEmailForRegister(data);
    }

    return {register};
};