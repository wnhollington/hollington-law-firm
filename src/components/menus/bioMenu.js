import * as React from "react"
import { Tabs } from 'flowbite-react';

const BioMenu = () => {
    return (
        <div className="mx-4 w-full h-36 md:h-full md:w-2/3">
            <Tabs.Group
                aria-label="Default tabs"
                style="default"
            >
                <Tabs.Item
                active
                title="Education"
                >
                    <ul>
                        <li>University of Colorado - Boulder</li>
                        <li>University of Georgia School of Law</li>
                    </ul>
                </Tabs.Item>

                <Tabs.Item
                title="Publications"
                >
                    <ul>
                        <li>William Neal Hollington, Legal and Policy Justifications for Refusing to Grant China Market Economy Status in 2016, 46 GA. J. INT’L & COMP. L. 1 (2018).</li>
                    </ul>
                </Tabs.Item>

                <Tabs.Item
                title="Recognitions"
                >
                    <ul>
                        <li>Best Lawyers&#8482;: Ones to Watch, Construction Law</li>
                        <li>Best Lawyers&#8482;: Ones to Watch, Commercial Litigation</li>
                    </ul>
                </Tabs.Item>

            </Tabs.Group>
        </div>
        )
}

export default BioMenu