import React from "react";

const isHTML = (str) => {
  if (typeof str !== "string") return false;
  const doc = new DOMParser().parseFromString(str, "text/html");
  return Array.from(doc.body.childNodes).some(node => node.nodeType === 1);
};

const HelpFactBox = ({indexN, title, content1, content2, heighMod='', children}) => {
  return (
    <>
      <div className={`bg-[#F6F6F6] group shadow-[0px_4px_10px_2px_rgba(0,0,0,0.1)] rounded-xl ${ heighMod === '' ? 'lg:min-h-[400px]' : heighMod} `}>
        <div className="flex flex-wrap">
            <h3 className="flex w-full">
            <div className="w-[20%] bg-gradient-to-b from-[#585D5E] to-qablack group-hover:bg-qaorange group-hover:to-qaorange group-hover:from-qaorange text-center rounded-tl-xl"><span className="lexend font-medium text-[60px] text-white leading-[78px]">{indexN}</span></div>
            <div className="w-[80%] bg-[#e0e0e0] group-hover:bg-gradient-to-b group-hover:from-[#585D5E] group-hover:to-qablack rounded-tr-xl content-center px-4"><span className="lexend text-[18px] font-medium text-qablack group-hover:text-white leading-[25px] whitespace-pre-line">{title}</span></div>
            </h3>
        </div>
        <div className="px-[1.5rem] pt-4 pb-8">
        {children ? (
          children
        ) : isHTML(content1) ? (
          <p 
            className="font-light whitespace-pre-line text-qablack px-4" 
            dangerouslySetInnerHTML={{ __html: content1 }} 
          />
        ) : (
          <p className="text-center text-qablack whitespace-pre-line">
            {content1}
            {content2 && <><br /><br />{content2}</>}
          </p>
        )}
        </div>
      </div>
    </>
  )
};

export default HelpFactBox;
