import React from "react";

const isHTML = (str) => {
  if (typeof str !== "string") return false;
  const doc = new DOMParser().parseFromString(str, "text/html");
  return Array.from(doc.body.childNodes).some(node => node.nodeType === 1);
};

const SpecializedSEOIndustry = ({ icon, title, content }) => {
  return (
    <div className="rounded-xl ps-8 pe-12 py-8 border-white border-2">
      <img 
        src={icon} 
        alt={title} 
        className="service-icon rounded-lg w-[50px] shadow-[-2px_2px_3px_0px_rgba(51,51,51,0.12)]" 
      />
      <ul>
        <h3 className="min-h-[4rem] content-center py-8">
          <li className="lexend font-semibold text-[20px] bullet-qaorange list-disc ms-4 text-white">
            {title}
          </li>
        </h3>
      </ul>

      {/* Verifica si el content es HTML y renderiza en consecuencia */}
      {isHTML(content) ? (
        <p 
          className="text-white font-light whitespace-pre-line" 
          dangerouslySetInnerHTML={{ __html: content }} 
        />
      ) : (
        <p className="text-white font-light whitespace-pre-line">{content}</p>
      )}
    </div>
  );
};

export default SpecializedSEOIndustry;