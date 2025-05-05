import React from "react"

const ComprenhensiveSeo = ({title, content, link = ''}) => {
  return (
    <>
      <div className="bg-white rounded-xl py-4 px-8 flex flex-wrap">
        <div>
          <ul>
              <h3 className="min-h-[4rem] content-center">
              <li className="lexend font-semibold text-[18px] bullet-qaorange list-disc ms-4">{title}</li>
              </h3>
          </ul>
          <p className="pb-4 lg:min-h-">{content}</p>
        </div>
        {(link === '') ? 
        ('') 
        : 
        (
        <div className="flex w-full">
          <a href={link} className="text-right w-full flex justify-end underline group">
            Read more
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-6 group-hover:translate-x-3 ease-in-out transition-all">
              <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
            </svg>
            </a>  
        </div>
        )}
      </div>
    </>
  )
};

export default ComprenhensiveSeo;
