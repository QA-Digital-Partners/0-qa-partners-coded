import React from "react"
import Divider from "./Divider";
import { QLleft, QLright, SEOleft, SEOright, WDD } from "../data";

const Footer = () => {


  return (
    <>
      <div className="w-full bg-qalightgrey py-8 flex">
        <div className="container mx-auto flex flex-wrap lg:flex-nowrap">
            <div className="lg:w-2/3 w-full items-center flex justify-center lg:justify-start"><p className="text-qablack font-bold text-xl text-center lg:text-left">Let’s Start Your Project</p></div>
            <div className="lg:w-1/3 w-full gap-4 flex justify-center py-4 lg:py-0">
            <div className="btn-grow-box qablack">
                <a href="tel:+12405936567" className="animated-button rounded-lg text-qablack font-bold px-4 py-1 text-[16px] ">240-593-6567</a>
            </div>
            <div className="btn-grow-box qablack">
                <a href="mailto:Hi@qadigitalads.com" className="animated-button rounded-lg text-qablack font-bold px-4 py-1 text-[16px] ">Hi@qadigitalads.com</a>
            </div>
            </div>
        </div>
      </div>
      <div className="bg-[#282828] w-full">
        <div className="container mx-auto py-16 flex flex-wrap lg:flex-nowrap gap-16 px-8 lg:px-0">
            <div className="lg:w-3/12 w-full">
                <h3 className="text-qaorange font-bold text-xl">Quick Links</h3>
                <Divider width='100%' color={'#ffffff'} height='1px' clas="lg:my-2 mt-4 mb-8"/>
            <div className="grid grid-cols-2 text-white mt-2">
                <div>
                    {QLleft.map((data,index) => {
                        return(
                            <a href={data.link} key={index} className="block my-2 hover:text-qaorange">{data.name}</a>
                        )
                    })}
                </div>
                <div>
                    {QLright.map((data,index) => {
                        return(
                            <a href={data.link} key={index} className="block my-2 hover:text-qaorange">{data.name}</a>
                        )
                    })}
                </div>
            </div>
            </div>
            <div className="lg:w-7/12 w-full">
                <h3 className="text-qaorange font-bold text-xl">Services</h3>
                <Divider width='100%' color={'#ffffff'} height='1px' clas="lg:my-2 mt-4 mb-8"/>
                <div className="grid lg:grid-cols-2 lg:gap-4 gap-8 grid-cols-1">
                    <div className="text-white">
                        <h4 className="font-bold text-xl">Search Engine Optimization</h4>
                        <div className="grid grid-cols-2">
                            <div>
                                {SEOleft.map((data,index) => {
                                return(
                                    <a href={data.link} key={index} className="block my-2 hover:text-qaorange">{data.name}</a>
                                )
                                })}                        
                            </div>
                            <div>
                                {SEOright.map((data,index) => {
                                return(
                                    <a href={data.link} key={index} className="block my-2 hover:text-qaorange">{data.name}</a>
                                )
                                })}             
                            </div>
                        </div>
                    </div>
                    <div className="text-white hidden">
                        <h4 className="font-bold text-xl">Web Design and Development</h4>
                        <div className="grid grid-cols-1">
                            <div>
                                {WDD.map((data,index) => {
                                return(
                                    <a href={data.link} key={index} className="block my-2 hover:text-qaorange">{data.name}</a>
                                )
                                })}                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:w-2/12 w-full flex justify-center items-end gap-4">
            <a href="https://www.instagram.com/qadigitaladvertising/" target="_blank" aria-label="Instagram">
                <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-white hover:fill-qaorange">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.45865 0.0863528C9.99337 0.0157005 10.4827 0 14.3921 0C18.3016 0 18.7909 0.0170089 20.3243 0.0863528C21.8577 0.155697 22.9044 0.400363 23.8203 0.754933C24.7793 1.11735 25.6494 1.68388 26.369 2.41657C27.1017 3.13487 27.6669 4.00363 28.028 4.96398C28.3839 5.87984 28.6273 6.92654 28.6979 8.45734C28.7686 9.99468 28.7843 10.484 28.7843 14.3921C28.7843 18.3016 28.7673 18.7909 28.6979 20.3256C28.6286 21.8564 28.3839 22.9031 28.028 23.819C27.6669 24.7794 27.1008 25.6497 26.369 26.369C25.6494 27.1017 24.7793 27.6669 23.8203 28.028C22.9044 28.3839 21.8577 28.6273 20.3269 28.6979C18.7909 28.7686 18.3016 28.7843 14.3921 28.7843C10.4827 28.7843 9.99337 28.7673 8.45865 28.6979C6.92785 28.6286 5.88115 28.3839 4.96529 28.028C4.00483 27.6669 3.13463 27.1007 2.41526 26.369C1.68307 25.6503 1.11646 24.7805 0.754933 23.8203C0.400363 22.9044 0.157005 21.8577 0.0863528 20.3269C0.0157005 18.7896 0 18.3002 0 14.3921C0 10.4827 0.0170089 9.99337 0.0863528 8.45996C0.155697 6.92654 0.400363 5.87984 0.754933 4.96398C1.11699 4.00374 1.68404 3.13397 2.41657 2.41526C3.13492 1.68323 4.00425 1.11662 4.96398 0.754933C5.87984 0.400363 6.92654 0.157005 8.45734 0.0863528H8.45865ZM20.2079 2.67694C18.6901 2.60759 18.2348 2.5932 14.3921 2.5932C10.5494 2.5932 10.0941 2.60759 8.5764 2.67694C7.17252 2.74105 6.41104 2.97525 5.90339 3.17281C5.23219 3.43449 4.75202 3.74457 4.2483 4.2483C3.7708 4.71284 3.40332 5.27836 3.17281 5.90339C2.97525 6.41104 2.74105 7.17251 2.67694 8.5764C2.60759 10.0941 2.5932 10.5494 2.5932 14.3921C2.5932 18.2348 2.60759 18.6901 2.67694 20.2079C2.74105 21.6117 2.97525 22.3732 3.17281 22.8809C3.40309 23.505 3.77074 24.0715 4.2483 24.536C4.71277 25.0135 5.2793 25.3812 5.90339 25.6115C6.41104 25.809 7.17252 26.0432 8.5764 26.1073C10.0941 26.1767 10.5481 26.1911 14.3921 26.1911C18.2361 26.1911 18.6901 26.1767 20.2079 26.1073C21.6118 26.0432 22.3732 25.809 22.8809 25.6115C23.5521 25.3498 24.0322 25.0397 24.536 24.536C25.0135 24.0715 25.3812 23.505 25.6115 22.8809C25.809 22.3732 26.0432 21.6117 26.1073 20.2079C26.1767 18.6901 26.1911 18.2348 26.1911 14.3921C26.1911 10.5494 26.1767 10.0941 26.1073 8.5764C26.0432 7.17251 25.809 6.41104 25.6115 5.90339C25.3498 5.23219 25.0397 4.75202 24.536 4.2483C24.0714 3.77083 23.5059 3.40336 22.8809 3.17281C22.3732 2.97525 21.6118 2.74105 20.2079 2.67694ZM12.5539 18.8288C13.5805 19.2562 14.7236 19.3139 15.7881 18.992C16.8525 18.6702 17.7722 17.9887 18.39 17.0642C19.0079 16.1396 19.2855 15.0291 19.1756 13.9226C19.0657 12.816 18.575 11.7819 17.7874 10.9969C17.2853 10.4951 16.6781 10.1109 16.0097 9.87189C15.3413 9.63289 14.6282 9.54507 13.9218 9.61475C13.2153 9.68443 12.5331 9.90987 11.9243 10.2748C11.3154 10.6398 10.7951 11.1353 10.4007 11.7255C10.0063 12.3157 9.74765 12.986 9.6434 13.6882C9.53916 14.3903 9.5919 15.1069 9.79782 15.7862C10.0037 16.4656 10.3577 17.0908 10.8343 17.6169C11.3109 18.143 11.8981 18.5569 12.5539 18.8288ZM9.16125 9.16125C9.84818 8.47432 10.6637 7.92941 11.5612 7.55765C12.4587 7.18589 13.4207 6.99454 14.3921 6.99454C15.3636 6.99454 16.3256 7.18589 17.2231 7.55765C18.1206 7.92941 18.9361 8.47432 19.623 9.16125C20.3099 9.84818 20.8549 10.6637 21.2266 11.5612C21.5984 12.4587 21.7897 13.4207 21.7897 14.3921C21.7897 15.3636 21.5984 16.3256 21.2266 17.2231C20.8549 18.1206 20.3099 18.9361 19.623 19.623C18.2357 21.0103 16.3541 21.7897 14.3921 21.7897C12.4302 21.7897 10.5486 21.0103 9.16125 19.623C7.77393 18.2357 6.99454 16.3541 6.99454 14.3921C6.99454 12.4302 7.77393 10.5486 9.16125 9.16125ZM23.4304 8.09623C23.6006 7.93565 23.7369 7.74255 23.8312 7.52836C23.9254 7.31417 23.9757 7.08324 23.9792 6.84925C23.9826 6.61527 23.939 6.38297 23.851 6.16613C23.763 5.94928 23.6325 5.75229 23.467 5.58681C23.3015 5.42134 23.1045 5.29075 22.8877 5.20278C22.6708 5.1148 22.4385 5.07123 22.2045 5.07464C21.9705 5.07805 21.7396 5.12838 21.5254 5.22264C21.3112 5.3169 21.1181 5.45317 20.9576 5.6234C20.6453 5.95446 20.4743 6.39419 20.4809 6.84925C20.4876 7.30432 20.6713 7.73888 20.9931 8.0607C21.3149 8.38251 21.7495 8.56623 22.2045 8.57287C22.6596 8.5795 23.0993 8.40852 23.4304 8.09623Z" fill="#white"/>
                </svg>
            </a>
            <a href="https://www.facebook.com/Qadigitalads" target="_blank" aria-label="Facebook">
                <svg width="17" height="29" viewBox="0 0 17 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-white hover:fill-qaorange">
                <path d="M15.1745 16.1878L15.9746 10.9766H10.9768V7.6011C10.9768 6.17205 11.6785 4.79227 13.9065 4.79227H16.1716V0.357264C16.1716 0.357264 14.1158 0 12.1462 0C8.04703 0 5.35116 2.48853 5.35116 7.00977V10.9766H0.78418V16.1878H5.35116V28.7782C6.26209 28.9261 7.20996 29 8.15782 29C9.10568 29 10.0535 28.9261 10.9645 28.7782V16.1878H15.1745Z" fill="#white"/>
                </svg>
            </a>
            <a href="https://www.youtube.com/@qadigitaladvertising" target="_blank" aria-label="Youtube">
                <svg width="34" height="25" viewBox="0 0 34 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-white hover:fill-qaorange">
                <path d="M33.5203 11.9883C33.5203 11.9064 33.5203 11.8134 33.5166 11.7055C33.5129 11.404 33.5054 11.0653 33.498 10.7043C33.4682 9.66584 33.4161 8.63114 33.3342 7.656C33.2226 6.31238 33.0588 5.19208 32.8355 4.35093C32.5998 3.47311 32.1379 2.67252 31.4958 2.02918C30.8538 1.38584 30.0542 0.922278 29.1768 0.684834C28.1235 0.401968 26.0616 0.227037 23.1585 0.119101C21.7776 0.0669945 20.3 0.0334971 18.8224 0.0148875C18.3051 0.00744362 17.825 0.00372192 17.3932 0H16.299C15.8672 0.00372192 15.3871 0.00744362 14.8698 0.0148875C13.3921 0.0334971 11.9145 0.0669945 10.5337 0.119101C7.63061 0.230759 5.56494 0.40569 4.51536 0.684834C3.63773 0.921695 2.83777 1.38506 2.19565 2.02849C1.55352 2.67192 1.09179 3.47282 0.856709 4.35093C0.629672 5.19208 0.469629 6.31238 0.357971 7.656C0.276089 8.63114 0.223982 9.66584 0.194206 10.7043C0.183041 11.0653 0.179319 11.404 0.175597 11.7055C0.175597 11.8134 0.171875 11.9064 0.171875 11.9883V12.1967C0.171875 12.2786 0.171875 12.3717 0.175597 12.4796C0.179319 12.7811 0.186763 13.1198 0.194206 13.4808C0.223982 14.5192 0.276089 15.5539 0.357971 16.5291C0.469629 17.8727 0.633394 18.993 0.856709 19.8341C1.33312 21.6169 2.73256 23.0238 4.51536 23.5002C5.56494 23.7831 7.63061 23.958 10.5337 24.066C11.9145 24.1181 13.3921 24.1516 14.8698 24.1702C15.3871 24.1776 15.8672 24.1813 16.299 24.1851H17.3932C17.825 24.1813 18.3051 24.1776 18.8224 24.1702C20.3 24.1516 21.7776 24.1181 23.1585 24.066C26.0616 23.9543 28.1272 23.7794 29.1768 23.5002C30.9596 23.0238 32.3591 21.6207 32.8355 19.8341C33.0625 18.993 33.2226 17.8727 33.3342 16.5291C33.4161 15.5539 33.4682 14.5192 33.498 13.4808C33.5091 13.1198 33.5129 12.7811 33.5166 12.4796C33.5166 12.3717 33.5203 12.2786 33.5203 12.1967V11.9883ZM30.8405 12.1819C30.8405 12.26 30.8405 12.3456 30.8368 12.4461C30.8331 12.7364 30.8256 13.0565 30.8182 13.4026C30.7921 14.3927 30.74 15.3827 30.6619 16.302C30.5614 17.5005 30.4199 18.4831 30.245 19.1419C30.0143 20.0016 29.3369 20.6827 28.4808 20.9098C27.6992 21.1182 25.7303 21.2857 23.0543 21.3862C21.6995 21.4383 20.2405 21.4718 18.7852 21.4904C18.2753 21.4978 17.8026 21.5016 17.3783 21.5016H16.3139L14.907 21.4904C13.4517 21.4718 11.9964 21.4383 10.6379 21.3862C7.96186 21.282 5.98924 21.1182 5.21136 20.9098C4.35532 20.679 3.67793 20.0016 3.44717 19.1419C3.27224 18.4831 3.1308 17.5005 3.03031 16.302C2.95215 15.3827 2.90377 14.3927 2.87399 13.4026C2.86283 13.0565 2.8591 12.7327 2.85538 12.4461C2.85538 12.3456 2.85166 12.2563 2.85166 12.1819V12.0032C2.85166 11.925 2.85166 11.8394 2.85538 11.7389C2.8591 11.4486 2.86655 11.1286 2.87399 10.7824C2.90005 9.79238 2.95215 8.80235 3.03031 7.88303C3.1308 6.68458 3.27224 5.70199 3.44717 5.04321C3.67793 4.18344 4.35532 3.50233 5.21136 3.27529C5.99296 3.06687 7.96186 2.89938 10.6379 2.79889C11.9927 2.74678 13.4517 2.71328 14.907 2.69467C15.4169 2.68723 15.8896 2.68351 16.3139 2.68351H17.3783L18.7852 2.69467C20.2405 2.71328 21.6958 2.74678 23.0543 2.79889C25.7303 2.9031 27.7029 3.06687 28.4808 3.27529C29.3369 3.50605 30.0143 4.18344 30.245 5.04321C30.4199 5.70199 30.5614 6.68458 30.6619 7.88303C30.74 8.80235 30.7884 9.79238 30.8182 10.7824C30.8294 11.1286 30.8331 11.4524 30.8368 11.7389C30.8368 11.8394 30.8405 11.9288 30.8405 12.0032V12.1819ZM13.5336 17.0799L22.1684 12.0553L13.5336 7.10515V17.0799Z" fill="#white"/>
                </svg>
            </a>
            </div>
        </div>
        <div className="container mx-auto">
            <Divider width={'100%'} height={'1px'} color={'white'} />
            <p className="w-full text-center text-white py-8">© 2024 QA Digital Advertising | All rights reserved</p>
        </div>
      </div>
    </>
  )
};

export default Footer;
