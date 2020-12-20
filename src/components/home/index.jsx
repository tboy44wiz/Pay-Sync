import React from "react";
import Layout from "../layout/layout";
import "./home.css";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Playstoreimg from "../../assets/Google-Play.svg";
import Apple from "../../assets/Apple-Store.svg";
import recycleRight from "../../assets/recycle.svg";
import recycleLeft from "../../assets/recycle.png";
import crackers from "../../assets/crackers.svg";
import previousIcon from "../../assets/PreviousIcon.svg";
import nextIcon from "../../assets/NextIcon.svg";
import userImg from "../../assets/userImage.svg";
import EmployeeBudget from "../../assets/Group 22303.png";
import InAppFinancial from "../../assets/Transactions.png";
import FinancialTraining from "../../assets/Training.svg";
import FreeDebit from "../../assets/Training.svg";
import ZeroIntegration from "../../assets/Training.svg";
export default function Index(props) {
  return (
    <React.Fragment>
      <Layout background={false}>
        <div className="home-page-wrap">
          <div className="pay-sync-hero-text-wrap">
            <h1>
              Powerful, Simple <br />
              Banking
            </h1>
            <h4>
              PaySync gives employers the ability to offer their employees
              <br />
              access to their wages as they have earned them.
            </h4>
          </div>
        </div>

        <div style={{ backgroundColor: "white", width: "100%" }}>
          <div className="body-gen-padding-home">
            <div className="about-app-home-page">
              <div className="download-app-home">
                <div className="avalable-home">
                  <p>Available on</p>
                </div>
                <div className="download-store-home">
                  <img src={Playstoreimg} alt="" className="google-play__logo" />
                  <img src={Apple} alt=""  className="apple-store__logo"/>
                </div>
              </div>
              <div className="trustedby-sec-home">
                <h1>
                  Trusted By Employers that care <br />
                  for their employees.
                </h1>
                <div className="trusted-by-images-home">
                  <img src="./paystack.svg" alt="" />
                  <img src="./fluterwave.svg" alt="" />
                  <img src="./moneso.svg" alt="" />
                  <img src="./moneyfy.svg" alt="" />
                  <img src="./rubbies.svg" alt="" />
                </div>
                <div className="hr-home-center">
                  <div className="hr-home-sm"></div>
                </div>

                <div className="paySync-solution-home">
                  <h1>What pain do we solve for you?</h1>
                  <p>
                    We make your life easy by reducing and eliminating the
                    friction of you granting employees loans by allowing workers
                    to access their own money instead of relying on
                    high-interest loans, workers live financially healthy lives
                    by eliminating them the hassle and stress to sought out
                    their financial issues at workplace. Ultimately, we are
                    focusing on improving your happiness and productivity
                    through the most reputable financial platform in Africa.
                  </p>
                </div>

                <div className="what-we-do-home">
                  <div className="accordion-section-home">
                    <Accordion allowZeroExpanded>
                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            <span className="accordion__dropdown">
                              Employee access to already earned wages <br />
                            <span style={{ marginLeft: "25px" }}>and payment solutions</span>
                            </span>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          We make your life easy by reducing and eliminating the
                          friction of you granting employees loans by allowing
                          workers to access their own money instead of relying
                          on high-interest loans.
                        </AccordionItemPanel>
                      </AccordionItem>

                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            <span className="accordion__dropdown">
                              Financially Healthy Life
                            </span>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          We make your life easy by reducing and eliminating the
                          friction of you granting employees loans by allowing
                          workers to access their own money instead of relying
                          on high-interest loans.
                        </AccordionItemPanel>
                      </AccordionItem>

                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            <span className="accordion__dropdown">
                              Increased Productivity
                            </span>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          We make your life easy by reducing and eliminating the
                          friction of you granting employees loans by allowing
                          workers to access their own money instead of relying
                          on high-interest loans.
                        </AccordionItemPanel>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <div className="what-we-do-img">
                    <img src="./phone.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="our-service-home">
            <div className="service-padding-home">
              <h1 className="service-header-home">
                Our Additional Value-Added Services
              </h1>

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
              </div>

              <div className="serve-list-home">
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


          <div className="subscription-news-home">
            <div className="subscription-padding-home">
              <h1 className="subscription-header-home">
                Financial inclusion in African market has been <b>out of reach</b> for decades,
                but we have found the <b>solution</b>.
                <img src={crackers} alt="" />
              </h1>
              <h1 className="subscribe-label">Get Started</h1>

              <div className="subscribe-wrapper-home">
                <img src={recycleLeft} alt="" className="arrow-recycle-left" />
                <div className="subscribe-now-home">
                  <input type="email" name="email" placeholder="Your email address" />
                  <button>Let's go</button>
                </div>
                <img src={recycleRight} alt="" className="arrow-recycle-right" />
              </div>

            </div>
          </div>


          <div className="testimonials-home">
            <div className="testimonials-padding-home">
              <small>Testimonials</small>
              <h1 className="testimonials-header-home">
                Loved by our users.
              </h1>
              <div className="testimonial-middle">
                <img src={previousIcon} alt="" className="previous-testimony" />
                <div className="testimonial-message-box">
                  <p>
                    “It is comforting to know that if for some reason during the month you are in urgent need of cash
                    that you have Floatpays as a back up, and the best of all it is money that you have already earned
                    during the month and no percentage fees to worry about.”
                  </p>
                  <div className="user-name-testimony">
                    <img src={userImg} alt="" />
                    <div className="user-img-testimony">Diana Pierce</div>
                    <div className="user-designation-testimony">CEO, Brick Consulting</div>
                  </div>
                </div>
                <img src={nextIcon} alt="" className="next-testimony" />
              </div>

            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
}
