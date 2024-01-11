import * as React from "react"
import { useState } from "react";
import { useInView } from "react-intersection-observer"
import { Accordion } from "flowbite-react"
import { RiPieChartFill, RiTimeLine, RiPieChart2Line, RiFileList3Line, RiMoneyDollarCircleLine } from "react-icons/ri";

const Faqs = () => {
    const { ref, inView } = useInView({
        threshold: .1,
        triggerOnce: true
    })

    const [activeTab, setActiveTab] = useState(0)

    const faqs = [
        {id: 0, point: "How long do I have to file a lawsuit?", description: "Each type of claim has a specific 'statute of limitations' or deadline to file a lawsuit. Typically, this deadline is between 2 and 3 years from the date of the injury, though certain facts may extend that deadline. It is important that you meet this deadline because, if you fail to do so, your claim could be 'barred'. If you have any questions about Colorado's statute of limitations for your specific case, please give us a call. We are always happy to discuss any questions, issues, or concerns you may have regarding your claim and the claim process."},


        {id: 1, point: "Do I need a Denver lawyer?", description: "It’s seldom a good idea to handle your case on your own. If you do, the other party’s lawyer or insurance company are much more likely to take advantage of you and not give you anywhere near the amount of money that you deserve. If you suffered any kind of injury or wrong, your own lawyer can be invaluable in seeking the compensation you deserve. Your lawyer will be experienced with similar cases and will be able to build up your case in a way that maximizes your claim and recovery."},

        {id: 2, point: "How long will my case take?", description: "It is difficult to answer this question precisely. Some cases settle relatively quickly in a matter of months, others that are highly contested could take a year or more to resolve. Typically, a good rule of thumb is to expect to be involved in this process for at least six months to a year. Regardless, throughout the process, you can rest assured that we will be in your corner fighting on your behalf and we will keep you adequately informed as to all happenings in your case."},
    ]

    const fees = [
        {id:0, name: "Contingency", description: "Details can vary, but essentially, in this arrangement the client pays the law firm an attorney fee only if the firm recovers a settlement or judgment for the client. The fee is usually a percentage of the recovery. If we lose the case, the client does not pay us a fee and is usually responsible only for litigation costs, such as copying costs or expert fees. Under this type of arrangement, we and our clients share both the risk and the reward." },

        {id:1, name: "Hybrid Fees", description: "While there are various types of hybrid fee agreements, the most common is one in which we agree to accept a lower hourly rate than normal, but also take a percentage of any recovery if we are successful. In other words, part of our payment is contingent on success and part isn’t." },

        {id:2, name: "Fixed Fee", description: "A fixed fee agreement is one in which the client pays a fixed fee for the legal representation, regardless of the time required. The client often is required to pay litigation costs in addition to the fixed fee." },
        
        {id:3, name: "Flat Fee", description: "A flat fee agreement is one in which the client pays a monthly flat fee for legal representation regardless of the time the law firm puts into the case during the month. Flat fee arrangements allow the client to manage costs and budget for a consistent fee. They can work well in a major case in which a team of attorneys and paralegals will spend substantial time on the case each month, or where there are a series of similar major cases. Again, the client usually is required to pay litigation costs along the way." },

        {id:4, name: "Hourly", description: "Some of our clients hire us on an hourly basis, in which we charge by the hour for legal services. We require a retainer, and the monthly fees invoiced to the client are either charged against retainer funds deposited in our trust account or paid directly by the client." },
    ]

    return (
        <section id="faqs" ref={ref}>
            <div className={`container my-16 lg:my-24 text-center animated animatedFadeInUp ${inView ? 'fadeInUp' : null}`}>
                <h2 className="text-center text-3xl font-medium mb-2">Faqs</h2>
                <div className="w-10 mx-auto border-b-4 border-primary mb-8"></div>
                    <Accordion collapseAll>

                            {faqs.map((faq, index) => {
                                return (
                                    <Accordion.Panel key={index}>
                                        <Accordion.Title className="text-xl md:text-2xl px-2 py-4 text-gray-900">{faq.point}</Accordion.Title>
                                        <Accordion.Content>
                                            <p className="text-gray-900 text-xl text-justify hyphens-auto mx-auto py-4">{faq.description}</p>
                                        </Accordion.Content>
                                    </Accordion.Panel>
                                )
                            })}
                            <Accordion.Panel key={4}>
                                <Accordion.Title className="text-xl md:text-2xl px-2 py-4 text-gray-900">How is your law firm paid?</Accordion.Title>
                                <Accordion.Content>
                                    <p className="text-gray-900 text-xl text-justify hyphens-auto mx-auto py-4">
                                        At Hollington Law Firm, we represent the majority of our clients on a contigency fee basis, meaning that our clients only pay us a fee upon receiving a successful settlement or judgment. Having said that, the firm does take on certain types of cases, where a contigency fee arrangement may not make sense. For those cases, alternative fee arrangements offer distinct benefits to the client that traditional hourly billing does not. These agreements compliment our firm's philosophy to never template or commoditize our legal services. Instead, like our approach to the practice of law, we tailor each of our fee agreements to the client's unique legal needs. Doing so ties our compensation to our success and the value we add to the client, which we believe allocates risk and reward more fairly. 
                                    </p>
                                    <p className="text-gray-900 text-xl text-justify hyphens-auto mx-auto py-4"> 
                                        No matter what fee agreement we do have, you will never be surprised as to how we are compensated for our services. Before any formal agreement is reached, we will take all the time you need to ensure that you are both informed and comfortable as to how our fees will be earned. Following are forms of billing that we regularly utilize for our clients:
                                    </p>
                                    
                                    <div className="max-w-5xl mx-auto my-8">
                                        <ul className="flex flex-row justify-between flex-nowrap overflow-x-scroll gap-20 py-8 mx-4 ">
                                            <button className={activeTab === 0 ? "flex flex-col gap-1 items-center border-b-4 border-b-primary" : "flex flex-col gap-1 items-center"}onClick={() => setActiveTab(0)}>
                                                <RiPieChartFill size={56} className={"text-primary"}/>
                                                <li className="text-lg font-semibold">Contingency</li>
                                            </button>
                                            <button className={activeTab === 1 ? "flex flex-col gap-1 items-center border-b-4 border-b-primary" : "flex flex-col gap-1 items-center"} onClick={() => setActiveTab(1)}>
                                                <RiPieChart2Line   size={56} className={"text-primary"}/>
                                                <li className="text-lg font-semibold">Hybrid</li>
                                            </button>
                                            <button className={activeTab === 2 ? "flex flex-col gap-1 items-center border-b-4 border-b-primary" : "flex flex-col gap-1 items-center"} onClick={() => setActiveTab(2)}>
                                                <RiFileList3Line size={56} className={"text-primary"}/>
                                                <li className="text-lg font-semibold">Fixed Fee</li>
                                            </button>
                                            <button className={activeTab === 3 ? "flex flex-col gap-1 items-center border-b-4 border-b-primary" : "flex flex-col gap-1 items-center"} onClick={() => setActiveTab(3)}>
                                                <RiMoneyDollarCircleLine size={56} className={"text-primary"}/>
                                                <li className="text-lg font-semibold">Flat Fee</li>
                                            </button>
                                            <button className={activeTab === 4 ? "flex flex-col gap-1 items-center border-b-4 border-b-primary" : "flex flex-col gap-1 items-center"} onClick={() => setActiveTab(4)}>
                                                <RiTimeLine size={56} className={"text-primary"}/>
                                                <li className="text-lg font-semibold">Hourly</li>
                                            </button>
                                        </ul>
                                    </div>
                                    <p className="text-gray-900 text-xl text-justify hyphens-auto mx-auto py-4 my-2">{fees[activeTab].description}</p>
                                </Accordion.Content>
                            </Accordion.Panel>
                    </Accordion>
            </div>
        </section>
    )
}

export default Faqs