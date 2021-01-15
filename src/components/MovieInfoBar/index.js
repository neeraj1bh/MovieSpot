import React from "react";
import { calcTime, convertMoney } from "../../helpers";
import { Link } from "react-router-dom";
import { Wrapper, Content, Similar } from "./MovieInfoBar.styles";
import PropTypes from "prop-types";

const MovieInfoBar = ({ time, budget, revenue, released, id, similar }) => (
  <Wrapper>
    <Content>
      <p>Running time: {calcTime(time)}</p>
      <p>Budget: {convertMoney(budget)}</p>
      <p>Revenue: {convertMoney(revenue)}</p>
      <p>Release Date: {released}</p>
    </Content>
    {/* {console.log(similar)} */}
    <Similar>
      {similar.results.length > 0 ? (
        <Link
          to={{
            pathname: `${id}/similar/`,
            state: { similarMovie: similar },
          }}
          style={{ textDecoration: "inherit" }}
        >
          <p className="similar">Similar Movies</p>
        </Link>
      ) : (
        <p className="similar">No Similar Movies</p>
      )}
    </Similar>
  </Wrapper>
);

MovieInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
};
export default MovieInfoBar;
