import * as React from "react"
import { useInView } from "react-intersection-observer"
import { Accordion } from "flowbite-react"

const Faqs = () => {
    const { ref, inView } = useInView({
        threshold: .1,
        triggerOnce: true
    })

    const faqs = [
        {id: 0, point: "Should I call the police at the scene of a personal injury?", description: "Yes, you should call the police if someone, including yourself, has been injured. It’s always better to be safe than sorry, and wouldn’t you rather find out that you didn’t need to call the police than wish you had. Although police reports cannot be used in court as evidence, they are invaluable pieces of evidence in the insurance claims process. Insurance adjusters look to these reports to assign fault, and without one, the process will likely take much longer and be more difficult."},

        {id: 1, point: "What do I do when the insurance company calls?", description: "First of all, let’s make this clear: you are not required to speak with the other party’s insurance company. If they say that you are, they’re lying and you should hang up immediately. Of course, you must contact your own insurance company after being in an accident, but that’s another story. If you feel like you must, say as little as possible while still being polite. Remember that anything you say could be used against you in your claim, which means your case could be compromised and you won’t receive compensation. You should avoid saying things like, “I’m fine,” “It wasn’t that serious,” or “My injuries aren’t that bad” when speaking with the other party’s insurance. You should only answer the question being asked and never volunteer information, and never agree to have your statement recorded. If you already have a lawyer when the other party’s insurance calls you, tell them to speak with your lawyer. If you don’t, tell them you’ll call them back when you have a lawyer present, and then hire one as soon as possible."},

        {id: 2, point: "How long do I have to file a lawsuit?", description: "Each type of claim has a specific 'statute of limitations' or deadline to file a lawsuit. Typically, this deadline is between 2 and 3 years from the date of the injury, though certain facts may extend that deadline. It is important that you meet this deadline because, if you fail do so say, your claim could be 'barred'. If you have any questions about Colorado's statute of limitations for your specific case, please give us a call. We are always happy to discuss any questions, issues, or concerns you may have regarding your claim and the claim process."},


        {id: 3, point: "Do I need a Denver lawyer?", description: "It’s seldom a good idea to handle your personal injury case on your own. If you do, the other party’s lawyer and insurance company are much more likely to take advantage of you and not give you anywhere near the amount of money that you need. If you suffered any kind of severe injury, a Denver personal injury lawyer can be invaluable in seeking the compensation you deserve. Your lawyer will be experienced with similar injuries and will speak with your doctors and medical team to get an idea of how much your prognosis will cost in the future. Plus, they’ll make you lose out on lots of money that you may not yet even know you’ll need. A personal injury lawyer can also collect evidence and discover who caused the accident. After all, they are expert investigators. Of course, a Denver personal injury lawyer will also prevent the other party’s insurance company from compromising your case. Insurance companies are sneaky, and if you answer their call without an attorney present, they may ask you questions or get you to make a statement that could put the blame on you."},

        {id: 4, point: "How long will my case take?", description: "It is difficult to answer this question precisely. Some cases settle relatively quickly in a matter of months, others that are highly contested could take a year or more to resolve. Typically, a good rule of thumb is to expect to be involved in this process for at least six months to a year. Regardless, throughout the process, you can rest assured that we will be in your corner fighting on your behalf and we will keep you adequately informed as to all happenings in your case."},

        {id: 5, point: "How are you paid?", description: "The majority of our cases are taken on a contingency fee basis, meaning that we are paid out of the ultimate settlement or judgment in your case. The benefit for you is that we are only paid if we prevail in your action. Depending on the nature of your case with us, a pure contingency fee basis may not make sense. For these types of matters, we can alternate fee agreements. No matter what fee agreement we do have, you will never be suprised as to how we are compensated for our services. Before any formal agreement is reached, we will take all the time you need to ensure that you are both informed and comfortable as to how our fees will be earned."},
    ]

    return (
        <section id="faqs" ref={ref}>
            <div className={`container my-16 lg:my-24 text-center animated animatedFadeInUp ${inView ? 'fadeInUp' : null}`}>
                <h2 className="text-center text-3xl font-medium mb-2">Faqs</h2>
                <div className="w-10 mx-auto border-b-4 border-primary mb-8"></div>
                <div className="">
                    <Accordion collapseAll>

                            {faqs.map((faq, index) => {
                                return (
                                    <Accordion.Panel key={index}>
                                        <Accordion.Title className="text-lg sm:text-xl font-semibold px-2 py-4 text-gray-900">{faq.point}</Accordion.Title>
                                        <Accordion.Content>
                                            <p className="text-gray-900 text-xl text-justify hyphens-auto mx-auto py-4">{faq.description}</p>
                                        </Accordion.Content>
                                    </Accordion.Panel>
                                )
                            })}

                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default Faqs