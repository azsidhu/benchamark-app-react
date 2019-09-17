import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Pagination from "react-js-pagination";
import "@fortawesome/fontawesome-free/css/all.css";
import C from "../../utils/constants";
import { setFacebookPages, fetchFacebookPages } from "./FacebookPagesActions";

const FacebookPages = ({
  jwt,
  facebookPages,
  count,
  setFacebookPages,
  fetchFacebookPages
}) => {
  const [currentPage, setCurrentPage] = useState(null);
  useEffect(() => {
    fetchFacebookPages(jwt, currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const handlePageChange = currentPage => {
    setCurrentPage(currentPage);
  };

  return (
    <div>
      <h2 className="text-center mt-3">Pages</h2>
      <div className="d-flex justify-content-end">
        <div className="form-group row">
          <label className="col-sm-2 col-form-label" htmlFor="search">
            Search:{" "}
          </label>
          <div className="col-sm-10">
            <input className="form-control" id="search" type="text" />
          </div>
        </div>
      </div>
      <table className="table table-bordered mb-3">
        <thead className="thead-dark">
          <tr>
            <th>Page</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {facebookPages.map(page => (
            <tr key={page.id}>
              <td>{page.name}</td>
              <td>
                <button className="btn btn-success">
                  <span className="fas fa-snowflake"></span> Load
                </button>{" "}
                <button className="btn btn-info">
                  <span className="fas fa-eye"></span> View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-center">
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={C.PAGE_SIZE}
          totalItemsCount={count}
          pageRangeDisplayed={C.PAGE_RANGE_DISPLAYED}
          onChange={handlePageChange}
          itemClass="page-item"
          linkClass="page-link"
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    jwt: state.user.auth.access,
    facebookPages: state.FacebookPagesReducer.facebookPages,
    count: state.FacebookPagesReducer.count
  };
};

const mapDispatchToProps = {
  setFacebookPages,
  fetchFacebookPages
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FacebookPages);
