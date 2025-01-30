
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export default function PercelBox() {
    const faqData = [
        {
            id: 1,
            title: "Can AI help with technical analysis of documents?",
            desc: "The automation of administrative and document management processes is crucial in companies and institutions that are faced with increasing amounts of data to analyse.",

        },
        {
            id: 2,
            title: "How does the AI multiagent work and what is it used for?",
            desc: "Multiagent AI is a system of autonomous agents working together to solve problems. It is used in logistics, cyber security and energy, where dynamic decisions and process optimisation are required.",
        },
        {
            id: 3,
            title: "Can AI improve the efficiency of data management systems in the public sector?",
            desc: "Public administration in Poland and around the world is moving towards digitalisation, and AI can help automate processes and improve the security of citizens' data.",
        },
        {
            id: 4,
            title: "Can AI reduce employee costs in my company?",
            desc: "Yes, implementing AI can automate repetitive tasks, optimising processes and increasing productivity. AI systems do not replace employees, but allow them to focus on more strategic tasks.",
        }

    ]
    return (
        <div id="faq" className="md:pt-42 pb-12">
            <div className="wrapper md:flex flex-col md:flex-row">
                <div className="right md:w-1/2 flex flex-col justify-center ">
                    <div className=" flex flex-col gap-0">
                        <div className="flex justify-center">
                            <h2 className="font-thin text-6xl mr-20 uppercase">What</h2>
                        </div>
                        <div className="flex justify-center items-center">
                            <h2 className="font-thin text-6xl ml-8 uppercase">we</h2>
                        </div>
                        <div className="flex justify-center">
                            <h2 className=" text-8xl">DO</h2>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image src="/assets/img/logo1.svg" alt="" width={500} height={500} />
                    </div>
                </div>
                <div className="left md:w-3/4 flex gap-8 md:gap-0 flex-row  justify-center">
                    <div className="w-full flex gap-8 justify-center items-center">
                        <div className="w-1/2">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Can AI help with technical analysis of documents?</AccordionTrigger>
                                    <AccordionContent>
                                        The automation of administrative and document management processes is crucial in companies and institutions that are faced with increasing amounts of data to analyse.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>How does the AI multiagent work and what is it used for?</AccordionTrigger>
                                    <AccordionContent>
                                        Multiagent AI is a system of autonomous agents working together to solve problems. It is used in logistics, cyber security and energy, where dynamic decisions and process optimisation are required.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Can AI improve the efficiency of data management systems in the public sector?</AccordionTrigger>
                                    <AccordionContent>
                                        Public administration in Poland and around the world is moving towards digitalisation, and AI can help automate processes and improve the security of citizens' data.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger>Can AI reduce employee costs in my company?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes, implementing AI can automate repetitive tasks, optimising processes and increasing productivity. AI systems do not replace employees, but allow them to focus on more strategic tasks.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-5">
                                    <AccordionTrigger>Is it accessible ?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It adheres to the WAI-ARIA design pattern.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        <div className="w-1/2">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-6">
                                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It adheres to the WAI-ARIA design pattern.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-7">
                                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It adheres to the WAI-ARIA design pattern.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-8">
                                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It adheres to the WAI-ARIA design pattern.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-9">
                                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It adheres to the WAI-ARIA design pattern.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-10">
                                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It adheres to the WAI-ARIA design pattern.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                    {/* <div className="top flex gap-8 flex-col md:flex-row"> */}
                    {/* <div className="boxText">
                            <h4>Can AI help with technical analysis of documents?</h4>
                            <p>The automation of administrative and document management processes is crucial in companies and institutions that are faced with increasing amounts of data to analyse.</p>
                        </div>
                        <div className="boxText md:mt-12">
                            <h4>How does the AI multiagent work and what is it used for?</h4>
                            <p>Multiagent AI is a system of autonomous agents working together to solve problems. It is used in logistics, cyber security and energy, where dynamic decisions and process optimisation are required.</p>
                        </div>
                    </div>
                    <div className="bottom flex gap-8 flex-col md:flex-row">
                        <div className="boxText">
                            <h4>Can AI improve the efficiency of data management systems in the public sector?</h4>
                            <p>Public administration in Poland and around the world is moving towards digitalisation, and AI can help automate processes and improve the security of citizens' data.</p>
                        </div>
                        <div className="boxText md:mt-12">
                            <h4>Can AI reduce employee costs in my company?</h4>
                            <p>Yes, implementing AI can automate repetitive tasks, optimising processes and increasing productivity. AI systems do not replace employees, but allow them to focus on more strategic tasks.</p>
                        </div> */}
                    {/* </div> */}
                </div>
            </div>
        </div >
    )
}