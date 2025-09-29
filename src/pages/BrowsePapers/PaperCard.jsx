import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaperCard = ({ paper }) => {
  const navigate = useNavigate();

  const handleViewPaper = () => {
    navigate(`/readresearch/${paper._id}`);
  };

  return (
    <div className="bg-white p-7 mb-6 w-full">
      <h2 className="text-[1.35rem] font-semibold">{paper.title}</h2>
      {/* Show all authors with name and affiliation */}
      <div className="mb-1 text-lg">
        {Array.isArray(paper.authors) && paper.authors.length > 0 && (
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            {paper.authors.map((author, idx) => (
              <span key={idx} className="text-[#DD2626]">
                {author.name}
                {author.affiliation ? `, ${author.affiliation}` : ""}
                {idx < paper.authors.length - 1 ? ", " : ""}
              </span>
            ))}
          </div>
        )}
      </div>
      {/* Optionally, you can remove the next <p> if not needed */}
      {/* <p className="text-sm mb-2">
        {paper.authors && Array.isArray(paper.authors)
          ? paper.authors.map(a => a.name).join(', ')
          : paper.authors}
      </p> */}
      <p className="text-sm text-[#000000] line-clamp-2 border-[#BAB7B7] border-l-4 pl-2 mt-4 whitespace-pre-wrap">
        {paper.abstract}
      </p>

      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-500">
          {(() => {
            const date = new Date(paper.publicationDate);
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${day}-${month}-${year}`;
          })()}
        </p>
        <button
          onClick={handleViewPaper}
          className="border-2 h-[42px] w-[150px] text-[#202020] border-[#202020] my-2 px-4 py-1.5 font-semibold text-[12px] hover:bg-black hover:text-white transition"
        >
          VIEW PAPER &gt;
        </button>
      </div>
    </div>
  );
};

export default PaperCard;
