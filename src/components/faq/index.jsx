import React from "react";
import Layout from "../layout/layout";

//  Importing "_faq.css"
import './_faq.css';

//  Importing Images
import MaleAvatar from '../../assets/male_avatar.png';
import FemaleAvatar from '../../assets/female_avatar.png';

export default function Index() {
  return (
    <div>
      <Layout style={{ background: "#F1F6F9" }}>
          <div className="about-main__wrapper">

              {/*==== About PaySync Section ====*/}
              <div className="about-section__wrapper">
                  <h1 className="section__header">Frequently Asked Questions</h1>
                  <p className="section__paragraph">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                      in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
              </div>

              {/*==== Our Mission ====*/}
              <div className="our-mission__wrapper">
                  <h1 className="section__header">Our Mission</h1>
                  <p className="section__paragraph">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                  </p>
              </div>

              {/*==== Our Values ====*/}
              <div className="our-values__wrapper">
                  <h1 className="section__header">Our Values</h1>
                  <ul className="our-values__list">
                      <li>
                          <span className="our-values__sub-header">We Value our Customers: </span> Lorem ipsum dolor sit amet,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua esse cillum dolore eu fugiat
                          nulla pariatur labore et dolore magna aliqua esse cillum dolore eu fugiat nulla pariatur nulla
                          pariatur labore et dolore magna aliqua esse cillum dolore eu fugiat nulla pariatur.
                      </li>
                      <li>
                          <span className="our-values__sub-header">We Value Innovation: </span> Lorem ipsum dolor sit amet,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua esse cillum dolore eu fugiat nulla pariatur.
                      </li>
                      <li>
                          <span className="our-values__sub-header">We Value Growth and Profitability: </span> Lorem ipsum dolor sit amet,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua esse cillum dolore eu fugiat nulla pariatur.
                      </li>
                  </ul>
              </div>

              {/*==== The Team ====*/}
              <div className="the-team__wrapper">
                  <h1 className="section__header">The Team</h1>

                  <div className="team-members__wrapper">
                      <div className="single-team-member__wrapper">
                          <img src={ MaleAvatar } className="team-member__avatar" alt="MaleAvatar"/>
                          <span>
                              <h5>John Hoyle</h5>
                              <small>CEO & Founder</small>
                          </span>
                      </div>
                      <div className="single-team-member__wrapper">
                          <img src={ FemaleAvatar } className="team-member__avatar" alt="MaleAvatar"/>
                          <span>
                              <h5>Emily Pirkie</h5>
                              <small>COO & Co-Founder</small>
                          </span>
                      </div>
                      <div className="single-team-member__wrapper">
                          <img src={ MaleAvatar } className="team-member__avatar" alt="MaleAvatar"/>
                          <span>
                              <h5>Liam Kelman</h5>
                              <small>Operations Manager</small>
                          </span>
                      </div>
                      <div className="single-team-member__wrapper">
                          <img src={ MaleAvatar } className="team-member__avatar" alt="MaleAvatar"/>
                          <span>
                              <h5>Daniel Bumham</h5>
                              <small>CTO & Co-Founder</small>
                          </span>
                      </div>
                      <div className="single-team-member__wrapper">
                          <img src={ MaleAvatar } className="team-member__avatar" alt="MaleAvatar"/>
                          <span>
                              <h5>Tom Price</h5>
                              <small>Project Manager</small>
                          </span>
                      </div>
                      <div className="single-team-member__wrapper">
                          <img src={ FemaleAvatar } className="team-member__avatar" alt="MaleAvatar"/>
                          <span>
                              <h5>Amber Bryce</h5>
                              <small>Social Media Manager</small>
                          </span>
                      </div>
                  </div>
              </div>
          </div>
      </Layout>
    </div>
  );
}
