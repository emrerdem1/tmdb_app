import { Col, Row } from 'antd';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { MovieDBFeatures } from '../common/MovieDB.constants';
import { TMovieListItemProps } from '../common/MovieDB.types';
import { getMovieList } from '../common/MovieDB.utils';
import MoviePosterView from './MoviePosterView';

const MovieListView: React.FC = () => {
  const [movieList, setMovieList] = useState<TMovieListItemProps[]>([]);

  useEffect(() => {
    getMovieList(MovieDBFeatures.POPULAR).then((response) => {
      setMovieList(response.results);
      console.log(response.results);
    });
  }, []);

  return (
    <Row gutter={[20, 24]}>
      {movieList.map((movie: TMovieListItemProps, idx: number) => (
        <Col
          key={movie.backdrop_path + idx}
          xs={12}
          sm={8}
          md={6}
          lg={5}
          xl={4}
        >
          <MoviePosterView movie={movie} />
        </Col>
      ))}
    </Row>
  );
};

export default MovieListView;
