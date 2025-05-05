import React from "react"
import FormHorizontalModule from "../componentes/FormHorizontal";
import { Helmet } from "react-helmet";
import { OffPageFAQs, OffPageKeyElements, OffPageProcessSteps, OffPageSEOBestPractices, OffPageWhyChooseUs1, OffPageWhyChooseUs2, QuickClicks4 } from "../data";
import Form1InRow from "../componentes/Form1InRow";
import SpecializedSEOIndustry from "../componentes/SpecializedSEOIndustry";
import ArrowComponent from "../componentes/ArrowComponent";
import Form2InRow from "../componentes/Form2InRow";
import FAQs from "../componentes/FAQs";
import HelpFactBox from "../componentes/HelpFact";
import SmallServices from "../componentes/SmallServicesHome";

const OffPageSeoService = (props) => {
  return (
    <>
        <Helmet>
          <title>Off-Page SEO Optimization Services - QA Digital Partners</title>
          <meta name="description" content="QA Digital Partners is your trusted SEO company for Off Page SEO Optimization and more. Contact us today." />
          <meta name="keywords" content="seo agency, Search engine optimization, Organic traffic, Local SEO, Technical SEO" />
          <meta name="author" content="QA Digital Partners" />
          <meta property="og:title" content="Off-Page SEO Optimization Services - QA Digital Partners" />
          <meta property="og:description" content="QA Digital Partners is your trusted SEO company for Off Page SEO Optimization and more. Contact us today." />
          <meta property="og:image" content="https://qadigitalpartners.com/Off-Page-SEO-Strategy.webp" />
          <meta property="og:url" content="https://qadigitalpartnes.com//search-engine-optimization/on-page" />
          <meta name="twitter:title" content="Off-Page SEO Optimization Services - QA Digital Partners" />
          <meta name="twitter:description" content="QA Digital Partners is your trusted SEO company for Off Page SEO Optimization and more. Contact us today." />
          <meta name="twitter:image" content="https://qadigitalpartners.com/Off-Page-SEO-Strategy.webp" />
        </Helmet>



    {/************************* Hero Banner Section **************************************/}
    <div className="bg-gradient-225 from-[#e8e7e7] to-white pt-16 mt-[-80px] lg:mb-[-90px]" id="home">
      <div className="container flex mx-auto flex-wrap">
        <div className="lg:w-3/6 pt-16 w-6/6">
          <h1 className="text-qablack lg:text-[35px] text-[36px] font-light pb-4 lg:leading-[40px] leading-[42px] px-8 lg:px-0 lg:pt-16">
          Off-Page SEO Optimization Services <span className="font-semibold lg:text-[95px] lg:leading-[90px]">Boost Your Site Authority</span>
          </h1>
          <p className="text-qablack text-base lg:pe-12 pt-8 px-8 lg:ps-0 lexend">Every business with an online presence wants to dominate search rankings, but achieving this requires more than just having a well-optimized website. Off-page SEO is a critical component of search engine optimization that focuses on building your site's reputation and authority across the internet to improve visibility and credibility.</p>
          <p className="text-qablack text-base lg:pe-12 pt-8 px-8 lg:ps-0 lexend">Unlike on-page SEO, which involves optimizing elements within your website, and technical SEO, which focuses on site speed, mobile-friendliness, and indexing, off-page SEO is about cultivating external signals that demonstrate your site's value and relevance. This includes developing quality backlinks, managing brand mentions, social signals, and online reputation—everything that influences how Google perceives your site's authority.</p>
          
        </div>
        <div className="mt-44 justify-center lg:w-3/6 w-full flex flex-wrap">
          <picture className="order-0 lg:order-1">
            <source media="(min-width: 1024px)" srcSet="/Off-Page-SEO-Strategy.webp" />
            <source media="(max-width: 1023px)" srcSet="/Off-Page-SEO-Strategy.webp" />
            <img
              src="/Off-Page-SEO-Strategy.webp"
              alt="Link building, global reach, and digital outreach as part of off-page SEO."
              width="520"
              height="520"
              loading="lazy"
              className="lg:w-[520px] w-[340px] mb-4 fade up rounded-xl shadow-usual "
            />
          </picture>
        </div>
        <div className="w-full flex pb-16">
        <SmallServices seo={false} home={false} offpage={true}/>
        </div>
      </div>
    </div>


    {/************************* Formulario Section **************************************/}
    <FormHorizontalModule titleBold="Your Project" titleThing="Let's Start " titleClass={'lg:text-[40px] text-[25px]'} contClass={'border-[1px] border-qablack lg:p-[2.5rem] py-8 bg-white'}/>


    {/************************* What are SEO Section **************************************/}
    <div className="container mx-auto lg:pt-16 lg:pb-24 pt-8">
      <h2 className="text-qablack text-[36px] leading-[42px] font-light px-8 lg:leading-[75px] lg:text-[63px] lg:ps-0 lg:pe-64 lg:me-[-40px]">
      What Are <span className="font-semibold">Off-Page SEO </span>Optimization Services?
      </h2>
      <p className="text-qablack font-light text-base pt-4 pb-8 px-8 lg:ps-0 lexend lg:w-[45rem] w-full lg:py-8">Off-page SEO optimization services focus on enhancing your website's reputation, authority, and relevance across the internet. This includes building high-quality backlinks, managing social media presence, creating shareable content, guest posting, and developing strategies that encourage others to reference and promote your website.</p>

      <div className="flex flex-wrap lg:flex-nowrap">
      <div className="lg:w-7/12 w-full bg-gradient-225 from-[#FAF9F9] to-[#F2F1F1] lg:ps-16 lg:pe-8 lg:py-16 pt-2 pb-8 lg:pb-0 px-8 lg:rounded-l-xl shadow-usual" >
        <p className="text-qablack lexend lg:pb-4 pt-8 lg:pt-4">Search engines prioritize websites that demonstrate authority and trustworthiness through external validation. By implementing off-page SEO best practices, businesses can:</p>
        {OffPageSEOBestPractices.map((title, index) => (
          <div className="flex py-2" key={index}>
              <img src="/check-icon.svg" alt={title} width={31} className="shadow-[-1px_1px_2px_0px_rgba(51,51,51,0.12)] rounded-md"/>
              <p className="content-center ps-4 lexend font-light text-[15px]">{title}</p>
            </div>
            ))}
        <p className="text-qablack lexend lg:pb-4 pt-8 lg:pt-4">At QA Digital Partners, our off-page SEO services take a comprehensive and strategic approach—analyzing your website's current backlink profile, identifying opportunities for authority building, and implementing data-driven strategies that align with your business goals. From link building and guest posting to social media engagement and brand mention monitoring, we ensure that your website's external signals are optimized to maximize search engine performance.</p>
      </div>

        <div className="lg:w-5/12 w-full bg-gradient-to-b from-[#585D5E] to-[#5E5E5E] lg:p-[40px] p-8 lg:rounded-r-xl lg:shadow-usual mb-[-3px] lg:mb-0">
          <div className="border-2 border-white rounded-xl p-8">
            <h3 className="text-white lg:text-[35px] lg:leading-[40px] text-[30px] leading-[35px] text-center py-4">Let´s Talk About <span className="text-qaorange font-semibold block">Your Project</span></h3>
            <Form1InRow borderColor={'border-white'} buttonColor={'bg-qaorange'}/>
          </div>
        </div>
      </div>
    </div>

    {/************************* Key Elements Section **************************************/}
    <div className="bg-gradient-to-b from-[#585D5E] to-qablack py-16">
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap lg:flex-nowrap pb-8 px-8 lg:px-0" id="b2b-seo" >
          <div className="lg:w-4/6 w-full">
          <h2 className="text-white font-light lg:text-[70px] text-[40px] leading-[45px] lg:leading-[80px] mb-4"><span className="font-semibold text-qaorange block"> Key Elements of Our </span> Off-Page SEO Optimization Services</h2>
          <p className="text-white text-base lg:pe-2 py-4 lg:ps-0 pb-8 lg:pb-0 lexend font-light">At QA Digital Partners, we take a holistic and data-driven approach to off-page SEO. By strengthening key external factors for your website, we enhance search engine rankings, improve brand recognition, and drive higher engagement.</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 px-8 lg:px-0">
          {OffPageKeyElements.map((data, index) => {
            return(
              <SpecializedSEOIndustry {...data} key={index} />
            )
          })}
        </div>
        <div>
        <div className="lg:w-6/12 w-full mx-auto text-center pb-0 pt-6 lg:pt-12 px-8 lg:px-0 ">
          <a href="#contact2" className="w-full block text-[25px] text-white bg-qaorange py-2 rounded-md font-bold mt-4 px-4 lg:px-0">Get an SEO Firm to Improve Your Rankings</a>
        </div>
        </div>
      </div>
    </div>

    {/************************* Why Choose Section **************************************/}
    <div className="container mx-auto flex flex-wrap lg:pt-16 pt-16 lg:pb-20 pb-12">
      <div className="lg:w-[52%] px-8 lg:px-0">
      <h2 className="text-qablack font-light lg:text-[50px] text-[45px] leading-[50px] lg:leading-[50px] lg:pe-4 pb-6 lg:pb-0">Why Choose Our <span className="font-semibold block">Off-Page SEO Optimization Services?</span></h2>
      <p className=" lg:pt-4 pb-6 lg:pb-0">Choosing the right off-page SEO partner can make the difference between a website that struggles to gain authority and one that dominates search results. At QA Digital Partners, we don't just build links—we create strategic, relationship-driven solutions designed to help you outperform your competition.</p>
      <picture className="">
        <source media="(min-width: 1024px)" srcSet="/Why-Choose-Our On-Page-SEO-580.webp" />
        <source media="(max-width: 1023px)" srcSet="/Why-Choose-Our On-Page-SEO-320.webp" />
        <img
          src="/Why-Choose-Our On-Page-SEO-580.webp"
          alt="Why Choose Our On-page SEO"
          width="580"
          height="290"
          loading="lazy"
          className="lg:w-[580px] w-[320px] rounded-xl shadow-[0_4px_10px_2px_rgba(0,0,0,0.1)] lg:mt-12"
        />
      </picture>
      </div>

      <div className="lg:w-[46%] lg:pt-32 px-8 lg:ps-8">
        {OffPageWhyChooseUs1.map((data, index) => {
          return(
            <ArrowComponent {...data} key={index} />
          )
        })}
      </div>

      <div className="lg:w-full lg:pt-4 px-8 lg:px-0 grid lg:grid-cols-2 grid-cols-1 gap-8">
        {OffPageWhyChooseUs2.map((data, index) => {
          return(
            <div key={index}>
              <ArrowComponent {...data} />
            </div>
          )
        })}
      </div>
    </div>

    {/************************* CTA Form Section **************************************/}
    <div className="container lg:px-0 lg:pb-12" id="contact2">
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap bg-[#F2F1F1] rounded-2xl py-16 px-8 lg:ps-8 lg:pe-16">
        <div className="w-full lg:w-3/6">
          <h3 className="text-qablack font-normal lg:text-[50px] lg:leading-[60px] text-[37px] leading-[40px]">Hire <span className="font-semibold lg:text-[57px] block">On Page SEO Experts</span> For Your Business</h3>
          <p className="text-qablack text-base lg:pe-2 py-4 lg:ps-0 lexend font-light">At QA Digital Partners, we stay ahead of industry trends so that you can focus on what matters—growing your business.</p>
        </div>
        <div className="w-full lg:w-3/6 lg:ps-8 content-center">
        <Form2InRow />
        </div>      
      </div>
    </div>


    {/************************* The Process Section **************************************/}
    <div className="container mx-auto lg:py-8 py-16">
      <div className="lg:py-16 px-8 lg:ps-0 lg:pe-64 pt-8 pb-16">
        <h2 className="text-qablack font-light text-[40px] leading-[50px] lg:text-[40px] lg:leading-[40px] lg:pe-64">The Process:   
        <span className="font-semibold block lg:text-[55px] lg:leading-[60px]"> How We Build Your Site's Authority</span></h2>
        <p className="text-qablack text-base lg:pe-2 py-4 lg:ps-0 lg:pe-64 lexend font-light">At QA Digital Partners, we follow a structured, results-driven approach to off-page SEO. Our process ensures that every external signal pointing to your website contributes to building authority while maintaining ethical standards.</p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 lg:pb-16 px-8 lg:px-0">
        {OffPageProcessSteps.map(data => {
          return(
            <HelpFactBox {...data} key={data.indexN} />
          )
        })}
        
        <div className="bg-gradient-to-b from-[#585D5E] to-qablack shadow-[0px_4px_10px_2px_rgba(0,0,0,0.1)] rounded-xl text-white px-4 lg:px-8 py-8 lg:py-4">
          <h2 className="text-[25px] leading-[30px] font-semibold py-4 text-qaorange">Get Started With Our Off-Page SEO Optimization Services Today</h2>
          <p className="text-white text-[14px] ">A strong external presence is crucial for establishing authority and achieving top search rankings. Whether you need strategic link building, digital PR, or comprehensive reputation management, QA Digital Partners is here to help.</p>
          <p className="text-white text-[14px]">We take a customized, relationship-driven approach to off-page SEO, ensuring that your website gains authority, attracts quality traffic, and converts visitors into loyal customers.</p>
          
          <div className="lg:w-6/12 w-full mx-auto text-center pb-4 pt-0 px-8 lg:px-0">
            <a href="tel:+12405936567" className="w-full block text-[16px] text-white bg-qaorange py-2 rounded-md font-bold mt-4 px-2">240-593-6567</a>
          </div>
        </div>
      </div>
    </div>


    {/************************* FAQs Section **************************************/}
    <div className="container mx-auto flex flex-wrap lg:flex-nowrap py-4 px-8 lg:px-0">
      <div className="w-full lg:w-3/6 py-8">
      <h2 className="lg:text-[60px] lg:leading-[80px] text-[43px] leading-[55px] text-qablack ">FAQs About <b className="block">On-Page SEO Optimization</b></h2>
      </div>
      <div className="w-full lg:w-3/6 py-8" >
      <FAQs faqsData={OffPageFAQs}/>
      </div>
    </div>

    {/************************* CTA Footer Section **************************************/}
    <div className="container mx-auto py-16 lg:pb-32">
      <div className="bg-gradient-to-b from-[#585D5E] to-qablack px-8 flex flex-wrap lg:flex-nowrap rounded-xl pt-16 lg:pt-0">
        <div className="lg:w-1/2 w-full content-center lg:ps-8 text-white">
          <h3 className="lg:text-[40px] lg:leading-[50px] text-[35px] font-light lg:pe-[9rem]">Ready to boost <span className="font-semibold">your website's authority with expert off-page SEO?</span></h3>
          <div className="flex flex-wrap py-8 lg:py-0">
            {QuickClicks4.map((data, index) => (
              <div className="flex lg:py-8 py-2 ps-0 pe-[20px] w-full lg:w-auto" key={index}>
                <img src={data.img} alt={data.title} width={37} height={37} className="shadow-[-1px_1px_2px_0px_rgba(51,51,51,0.12)] rounded-md"/>
                <p className="content-center ps-2 lexend font-light text-[15px] leading-[18px] whitespace-pre-line">{data.title}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap lg:gap-8">
          <div className="lg:w-5/12 w-full mx-auto lg:mx-0 text-center pb-4 pt-0 px-8 lg:px-0">
            <a href="tel:+12405936567" className="w-full block text-[16px] text-white bg-qaorange py-2 rounded-md font-bold mt-4 px-2">240-593-6567</a>
          </div>
          <div className="lg:w-5/12 w-full mx-auto lg:mx-0 text-center pb-4 pt-0 px-8 lg:px-0">
            <a href="mailto:Hi@qadigitalads.com" target="_blank" className="w-full block text-[16px] text-white bg-qaorange py-2 rounded-md font-bold mt-4 px-2">Hi@qadigitalads.com</a>
          </div>
          </div>
          <p className="text-white text-[14px]">Contact us today for a free backlink audit and consultation.</p>
        </div>

        <div className="lg:w-1/2 w-full lg:pt-16 lg:pb-16 pt-8 pb-16" >
          <div className="border-2 border-white rounded-xl p-8">
            <h3 className="text-white lg:text-[35px] lg:leading-[40px] text-[30px] leading-[35px] text-center py-4">Let’s take your website <span className="text-qaorange font-semibold block">to the next level with expert off-page SEO optimization!</span></h3>
            <Form1InRow borderColor={'border-white'} buttonColor={'bg-qaorange'} />
          </div>
        </div>
      </div>
    </div>

    </>

  )
};

export default OffPageSeoService;
