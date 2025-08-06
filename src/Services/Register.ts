import type {Register} from "@/Types/Register.ts";

export const sendEmailForRegister = async (data:Register): Promise<void> =>{
    try{
        await fetch(import.meta.env.VITE_SEND_EMAIL_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    }catch (e) {
        console.error(e);
    }
}