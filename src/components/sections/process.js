import * as React from "react"
import { useInView } from "react-intersection-observer"
import { useState } from "react"

const Process = () => {
    const { ref, inView } = useInView({
        threshold: .1,
        triggerOnce: true
    })

    const [activeTab, setActiveTab] = useState(0)

    const timeline = [
        {id: 0, point: "Legal Consultation", description: "The process begins when you go in for your free consultation. You'll meet with a personal injury attorney who will go through the details of your case with you. They'll ask you questions about what happened, any treatment you've already received, and other important contexts. They'll make sure you fully understand the process and what to expect."},
        {id: 1, point: "Investigation", description: "After you retain us, our personal injury lawyers get to work right away. Your team includes an injury attorney and paralegal. Together they work to investigate your personal injury claim including police reports, medical records, witness statements and more. Our job is to make your life easier! During medical treatment, we also handle requesting medical bills and communicating with insurance companies."},
        {id: 2, point: "Strategize", description: "Every personal injury case is unique which means each strategy is also unique and highly customized. Sometimes we may file a personal injury lawsuit right away, other times we may wait until medical treatment concludes. In each situation, our team uses our cutting-edge technology, advanced resources and extensive experience to plan each and every step of a client’s case strategy."},
        {id: 3, point: "Demand", description: "Once the details of your case are sorted, your attorney will draft a demand letter to your insurance company. Demand letters usually include details like: (1) How and where the incident occured, (2) Damages you have incurred to date, and (3) a demand for monetary compensation. Your personal injury lawyer will then send the demand letter to the insurance company on your behalf. If you’re worried that insurance will just ignore the letter, don’t – insurers typically respond within 30 days."},
        {id: 4, point: "Negotiations", description: "If you’ve ever dealt with insurance before, you probably know what’s coming next – the insurance company will respond to your demand letter by either accepting or denying the claim. If accepted, they’ll usually “offer” a figure that is much lower than is needed. This is where your personal injury lawyer will step in and argue for full compensation on your behalf. When presented with findings of the investigation and evidence, insurance will likely accept your demand, but not always. "},
        {id: 5, point: "Suit and Trial", description: "If insurance continues to devalue your claim, your personal injury attorney will take the case to trial. We prepare every case for trial because it’s usually the best way to show the insurance company that we’re not messing around. We will stand up for you and argue in court for what you deserve."},
    ]

    return (
        <section id="process" ref={ref}>
            <div className={`container my-16 text-center animated animatedFadeInUp ${inView ? 'fadeInUp' : null}`}>
                <h2 className="text-center text-3xl font-medium mb-2">Personal Injury Process</h2>
                <div className="w-10 mx-auto border-b-4 border-primary mb-8"></div>
                <div className="flex flex-col md:flex-row gap-8 bg-herringbone shadow-lg p-8 rounded-lg">
                    {/* Tabs */}
                    <ul className="flex flex-col text-left md:w-2/4 xl:w-1/4 max-h-48 overflow-y-auto md:max-h-full md:pr-4 md:border-r-2 border-gray-100">
                        {timeline.map((event) => {
                            return (
                                <li className={activeTab === event.id ? "bg-primary  text-white text-sm sm:text-lg font-bold p-4 my-1 rounded-lg" : "hover:shadow-lg hover:bg-primary hover:text-white hover:rounded-lg text-sm sm:text-lg font-bold p-4 my-1"} key={event.id} onClick={() => setActiveTab(event.id)}>{`${event.id + 1}. ${event.point}`}</li>                    
                            )
                        })}
                    </ul>
                    {/* Content */}
                    <div className="md:w-2/4 xl:w-3/4 text-gray-900 text-md sm:text-xl text-justify">
                        {timeline[activeTab].description}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Process