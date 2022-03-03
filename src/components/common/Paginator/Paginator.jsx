import s from './Paginator.module.css';

const Paginator = ({currentPage, onPageChanged, totalUsersCount, pageSize}) => {

    const pagesCount = Math.ceil(totalUsersCount / pageSize);
        const pages = [];
        for (let i=1; i<=pagesCount; i++) {
            if (pages.length < 20) {
                pages.push(i);
            };
        };

    return (
        <div className={s.pagesList}>
            {pages.map(page => {
                return (
                <span className={currentPage === page ? s.selectedPage : s.page}
                onClick={() => onPageChanged(page)} key={page}>{page}</span>
                )
            })}
        </div>
    );
};

export default Paginator;