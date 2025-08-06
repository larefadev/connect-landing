import {Header} from "../Components/Header/Header.tsx";
import {Steps} from "../Components/Steps/Steps.tsx"
import {Benefits} from "../Components/Benefits/Benefits.tsx";
import {Form} from "../Components/Form/Form.tsx";
import {Footer} from "../Components/Footer/Footer.tsx";
import {Plan} from "../Components/Pricing/Plan.tsx";
import Testimonials from "@/Components/Opinions/Opinions.tsx";
import {Question} from "@/Components/Question/Question.tsx";
import {Earn} from "@/Components/Earn/Earn.tsx";
import {Mock} from "@/Components/Mock/Mock.tsx";
import {Insignia} from "@/Components/Insignia/Insignia.tsx";
export const HomeLayout = () => {
    return (
        <>
            <Header/>
            <Question/>
            <Earn/>
            <Benefits/>
            <Steps/>
            <Mock/>
            <Plan/>
            <Testimonials/>
            <Insignia/>
            <Form/>
            <Footer/>
        </>
    );
}