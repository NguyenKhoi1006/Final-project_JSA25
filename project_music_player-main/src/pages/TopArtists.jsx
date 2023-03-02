import React from 'react';

import { ArtistCard, Error, Loader } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading artists..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-center mt-4 mb-2">Top artists</h2>

      <div className="flex flex-wrap sm: justify-end gap-1">
        {data?.map((track) => <ArtistCard key={track.key} track={track} />)}
      </div>
    </div>
  );
};

export default TopArtists;
