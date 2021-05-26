import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Card from "../Card/Card";
import EmptyState from "../EmptyState/EmptyState";
import Profile from "../Profile/Profile";
import "./Main.css";

function Main(props) {
  const [offset, setOffset] = useState(0);
	const [counter, setCounter] = useState(0);
	const perPage = 4;
	let repositories = props.user.repositories;

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage);
    setCounter(getCount(selectedPage));
  };

  function getCount(page) {
    let currentPage = page + 1;
    let lastIndex = 0;
    if (currentPage * perPage > props.repos.length) {
      lastIndex = currentPage * perPage - props.repos.length;
      setCounter(lastIndex);
      return true;
    }
  }

  return (
    <section className="main">
      {!props.isLoading && props.user.name && (
        <>
          <Profile
            name={props.user.name}
            login={props.user.login}
            avatar={props.user.avatar}
            followers={props.user.followers}
            following={props.user.following}
            link={props.user.link}
          />
          {repositories === 0 ? (
            <div className="main__container main__container-empty">
              <EmptyState />
            </div>
          ) : (
            <div className="main__container">
              <h1 className="main__header">
                Repositories ({repositories})
              </h1>
              {props.repos
                .slice(offset * perPage, offset * perPage + perPage)
                .map((repo) => (
                  <Card
                    repo={repo}
                    title={repo.name}
                    description={repo.description}
                    link={repo.html_url}
                    key={repo.id}
                  />
                ))}
              {repositories > perPage && (
                <div className="main__paginate">
                  {`${offset * perPage + 1}-${
                    counter ? repositories : (offset + 1) * perPage
                  } of ${repositories}`}
                  <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={Math.ceil(props.repos.length / perPage)}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={2}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    activeClassName={"pagination__element-active"}
                    pageClassName={"pagination__element"}
                  />
                </div>
              )}
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default Main;
