
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export default function PercelBox() {

    return (
        <div id="faq" className="md:pt-42 pb-12">
            <div className="wrapper md:flex flex-col md:flex-row">
                <div className="right md:w-1/2 flex flex-col justify-center ">
                    <div className=" flex flex-col gap-0">
                        <div className="flex justify-center">
                            <h2 className="font-thin text-5xl mr-20 uppercase">Frequently</h2>
                        </div>
                        <div className="flex justify-center items-center">
                            <h2 className="font-thin text-5xl ml-5 -mb-1 uppercase">Asked</h2>
                        </div>
                        <div className="flex justify-center">
                            <h2 className=" text-7xl">Questions</h2>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image src="/assets/img/logo.svg" alt="" width={420} height={420} />
                    </div>
                </div>
                <div className="left md:w-3/4 flex gap-8 md:gap-0 flex-row  justify-center">
                    <div className="w-full flex gap-8 justify-center items-center">
                        <div className="w-1/2">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Can AI reduce employee costs in my company?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes, implementing AI can automate repetitive tasks, optimising processes and increasing productivity. AI systems do not replace employees, but allow them to focus on more strategic tasks.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Do I need to invest in expensive equipment to use AI?</AccordionTrigger>
                                    <AccordionContent>
                                        No, with cloud-based GPU solutions you can use the latest AI models without the need to purchase expensive infrastructure. Scalable platforms enable flexible use of computing resources on demand.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>What AI technologies are used in the Neural Hub?</AccordionTrigger>
                                    <AccordionContent>
                                        Neural Hub integrates deep learning, natural language processing and computer vision, enabling companies to more easily deploy and scale AI solutions.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger>What is on-premise AI and what makes it different?</AccordionTrigger>
                                    <AccordionContent>
                                        On-premise AI is a solution installed locally, in the customer's infrastructure, which provides full control over data and processing. It is used in organisations that have to meet stringent security requirements, such as in the financial sector, public administration or healthcare.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-5">
                                    <AccordionTrigger>How does the AI multiagent work and what is it used for?</AccordionTrigger>
                                    <AccordionContent>
                                        Multiagent AI is a system of autonomous agents working together to solve problems. It is used in logistics, cyber security and energy, where dynamic decisions and process optimisation are required.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-6">
                                    <AccordionTrigger>Can virtual voice assistants improve customer service?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes, IVR systems with AI allow you to automatically answer customers' questions, schedule appointments and provide information without involving employees. This is particularly useful in the medical and service industries.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                        </div>
                        <div className="w-1/2">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-7">
                                    <AccordionTrigger>What industries can benefit from the AI solutions available from Q-AI?</AccordionTrigger>
                                    <AccordionContent>
                                        AI is used in medicine, finance, education, logistics, public administration and many other sectors where process optimisation and data analysis are crucial.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-8">
                                    <AccordionTrigger>Can AI improve the quality of medical care?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes, AI in medicine aids diagnosis by analysing image data and detecting conditions faster and with greater accuracy. Systems such as Scan.AI of specific parts of the body can support doctors in making more accurate decisions.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-9">
                                    <AccordionTrigger>How can AI help automate business processes?</AccordionTrigger>
                                    <AccordionContent>
                                        Systemy AI analizują dane, przewidują trendy i automatyzują zadania w różnych branżach – od logistyki po marketing. Automatyzacja redukuje błędy, zwiększa efektywność i pozwala firmom szybciej reagować na zmiany rynkowe.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-10">
                                    <AccordionTrigger>Can an AI multiagent improve logistics in my company?</AccordionTrigger>
                                    <AccordionContent>
                                        Tak, multiagent AI analizuje dane w czasie rzeczywistym, optymalizuje trasy dostaw, zarządza zapasami i przewiduje opóźnienia. Dzięki temu można zminimalizować koszty i zwiększyć efektywność operacyjną.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-11">
                                    <AccordionTrigger>Can AI improve the efficiency of data management systems in the private and public sectors?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes, AI supports data analytics, automates reporting and helps meet regulatory requirements. On-premise solutions provide additional data protection.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-12">
                                    <AccordionTrigger>Can AI support an organisation's physical security?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes, AI helps to monitor access, analyse camera footage and detect anomalies in people's behaviour on company premises, making security more effective.
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