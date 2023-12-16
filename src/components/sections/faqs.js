import * as React from "react"
import { useInView } from "react-intersection-observer"
import { Accordion } from "flowbite-react"

const Faqs = () => {
    const { ref, inView } = useInView({
        threshold: .1,
        triggerOnce: true
    })

    const faqs = [
        {id: 0, point: "How long do I have to file a lawsuit?", description: "Each type of claim has a specific 'statute of limitations' or deadline to file a lawsuit. Typically, this deadline is between 2 and 3 years from the date of the injury, though certain facts may extend that deadline. It is important that you meet this deadline because, if you fail do so say, your claim could be 'barred'. If you have any questions about Colorado's statute of limitations for your specific case, please give us a call. We are always happy to discuss any questions, issues, or concerns you may have regarding your claim and the claim process."},


        {id: 1, point: "Do I need a Denver lawyer?", description: "It’s seldom a good idea to handle your case on your own. If you do, the other party’s lawyer or insurance company are much more likely to take advantage of you and not give you anywhere near the amount of money that you deserve. If you suffered any kind of injury or wrong, your own lawyer can be invaluable in seeking the compensation you deserve. Your lawyer will be experienced with similar cases and will be able to build up your case in a way that maximizes your claim and recovery."},

        {id: 2, point: "How long will my case take?", description: "It is difficult to answer this question precisely. Some cases settle relatively quickly in a matter of months, others that are highly contested could take a year or more to resolve. Typically, a good rule of thumb is to expect to be involved in this process for at least six months to a year. Regardless, throughout the process, you can rest assured that we will be in your corner fighting on your behalf and we will keep you adequately informed as to all happenings in your case."},

        {id: 3, point: "How is your law firm paid?", description: "The majority of our cases are taken on a contingency fee basis, meaning that we are paid out of the ultimate settlement or judgment in your case. The benefit for you is that we are only paid if we prevail in your action. Depending on the nature of your case, a pure contingency fee basis may not make sense. For these types of matters, we can enter into alternative fee agreements. No matter what fee agreement we do have, you will never be suprised as to how we are compensated for our services. Before any formal agreement is reached, we will take all the time you need to ensure that you are both informed and comfortable as to how our fees will be earned."},
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

                    </Accordion>
            </div>
        </section>
    )
}

export default Faqs