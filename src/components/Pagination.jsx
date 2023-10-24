
import React from 'react';
import './Pagination.css'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button key={i} onClick={() => onPageChange(i)} className={i === currentPage ? 'active' : ''}>
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="pagination">
      {currentPage !== 1 && <button onClick={() => onPageChange(currentPage - 1)}>Назад</button>}
      {renderPaginationButtons()}
      {currentPage !== totalPages && <button onClick={() => onPageChange(currentPage + 1)}>Вперед</button>}
    </div>
  );
};

export default Pagination;
