"use client";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Image from "next/image";

export default function ExperiencePage() {
    return (
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation />
            <div className="px-6 pt-16 pb-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        About
                    </h2>
                    <p className="mt-4 text-zinc-400">
                        Learn more about me
                    </p>
                </div>

                <div className="grid gap-12 mx-auto grid-cols-3">
                    <div className="flex flex-col col-span-1 gap-8">
                        my photo

                        <Card>
                            <div className="p-4 bg-zinc-100 flex flex-col items-center justify-center">
                                <Image
                                    src="/images/Linux_Foundation_logo.png"
                                    width={100}
                                    height={500}
                                    alt="The Linux Foundation Logo"
                                />

                                <h5 className="mt-4 text-md font-medium">
                                    Developing Secure Software (LFD121)
                                </h5>
                                <span className="text-xs font-display">
                                    Certificate ID: LF0kjzrw1kf3
                                </span>
                            </div>
                        </Card>

                        <Card>
                            <div className="p-4">
                                <h2 className="z-20 text-md font-display text-zinc-200">
                                    My Technical Skills
                                </h2>

                                <p className="mt-2 text-zinc-400">
                                    <span className="duration-1000 hover:text-white">React (React native, NextJS, Preact, hooks, redux, styled components, Remix)</span>,&nbsp;
                                    <span className="duration-1000 hover:text-white">Angular (NgRx)</span>,&nbsp;
                                    <span className="duration-1000 hover:text-white">Vue</span>,&nbsp;
                                    <span className="duration-1000 hover:text-white">Javascript</span>,&nbsp;
                                    <span className="duration-1000 hover:text-white">TypeScript</span>,&nbsp;
                                    <span className="duration-1000 hover:text-white">GraphQL (Apollo)</span>,&nbsp;
                                    <span className="duration-1000 hover:text-white">Webpack</span>,&nbsp;
                                    <span className="duration-1000 hover:text-white">HTML (CSS, SASS, Tailwind)</span>
                                </p>

                                <p className="mt-4 text-zinc-400">
                                    <span className="duration-1000 hover:text-white">NodeJS (ExpressJs, NestJs, middleware, authentication, API standardization)</span>,&nbsp;
                                    <span className="duration-1000 hover:text-white">MongoDB (TypeORM, Mongoose)</span>,&nbsp;
                                    <span className="duration-1000 hover:text-white">PHP</span>,&nbsp;
                                    <span className="duration-1000 hover:text-white">Go</span>,&nbsp;
                                    <span className="duration-1000 hover:text-white">Java</span>,&nbsp;
                                    <span className="duration-1000 hover:text-white">Microservices</span>,&nbsp;
                                    <span className="duration-1000 hover:text-white">Redis</span>,&nbsp;
                                    <span className="duration-1000 hover:text-white">Python</span>,&nbsp;
                                    <span className="duration-1000 hover:text-white">MySQL</span>
                                </p>

                                <p className="mt-4 text-zinc-400">
                                    <span className="duration-1000 hover:text-white">AWS (EC2, Elastic Beanstalk, Lambda, S3, Cloudwatch, Cloudfront, Cloudformation, IAM)</span>,&nbsp;
                                    <span className="duration-1000 hover:text-white">Firebase</span>,&nbsp;
                                    <span className="duration-1000 hover:text-white">ELK</span>,&nbsp;
                                    <span className="duration-1000 hover:text-white">Jitsi</span>,&nbsp;
                                    <span className="duration-1000 hover:text-white">Google Cloud</span>
                                </p>

                                <p className="mt-4 text-zinc-400">
                                    <span className="duration-1000 hover:text-white">Websockets</span>,&nbsp;
                                    <span className="duration-1000 hover:text-white">REST API</span>,&nbsp;
                                    <span className="duration-1000 hover:text-white">Docker</span>,&nbsp;
                                    <span className="duration-1000 hover:text-white">Kubernetes</span>,&nbsp;
                                    <span className="duration-1000 hover:text-white">OOP</span>,&nbsp;
                                    <span className="duration-1000 hover:text-white">SOLID</span>,&nbsp;
                                    <span className="duration-1000 hover:text-white">TDD (Jest, Cypress, PHPUnit)</span>,&nbsp;
                                    <span className="duration-1000 hover:text-white">BDD</span>,&nbsp;
                                    <span className="duration-1000 hover:text-white">Git (CI/CD)</span>,&nbsp;
                                    <span className="duration-1000 hover:text-white">ELK</span>,&nbsp;
                                    <span className="duration-1000 hover:text-white">Blockchain (Solidity)</span>,&nbsp;
                                    <span className="duration-1000 hover:text-white">RabbitMQ</span>,&nbsp;
                                    <span className="duration-1000 hover:text-white">XMPP</span>,&nbsp;
                                    <span className="duration-1000 hover:text-white">Agile</span>
                                </p>
                            </div>
                        </Card>

                        <Card>
                            <div className="p-4">
                                <h2 className="z-20 text-md font-display text-zinc-200">
                                    My Soft Skills
                                </h2>

                                <p className="mt-2 text-zinc-400">
                                    <span className="duration-1000 hover:text-white">Documentation (Technical writing, reporting, requirement specifications)</span><br />
                                    <span className="duration-1000 hover:text-white">Team management (Teamwork, sprint planning)</span>
                                </p>
                            </div>
                        </Card>

                        <Card>
                            <div className="p-4">
                                <h2 className="z-20 text-md font-display text-zinc-200">
                                    I am interested in
                                </h2>

                                <p className="mt-2 text-zinc-400">
                                    <span className="duration-1000 hover:text-white">Javascript coding standards.</span><br />
                                    <span className="duration-1000 hover:text-white">Application architecture.</span><br />
                                    <span className="duration-1000 hover:text-white">Application performance.</span><br />
                                    <span className="duration-1000 hover:text-white">Microservice and event-driven architectures.</span>
                                </p>
                            </div>
                        </Card>
                    </div>

                    <div className="flex flex-col col-span-2 gap-8">
                        {/* <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-duration-1000 hover:text-white sm:text-4xl font-display"                        >
                            title
                        </h2> */}
                        <p className="leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                            I take responsibiilties in an agile, cross-functional team environment to deliver high-quality applications. My knowledge and experience of 5+ years are recognized for their positive organizational impact. Currently, I am pursuing an opportunity to utilize my technical and non-technical skills more effectively while contributing my best to the new team.
                        </p>

                        <div className="w-full h-px bg-zinc-800" />

                        <h4 className="font-bold tracking-tight text-zinc-100 text-2xl">
                            Work Experience
                        </h4>

                        <div>
                            <p className="text-xs text-zinc-400">
                                2021 April - present
                            </p>
                            <p className="text-xl font-medium tracking-tight text-zinc-100 mt-2">
                                Senior Fullstack Software Engineer <span className="text-lg font-light tracking-tight text-zinc-100">| Telzee.io</span>
                            </p>
                            <p className="mt-4 text-zinc-400">
                                I am responsible for exploring new technologies, designing application architecture, and leading cross-functional agile teams to deliver high-quality products.

                                <ul className="list-disc mt-4">
                                    <li>Asynchronous, reactive, and functional programming experience using Javascript and strong Typescript, working in the Javascript ecosystem for 5+ years with various tools and technologies.</li>
                                    <li>Designed and implemented fully scalable, secure and maintainable application architecture, handling 2000+ requests/min with scalability.</li>
                                    <li>Enhanced application performance using SSR, image optimization and code analysis.</li>
                                    <li>Improved API performance by 200% through code and database index improvements.</li>
                                    <li>Solid experience on optimally structuring general code and REST API while maintaining the code quality.</li>
                                    <li>Extensive understanding of the telemedicine application domain.</li>
                                    <li>Leading the team to obtain three compliances (HIPAA, Ontario Health and ISO 27001) for telemedicine products in Canada.</li>
                                    <li>Guiding the junior team as a mentor, constantly reviewing code, and promoting best conventions and practices.</li>
                                </ul>
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-zinc-400">
                                2018 January - 2021 April
                            </p>
                            <p className="text-xl font-medium tracking-tight text-zinc-100 mt-2">
                                Software Engineer <span className="text-lg font-light tracking-tight text-zinc-100">| OrangeHRM</span>
                            </p>
                            <p className="mt-4 text-zinc-400">
                                Delivered the OrangeHRM Advanced mobile application which went live over 10000 users. I oversaw the design, development and deployment phases of the product as the lead developer.

                                <ul className="list-disc mt-4">
                                    <li>Managed a team of 5 mobile application developers, conducting training programs and code reviews to ensure best practices, component reusability and TDD.</li>
                                </ul>
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-zinc-400">
                                2016 June - 2016 December
                            </p>
                            <p className="text-xl font-medium tracking-tight text-zinc-100 mt-2">
                                Software Engineering Intern <span className="text-lg font-light tracking-tight text-zinc-100">| OrangeHRM</span>
                            </p>
                            <p className="mt-4 text-zinc-400">
                                Fullstack development experience involving the feature revamp of the OrangeHRM performance module.

                                <ul className="list-disc mt-4">
                                    <li>Carried out research to incorporate UI testing with Selenium into the development process.</li>
                                </ul>
                            </p>
                        </div>

                        <div className="w-full h-px bg-zinc-800" />

                        <h4 className="font-bold tracking-tight text-zinc-100 text-2xl">
                            Education
                        </h4>

                        <div>
                            <p className="text-xs text-zinc-400">
                                2020 January - present
                            </p>
                            <p className="text-xl font-medium tracking-tight text-zinc-100 mt-2">
                                Master of Science in Computer Architecture <span className="text-lg font-light tracking-tight text-zinc-100">| University of Moratuwa, Sri Lanka</span>
                            </p>
                            <p className="mt-4 text-zinc-400">
                                Currently reading for a master’s degree specializing in software architecture concepts.
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-zinc-400">
                                2014 January - 2017 December
                            </p>
                            <p className="text-xl font-medium tracking-tight text-zinc-100 mt-2">
                                Bachelor of Science in Computer Science and Engineering <span className="text-lg font-light tracking-tight text-zinc-100">| University of Moratuwa, Sri Lanka</span>
                            </p>
                            <p className="mt-4 text-zinc-400">
                                Manipulation Detection in Stock Trading – Final year research project. A machine learning-aided model to detect anomalies in stock trading data featuring graphical analysis.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="hidden w-full h-px bg-zinc-800" />
            </div>
        </div>
    );
}
