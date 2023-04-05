import { useMemo } from "react";
import ReactPaginate from "react-paginate";
import "../styles/Paginate.css";

const Paginate = ({
  data,
  itemsPerPage,
  onChangeCurrentPageData,
  currentPage,
  onChangeCurrentPage,
}) => {
  //   const [currentPage, setCurrentPage] = useState(0);

  const onPageChange = ({ selected }) => {
    onChangeCurrentPage(selected);
    // console.log(onPageChange);
  };

  const pageCount = useMemo(
    () => Math.ceil(data?.length / itemsPerPage) || 0,
    [data?.length, itemsPerPage]
  );

  const startDisplay = useMemo(
    () => currentPage * itemsPerPage,
    [currentPage, itemsPerPage]
  );

  const endDisplay = useMemo(
    () => startDisplay + itemsPerPage,
    [startDisplay, itemsPerPage]
  );

  const currentPageData = useMemo(() => {
    const pageData = data.slice(startDisplay, endDisplay);
    onChangeCurrentPageData(pageData);
    return pageData;
  }, [
    // itemsPerPage,
    // currentPage,
    data,
    endDisplay,
    startDisplay,
    onChangeCurrentPageData,
  ]);

  return (
    <ReactPaginate
      pageCount={pageCount}
      marginPagesDisplayed={3}
      pageRangeDisplayed={3}
      onPageChange={onPageChange}
      activeClassName="item active"
      breakClassName="item"
      containerClassName="pagination"
      disabledClassName="disabled-page"
      nextClassName="item next"
      pageClassName="item pagination-page"
      previousClassName="item previous"
    />
  );
};

export default Paginate;
