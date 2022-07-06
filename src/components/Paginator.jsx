

const Paginator = ({pageCount , baseUrl ,currentPage, justify = 'center'}) => {
    






    const renderPages = () => {
        let li = [];
        li.push(<li key={"page/prev"}  className= {Number(currentPage) > 1?"page-item": "page-item disabled" }>
                    <a className="page-link" href={`${baseUrl}${currentPage-1}`}>Ant.</a>
                    </li>)
        for (let i = 0; i < pageCount; i++) {
                 li.push( <li key={`page${i+1}`} className = { i+1===Number(currentPage)?"page-item active": 'page-item'}>
                                     <a className="page-link" href={`${baseUrl}${i+1}`}>{i+1}</a>
                         </li>);
        }

        li.push(
                    <li key={"page/next"}  className={Number(currentPage) < pageCount?"page-item":"page-item disabled"}>
                        <a className="page-link" href={`${baseUrl}${currentPage+1}`}>Sig.</a>
                    </li>)

        return li;
      };





    return     pageCount > 0 &&  <div className={`w-100 d-flex justify-content-${justify}`}>
                                        <nav  aria-label="Page navigation example overflow-hidden">
                                        <ul className="pagination pagination-lg d-flex flex-wrap  ">
                             
                                         { renderPages() }

                                        </ul>
                                        </nav>
                                    </div>
}


export default Paginator

