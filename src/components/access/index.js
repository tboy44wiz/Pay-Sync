import React from 'react'

//  Importing "_getStarted.css"
import './_getStarted.css';


import Layout from '../layout/layout';
import arrow_next from '../../assets/next-arrow-tag.svg';
import googlePlay from '../../assets/Google-Play.svg';
import appleStore from '../../assets/Apple-Store.svg';
import phone from '../../assets/Phone-Sliding.png';
import greet from '../../assets/Greeting.svg';
import iconCross from '../../assets/Icon metro-cross.svg';
import iconBar from '../../assets/icon-bar.svg';
import EmployeeBudget from "../../assets/Group 22303.png";
import InAppFinancial from "../../assets/Transactions.png";
import FreeDebit from "../../assets/Training.svg";
import ZeroIntegration from "../../assets/Training.svg";
import FinancialTraining from "../../assets/Training.svg";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";

const index = () => {
    return (
        <>
            <Layout>
                <div className="access-top-tab__wrapper">
                    <div className="access-top-tab">
                        <div className="access-tab-item">
                            Existing User? Sign In
                            <img src={arrow_next} alt="" />
                        </div>
                        <div className="access-tab-item">
                            Need to Enroll? Sign Up
                            <img src={arrow_next} alt="" />
                        </div>
                        <div className="access-tab-item">
                            Contact Support
                            <img src={arrow_next} alt="" />
                        </div>
                    </div>
                </div>

                <div className="access-page-body">
                    <div className="access-top">
                        <div className="get-access">
                            <h4>Get Access</h4>
                            <p>Access what you need, when you want, with the money you've already earned</p>
                            <small>*Your employer needs to offer the Paysync Benefit</small>
                            <div className="appstore-logo-container">
                                <img src={googlePlay} alt="" className="google-play-logo" />
                                <img src={appleStore} alt="" className="app-store-logo" />
                            </div>
                        </div>
                        <div className="access-top-phone">
                            <img src={phone} alt="" />
                        </div>
                    </div>

                    <div className="benefit-of-access">
                        <div className="benefit-of-access-inner__wrapper">
                            <h1 className="benefit-of-access__header">Benefit of Access</h1>
                            <div className="serve-list-home">
                                <div>
                                    <div className="service-home-list-img-wrap">
                                        <img src={EmployeeBudget} alt=""/>
                                    </div>
                                    <h3>
                                        Employee budget & <br />
                                        planning tool
                                    </h3>
                                    <p>Lorem ipso dolor ipsum nisi</p>
                                </div>

                                <div>
                                    <div className="service-home-list-img-wrap">
                                        <img src={InAppFinancial} alt=""/>
                                    </div>
                                    <h3>
                                        In-App Financial <br />
                                        Transactions
                                    </h3>
                                    <p>Lorem ipso dolor ipsum nisi</p>
                                </div>

                                <div>
                                    <div className="service-home-list-img-wrap">
                                        <img src={FreeDebit} alt=""/>
                                    </div>
                                    <h3>Free Debit Card</h3>
                                    <p>Lorem ipso dolor ipsum nisi</p>
                                </div>

                                <div>
                                    <div className="service-home-list-img-wrap">
                                        <img src={ZeroIntegration} alt=""/>
                                    </div>
                                    <h3>Zero Integration Cost</h3>
                                    <p>Lorem ipso dolor ipsum nisi</p>
                                </div>

                                <div>
                                    <div className="service-home-list-img-wrap">
                                        <img src={FinancialTraining} alt=""/>
                                    </div>
                                    <h3>Financial Training</h3>
                                    <p>Lorem ipso dolor ipsum nisi</p>
                                </div>

                                <div>
                                    <div className="service-home-list-img-wrap">
                                        <img src={EmployeeBudget} alt=""/>
                                    </div>
                                    <h3>24 hours user support</h3>
                                    <p>Lorem ipso dolor ipsum nisi</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="access-benefit-down">
                        <h4 className="benefit-of-access__header">Benefit of Access</h4>
                        <div className="benefit-items-text">
                            <ul>
                                <li>
                                    <h6 className="benefit-of-access__sub-header">Financial Management</h6>
                                    <p>While umemployment is a major crisis in Africa, a learge percentage earn barely enough to sustain theeach each monthly payment
                                    cycle. In case of emergencies, many workers turn to private money lenders or pay day that often escalate the problem.
                                    Providing with low-cost way to resolve their financial emergencies quickly, can maintain financial stability. PaySync Solutions
                                    is a game changerin the african market it will provide Platform for workers to maintain financial Wellness in the immediate period and longer term
                                    </p>
                                </li>
                                <li>
                                    <h6 className="benefit-of-access__sub-header">Increase productivity</h6>
                                    <p>Availing a medium that can help workers resolve monetary issues quickly, will no doubt increase productivity. PaySync Solutions guarantee workers aase
                                        access to financial services. As a result workers have more time to focus on completing organizational goals</p>
                                </li>
                                <li>
                                    <h6 className="benefit-of-access__sub-header">Physical well-being</h6>
                                    <p>Financial strens is a common problem at workplaces, Stress is also known ta cause severe health problems Bynelping9 combat financial
                                    worry and stress, emplovers can nelp their workers maintain healthy work. Employees on the other hand will experience a better mental
                                        well-eang and significant reduced stress-related illnesses</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="how-it-works">
                    <h5>How it works</h5>
                    <img src={greet} alt="" />
                </div>

                <div className="faqs-section">
                    <h1 className="faqs-section__header">FAQs</h1>

                    <Accordion allowZeroExpanded>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <span className="accordion__dropdown">
                                        Is this a loan?
                                        <img src={iconBar} alt="" />
                                    </span>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                It's not a loan, no interest is charged. Tou have access to the wages you
                                have earned, but not yet been paid
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                        <span className="accordion__dropdown">
                                            Do I need the PaySync card?
                                            <img src={iconCross} alt="" />
                                        </span>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                It's not a loan, no interest is charged. Tou have access to the wages you
                                have earned, but not yet been paid
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                        <span className="accordion__dropdown">
                                            How do I pay back the money?
                                            <img src={iconCross} alt="" />
                                        </span>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                It's not a loan, no interest is charged. Tou have access to the wages you
                                have earned, but not yet been paid
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                        <span className="accordion__dropdown">
                                            Does my employer offer PaySync?
                                            <img src={iconCross} alt="" />
                                        </span>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                It's not a loan, no interest is charged. Tou have access to the wages you
                                have earned, but not yet been paid
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
            </Layout>
        </>
    )
}

export default index
