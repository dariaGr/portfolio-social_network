import s from './Paginator.module.css';
import cn from 'classnames';
import { useState } from 'react';

const Paginator = ({currentPage, onPageChanged, totalItemsCount, pageSize, portionSize = 10}) => {

    const pagesCount = Math.ceil(totalItemsCount / pageSize);

    const pages = [];
    for (let i=1; i<=pagesCount; i++) {
        pages.push(i);
    };

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    // return (
    //     <div className={s.pagesList}>
    //         {pages.map(page => {
    //             return (
    //             <span className={currentPage === page ? s.selectedPage : s.page}
    //             onClick={() => onPageChanged(page)} key={page}>{page}</span>
    //             )
    //         })}
    //     </div>
    // );

    return (
        <div className={s.paginator}>
            {portionNumber > 1 && <button onClick={()=>{setPortionNumber(portionNumber - 1)}}>PREV</button>}
            {pages.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                  .map(page=>{
                        return (
                            <span className={cn({[s.selectedPage]: currentPage === page}, s.pageNumber)}
                                key={page} onClick={(e) =>{onPageChanged(page)}}>{page}
                            </span>
                        );
            })}
            {portionCount > portionNumber && <button onClick={()=>{setPortionNumber(portionNumber + 1)}}>NEXT</button>}
        </div>
    )
};

export default Paginator;