import React from "react";

const isHTML = (str) => {
  if (typeof str !== "string") return false;
  const doc = new DOMParser().parseFromString(str, "text/html");
  return Array.from(doc.body.childNodes).some(node => node.nodeType === 1);
};

const ArrowComponent = ({ title, text }) => {
  return (
    <>
      <h3 className="text-qablack font-bold text-[20px] flex pt-8 pb-4" id="ecommerce-seo">
        <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2 mt-2">
          <mask id="mask0_4516_36746" maskUnits="userSpaceOnUse" x="0" y="0" width="13" height="15">
            <rect width="13" height="15" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_4516_36746)">
            <path d="M0.528312 12.7707C0.355785 13.3458 0.269522 13.6333 0.343338 13.8017C0.407397 13.9478 0.537332 14.0546 0.693087 14.0891C0.872566 14.1289 1.13793 13.9885 1.66866 13.7077L12.0537 8.21398C12.4872 7.98463 12.704 7.86996 12.7749 7.71695C12.8366 7.58367 12.8366 7.43 12.7749 7.29673C12.704 7.14372 12.4872 7.02904 12.0537 6.79969L1.66866 1.3059C1.13793 1.02514 0.872567 0.884761 0.693087 0.924531C0.537331 0.959044 0.407396 1.06581 0.343337 1.21192C0.269521 1.38028 0.355783 1.66783 0.528308 2.24292L2.03849 7.27696C2.06413 7.36242 2.07695 7.40515 2.08205 7.44868C2.08657 7.48732 2.08657 7.52636 2.08205 7.565C2.07695 7.60853 2.06413 7.65126 2.03849 7.73671L0.528312 12.7707Z" fill="#1D1D1D"/>
          </g>
        </svg>
        {title}
      </h3>

      {/* Verifica si `text` es HTML y renderiza en consecuencia */}
      {isHTML(text) ? (
        <p 
          className="text-qablack text-base lg:pe-16 pb-4 px-8 lg:ps-0 lexend font-light" 
          dangerouslySetInnerHTML={{ __html: text }} 
        />
      ) : (
        <p className="text-qablack text-base lg:pe-16 pb-4 px-8 lg:ps-0 lexend font-light">{text}</p>
      )}
    </>
  );
};

export default ArrowComponent;