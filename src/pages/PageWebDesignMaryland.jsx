import React from "react"
import Form2InRow from "../componentes/Form2InRow";
import ReviewSection from "../componentes/ReviewSection";
import ComprenhensiveSeo from "../componentes/ComprehensiveSeo";
import { comprehensiveSeo1, FAQsWebDesignCompany, IndustriesWebDesignCompany1, IndustriesWebDesignCompany2, OurProcessWebDesignCompany, ProvenResultsData, QADiferenceWebDesignCompany1, QADiferenceWebDesignCompany2, WebDesignServicesInclude, whysgooseqapartners1, whysgooseqapartners2 } from "../data";
import FormHorizontalModule from "../componentes/FormHorizontal";
import SpinAnimation from "../componentes/SpinerText";
import HelpFactBox from "../componentes/HelpFact";
import FAQs from "../componentes/FAQs";
import ArrowComponent from "../componentes/ArrowComponent";
import ProvenResults from "../componentes/ProvenResults";
import { Helmet } from "react-helmet";

const WebDesignMaryland = (props) => {
  return (
    <>
    <Helmet>
      <title>Comprehensive Web Design Company in Maryland</title>
      <meta name="description" content="Web Design Company in Maryland - Custom, high-performing websites designed for growth. Contact us today!" />
      <meta name="keywords" content="seo agency, Search engine optimization, Organic traffic, Local SEO, Technical SEO" />
      <meta name="author" content="QA Digital Partners" />
      <meta property="og:title" content="Comprehensive Web Design Company in Maryland" />
      <meta property="og:description" content="Web Design Company in Maryland - Custom, high-performing websites designed for growth. Contact us today!" />
      <meta property="og:image" content="https://qadigitalpartners.com/web_design_agency_320x320.webp" />
      <meta property="og:url" content="https://qadigitalpartnes.com/web-design-maryland" />
      <meta name="twitter:title" content="Comprehensive Web Design Company in Maryland" />
      <meta name="twitter:description" content="Web Design Company in Maryland - Custom, high-performing websites designed for growth. Contact us today!" />
      <meta name="twitter:image" content="https://qadigitalpartners.com/web_design_agency_320x320.webp" />
    </Helmet>
 

    {/*****************************************Banner Section */}
    <div className="bg-gradient-225 from-[#e8e7e7] to-white pt-16 lg:pb-24 mt-[-80px] lg:mb-16" id="home">
      <div className="container flex mx-auto flex-wrap lg:flex-nowrap">
        <div className="lg:w-3/6 pt-16 w-6/6 content-center">
          <h1 className="text-qablack lg:text-[38px] text-[36px] font-light pb-4 lg:leading-[50px] leading-[42px] px-8 lg:px-0">
          Web Design Company in Maryland <span className="font-semibold block lg:text-[75px] lg:leading-[65px]">Stunning & High-Performing Websites</span>
          </h1>
        </div>
        <div className="lg:mt-16 justify-center lg:w-3/6 w-full flex">
        <div className="lg:ps-16 lg:pe-0 px-8">
        <p className="text-qablack text-base py-8 lg:ps-0 lexend">Having a website is not enough; your business needs a well-designed, high-performing digital presence that drives leads and conversions. At QA Digital Partners, we specialize in crafting visually appealing and strategically optimized websites that help businesses in Maryland grow. Whether you need a custom website, eCommerce store, or a full redesign, our team ensures your online presence is built for success.</p>
        <p></p>
        <Form2InRow />
        </div>
        </div>
      </div>
    </div>

    {/*****************************************Why Choose Section */}
    <div className="lg:pt-4 lg:mb-[-60px]">
        <div className="container flex mx-auto flex-wrap lg:flex-nowrap py-8">
            <div className="lg:w-6/12 w-full order-last lg:order-first webkit-center-left px-8 lg:px-0 content-center">
              <picture className="webkit-center-left">
                <source media="(min-width: 1024px)" srcSet="./Web-Design-Company-in-Maryland-900.webp" />
                <source media="(max-width: 1023px)" srcSet="./Web-Design-Company-in-Maryland-320.webp" />
                <img
                    src="./Web-Design-Company-in-Maryland-900.webp"
                    alt="Portfolio Graph"
                    width="580"
                    height="290"
                    loading="lazy"
                    className="lg:w-[580px] w-[320px] mb-4 shadow-lg rounded-lg"
                />
              </picture>
            </div> 
            <div className="lg:w-6/12 w-full pt-4 lg:ps-8">
                <h2 className="text-qablack lg:text-[60px] text-[36px] font-light pb-4 lg:leading-[65px] leading-[42px] px-8 lg:px-0">
                Why Choose  <span className="font-semibold">QA Digital Partners?</span>
                </h2>
              <p className="text-qablack text-base lg:pe-8 py-8 px-8 lg:ps-0 lexend font-light">Here, we don’t guess. Every service we offer has been tested for success, backed by data, experience, and continuous improvement. We are a team that iterates, refines, and evolves—always staying ahead of the curve so your business can do the same.
                <br /><br />When you work with QA Digital Partners, you get more than just a web design and marketing agency—you get a team that puts best practices into action. We don’t just follow trends; we implement cutting-edge strategies that drive real, measurable results. Our commitment is to keep pushing forward, ensuring your business remains competitive in an ever-changing digital landscape.
                <br /><br />With us, you have a digital marketing powerhouse that truly cares about your success. We don’t settle for good enough—we aim for exceptional, and we’ll keep optimizing, testing, and improving until your business thrives.
                </p>
            </div>
        </div>
      </div>

    
    {/*****************************************Review Section */}
    <ReviewSection heightMod={false}/>


    {/*****************************************Experience Section */}
    <div className="bg-gradient-to-b from-[#585D5E] to-qablack pt-24 z-10 lg:pb-32 pb-24">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 pb-8 px-8 lg:px-0">
          {whysgooseqapartners1.map((data, index) => {
            return(
              <ComprenhensiveSeo {...data} key={index} />
            )
          })}
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 pb-8 px-8 lg:px-0">
          {whysgooseqapartners2.map((data, index) => {
            return(
              <ComprenhensiveSeo {...data} key={index} />
            )
          })}
        </div>
      </div>
    </div>

    {/***************************************Form Section */}
    <div className="lg:mt-[-120px] px-4 mt-[-100px]">
      <FormHorizontalModule titleThing="Get the Right SEO Company" titleBold="For Your Brands" titleClass={'lg:text-[40px] text-[25px]'} contClass={'border-[1px] border-qablack lg:p-[2.5rem] py-8 bg-white'}/>
    </div>
    
    {/***************************************360 Approach Section */}
    <div className="container mx-auto bg-qalightgrey rounded-2xl py-16 lg:px-16 px-8 mt-16 flex lg:mb-16 mb-8 flex-wrap">
      <div className="lg:w-8/12 w-full lg:pe-16 ">
        <h2 className="lg:text-[4.38rem] text-[2.6rem] leading-tight text-qablack mb-8">Our 360 Approach: <span className="font-bold">From Web Design to Marketing</span></h2>
        <p className="lg:pe-16 mb-8">No matter where your business stands—whether you're launching a brand-new company, rebranding, or expanding into new markets—QA Digital Partners is here to support you at every stage. We don’t just build websites; we provide a complete digital strategy that ensures long-term success.</p>
        <p className="lg:pe-16 mb-8">From the very beginning, we help businesses establish a strong online foundation with custom, high-performing websites designed for visibility and conversions. But our work doesn’t stop there. Once your website is live, we continue optimizing, managing, and scaling your digital presence through targeted marketing strategies.</p>
        <div className="btn-grow-box qablack">
        <a href="tel:+12405936567" className=" py-2 animated-button rounded-lg text-qablack font-bold px-4 lg:text-[16px] text-[13px]">Get a custom proposal or Call 240-593-6567</a>
        </div>
      </div>
      <div className="lg:w-4/12 w-full pb-8 lg:pb-0 pt-16 lg:pt-0">
          <SpinAnimation text={'| From Web Design to Marketing '} />
        <p className="pt-20 mb-8">Our team offers everything from SEO and content marketing to paid advertising and social media management, ensuring your business grows in the right direction. Whether you need a one-time web project or ongoing marketing support, we have the expertise to cover all your digital needs. With us, your business doesn’t just launch—it thrives.</p>
      </div>

      <div className="w-12/12 lg:order-3 order-3 lg:pt-20">
      <h3 className="lg:text-[2.2rem] text-[1.7rem] leading-tight text-qablack mb-8">Some of our Web Design Services Include</h3>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 lg:pb-16 px-4 lg:px-0">
        {WebDesignServicesInclude.map((data, index) => {
            return(
              <ComprenhensiveSeo {...data} key={index} />
            )
          })}
        
      </div>
      <div className="lg:w-6/12 w-full mx-auto text-center pb-4 pt-8 lg:pt-0 px-8 lg:px-0">
          <a href="tel:+12405936567" className="w-full block text-[25px] text-white bg-qaorange py-2 rounded-md font-bold mt-4 px-4 lg:px-0">Call us at 240-593-6567</a>
        </div>
      </div>
    </div>

    {/***************************************Insdustries We Serve Section */}
    <div className="container mx-auto flex flex-wrap lg:pt-16 pt-16">
      <div className="lg:w-[46%] px-8 lg:px-0 lg:order-1 order-1">
      <h2 className="text-qablack font-light lg:text-[60px] text-[40px] leading-[40px] lg:leading-[60px] lg:pe-16">Some Of <span className="font-semibold block">The Industries We Serve</span></h2>
      {IndustriesWebDesignCompany1.map((data, index) => {
          return(
            <ArrowComponent {...data} key={index} />
          )
        })}
      </div>


      <div className="lg:w-[50%] lg:pt-24 px-8 lg:px-0 lg:order-2 order-2">
        <picture className="">
            <source media="(min-width: 1024px)" srcSet="./HVAC-contractor-maryland-630.webp" />
            <source media="(max-width: 1023px)" srcSet="./HVAC-contractor-maryland-320.webp" />
            <img
              src="./HVAC-contractor-maryland-630.webp"
              alt="HVAC Contractor in Maryland"
              width="630"
              height="373"
              loading="lazy"
              className="lg:w-[630px] w-[320px] rounded-xl shadow-[0_4px_10px_2px_rgba(0,0,0,0.1)]"
            />
          </picture>     
      </div>

      <div className="lg:w-[54%] lg:pt-16 px-8 lg:px-0 lg:order-3 order-4">
        <picture className="">
            <source media="(min-width: 1024px)" srcSet="./healthcare-contractor-in-maryland-630.webp" />
            <source media="(max-width: 1023px)" srcSet="./healthcare-contractor-in-maryland-320.webp" />
            <img
              src="./healthcare-contractor-in-maryland-630.webp"
              alt="Healthcare Contractor in Maryland"
              width="630"
              height="373"
              loading="lazy"
              className="lg:w-[630px] w-[320px] lg:mb-16 rounded-xl shadow-[0_4px_10px_2px_rgba(0,0,0,0.1)]"
            />
          </picture>     
      </div>

      <div className="lg:w-[46%] lg:pt-24 px-8 lg:ps-8 lg:order-4 order-3">
        {IndustriesWebDesignCompany2.map((data, index) => {
          return(
            <ArrowComponent {...data} key={index} />
          )
        })}
        <p className="lg:pe-16 mb-8 font-bold">And much more.</p>
        <p className="lg:pe-4 mb-8">Need a website that drives real results? Contact QA Digital Partners at <a href="tel:+12405936567" className="underline text-qaorange">240-593-6567</a> or email us at <a href="mailto:hi@qadigitalads.com" className="underline text-qaorange">hi@qadigitalads.com</a> to start your project today.</p>
      </div>
    </div>

    {/***************************************Our Process Section */}
    <div className="container mx-auto flex flex-wrap py-16 px-8 lg:px-0 lg:pt-4">
      <div className="w-full lg:w-4/6 py-8">
        <h2 className="lg:text-[60px] lg:leading-[80px] text-[43px] leading-[55px] text-qablack ">Our <b>Web Design Process</b></h2>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 lg:pb-16 px-8 lg:px-0">
        {OurProcessWebDesignCompany.map(data => {
          return(
            <HelpFactBox {...data} key={data.indexN} heighMod="lg:min-h-[200px]"/>
          )
        })}
        
      </div>
    </div>

    {/***************************************QA Diference Section */}
    <div className="bg-gradient-to-b from-[#E6E6E6] to-white py-16">
      <div className="container mx-auto flex flex-wrap ">
        <div className="w-full lg:pb-8 px-8 lg:px-0">
        <h2 className="text-qablack font-light lg:text-[60px] lg:leading-[70px] text-[40px] leading-[50px] text-center font-semibold">The QA Digital Partners Difference</h2>
        </div>
        <div className="lg:w-3/6 w-full px-8 lg:px-0">
        
        {QADiferenceWebDesignCompany1.map((data, index) => {
          return(
            <ArrowComponent {...data} key={index} />
          )
        })}
        <picture>
          <source media="(min-width: 1024px)" srcSet="./QA-founders-julian-alfonso-sebastian-548.webp" />
          <source media="(max-width: 1023px)" srcSet="./QA-founders-julian-alfonso-sebastian-320.webp" />
          <img
            src="./QA-founders-julian-alfonso-sebastian-548.webp"
            alt="QA Founders "
            width="548"
            height="539"
            loading="lazy"
            className="lg:w-[548px] w-[320px] mb-4 rounded-[22px] shadow-[0_4px_10px_2px_rgba(0,0,0,0.1)] lg:mt-8"
          />
        </picture>

        </div>
        <div className="lg:w-3/6 w-full px-8 lg:px-0">
        {QADiferenceWebDesignCompany2.map((data, index) => {
          return(
            <ArrowComponent {...data} key={index} />
          )
        })}

        <h3 className="text-qablack font-light text-[40px] leading-[50px] lg:pe-32 pt-8">Get <span className="font-semibold">Quality Leads</span> with Proven <span className="text-qaorange font-semibold">SEO Management</span></h3>

        <div>
        <Form2InRow />
        </div>
        </div>
      </div>
    </div>

    {/***************************************Portafolio Section */}
    <div className="py-16">
        <div className="container mx-auto">
          <h2 className="text-qablack text-[36px] leading-[42px] font-light px-8 lg:leading-[75px] lg:text-[63px] lg:px-64 lg:me-[-40px] text-center">
          Our Portfolio <span className="font-semibold">Web Design Projects in Maryland</span>
          </h2>
          <div className="grid lg:grid-cols-3 gap-8 pt-16 pb-2">
            {ProvenResultsData.map((data, index) => {
              return(
                <ProvenResults {...data} key={index} />
              )
            })}
          </div>
        </div>
      </div>


    {/***************************************FAQs Section */}
    <div className="container mx-auto flex flex-wrap lg:flex-nowrap py-16 px-8 lg:px-0 lg:pt-4 lg:pb-16">
      <div className="w-full lg:w-3/6 py-8">
      <h2 className="lg:text-[60px] lg:leading-[80px] text-[43px] leading-[55px] text-qablack ">Web Design <b>FAQs</b></h2>
      </div>
      <div className="w-full lg:w-3/6 py-8" >
      <FAQs faqsData={FAQsWebDesignCompany}/>
      </div>
    </div>

    {/***************************************CTA Final Section */}
    <div className="container mx-auto bg-qalightgrey rounded-2xl py-16 lg:px-16 px-8 flex lg:mb-32 mb-8 flex-wrap lg:flex-nowrap">
      <div className="lg:w-2/3 w-full lg:pe-16 order-2 lg:order-1">
        <h2 className="lg:text-[4.38rem] text-[3rem] leading-tight text-qablack mb-8">Get a Free <span className="font-bold">Web Design Consultation Today!</span></h2>
        <p className="lg:pe-16 mb-8">Ready to elevate your online presence? Contact QA Digital Partners at <a href="tel:+12405936567" className="underline text-qaorange">240-593-6567</a> or email us at <a href="mailto:hi@qadigitalads.com" className="underline text-qaorange">hi@qadigitalads.com</a> to schedule your free consultation today.</p>
        <div className="btn-grow-box qablack">
        <a href="tel:+12405936567" className=" py-2 animated-button rounded-lg text-qablack font-bold px-4 lg:text-[16px] text-[13px]">Get a custom proposal or Call 240-593-6567</a>
        </div>
      </div>
      <div className="lg:w-1/3 w-full pb-8 lg:pb-0 order-1 lg:order-2 content-end">
          <SpinAnimation text={'WE CREATE CUSTOM SOLUTIONS '}/>
      </div>
    </div>

    <button className="d-1 hidden">
      510-265-4416 otra cosa diferente
    </button>
    </>

    
  )
};

export default WebDesignMaryland;
