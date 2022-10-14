import React, { Fragment, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { IArtwork } from '@/store/slices/artworks';

interface IProps {
  artwork: IArtwork;
}

const ArtCard: FC<IProps> = ({ artwork }) => {
  const navigate = useNavigate();

  const getMonth = (dateString: string) => {
    const date = new Date(dateString);

    return date.toLocaleString('default', { month: 'long' });
  };

  const getFullYear = (dateString: string) => {
    const date = new Date(dateString);

    return date.getFullYear();
  };

  const renderImgSrc = (src: string) => {
    return src === null || src === undefined
      ? 'data:image/gif;base64,R0lGODlhBAAFAPQAAHdtan91b4x5eIx/fZl/d4l+gJKNj52PjISLlo2TnZydpZyepp+iqLC1vL/CxsDBxsTJ0MXO1M7V2tfa3gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAEAAUAAAURoMI4DxRJ04IkTWEAg3AERAgAOw=='
      : src;
  };

  const renderData = (data: any) => {
    return data === null || data === undefined ? 'No Data' : data;
  };

  const viewArtwork = () => {
    const slug = artwork.title.toLowerCase().replace(/[^a-z]+/g, '-');
    navigate(`/preview/${slug}/${artwork.id}`);
  };

  return (
    <Fragment>
      <div className="art-card" onClick={viewArtwork}>
        <div className="art-card__media">
          <img
            src={renderImgSrc(artwork.thumbnail?.lqip)}
            alt={renderData(artwork.thumbnail?.alt_text)}
          />
        </div>

        <div className="art-card__content">
          <div className="art-card__heading mgb-30">
            {renderData(artwork.title)}
          </div>

          <div className="art-card__subheading mgb-7">
            {renderData(artwork.date_start)} - {renderData(artwork.date_end)}{' '}
            {getMonth(artwork.timestamp)}, {getFullYear(artwork.timestamp)}
          </div>

          <div className="art-card__subheading">
            {renderData(artwork.artist_title)},{' '}
            {renderData(artwork.place_of_origin)}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export { ArtCard as default };
