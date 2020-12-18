import React from 'react'
import Layout from '../layout/layout';
import arrow_next from '../../assets/next-arrow-tag.svg';
import googlePlay from '../../assets/Google-Play.svg';
import appleStore from '../../assets/Apple-Store.svg';
import phone from '../../assets/Phone-Sliding.svg';
import employeeBudget from '../../assets/Employee-budget-icon.svg';
import greet from '../../assets/Greeting.svg';
import iconCross from '../../assets/Icon metro-cross.svg';
import iconBar from '../../assets/icon-bar.svg';

const index = () => {
    return (
        <>
            <Layout>
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
                    <div className="access-benefit-top">
                        <h4>Benefit of Access</h4>
                        <div className="benefit-items">
                            <div className="benefit-single-item">
                                <img src={employeeBudget} alt="" />
                                <div>Employee budget & planning tool</div>
                                <small>Lorem ipsum dolor ipsum nisi</small>
                            </div>
                            <div className="benefit-single-item">
                                <img src={employeeBudget} alt="" />
                                <div>Employee budget & planning tool</div>
                                <small>Lorem ipsum dolor ipsum nisi</small>
                            </div>
                            <div className="benefit-single-item">
                                <img src={employeeBudget} alt="" />
                                <div>Employee budget & planning tool</div>
                                <small>Lorem ipsum dolor ipsum nisi</small>
                            </div>
                            <div className="benefit-single-item">
                                <img src={employeeBudget} alt="" />
                                <div>Employee budget & planning tool</div>
                                <small>Lorem ipsum dolor ipsum nisi</small>
                            </div>
                            <div className="benefit-single-item">
                                <img src={employeeBudget} alt="" />
                                <div>Employee budget & planning tool</div>
                                <small>Lorem ipsum dolor ipsum nisi</small>
                            </div>
                            <div className="benefit-single-item">
                                <img src={employeeBudget} alt="" />
                                <div>Employee budget & planning tool</div>
                                <small>Lorem ipsum dolor ipsum nisi</small>
                            </div>
                        </div>
                    </div>
                    <div className="access-benefit-down">
                        <h4>Benefit of Access</h4>
                        <div className="benefit-items-text">
                            <ul>
                                <li>
                                    <h6>Financial Management</h6>
                                    <p>While umemployment is a major crisis in Africa, a learge percentage earn barely enough to sustain theeach each monthly payment
                                    cycle. In case of emergencies, many workers turn to private money lenders or pay day that often escalate the problem.
                                    Providing with low-cost way to resolve their financial emergencies quickly, can maintain financial stability. PaySync Solutions
                                    is a game changerin the african market it will provide Platform for workers to maintain financial Wellness in the immediate period and longer term
                                    </p>
                                </li>
                                <li>
                                    <h6>Increase productivity</h6>
                                    <p>Availing a medium that can help workers resolve monetary issues quickly, will no doubt increase productivity. PaySync Solutions guarantee workers aase
                                        access to financial services. As a result workers have more time to focus on completing organizational goals</p>
                                </li>
                                <li>
                                    <h6>Physical well-being</h6>
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
                <div className="access-page-body">
                    <div className="faqs-section">
                        <h5>FAQs</h5>
                        <ul>
                            <li>
                                <div>
                                    <div>
                                        <h6>Is this a loan?</h6>
                                        <p>It's not a loan, no interest is charged. Tou have access to the wages you have earned, but not yet been paid</p>
                                    </div>
                                    <span>
                                        <img src={iconBar} alt="" />
                                    </span>
                                </div>
                                <div className="horizontal-line"></div>
                            </li>
                            <li>
                                <div>
                                    <div>
                                        <h6>Do I need the PaySync card?</h6>
                                    </div>
                                    <span>
                                        <img src={iconCross} alt="" />
                                    </span>
                                </div>
                                <div className="horizontal-line"></div>
                            </li>
                            <li>
                                <div>
                                    <div>
                                        <h6>How do I pay back the money?</h6>
                                    </div>
                                    <span>
                                        <img src={iconCross} alt="" />
                                    </span>
                                </div>
                                <div className="horizontal-line"></div>
                            </li>
                            <li>
                                <div>
                                    <div>
                                        <h6>Does my employer offer PaySync?</h6>
                                    </div>
                                    <span>
                                        <img src={iconCross} alt="" />
                                    </span>
                                </div>
                                <div className="horizontal-line"></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default index
