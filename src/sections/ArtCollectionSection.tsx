import React, { Fragment, useState, useEffect } from 'react';
import uuid from 'react-uuid';

// ICONS
import { IoIosSearch } from 'react-icons/io';
import { ArrowDarkRight } from '@/assets/icons';

// COMPONENTS
import { SearchBar } from '@/components/forms';
import { ArtCard, Button, GridLoader } from '@/components/core';

// STATIC IMAGES
import { FOOTER_SPIRAL } from '@/assets/images';

// STORE
import { useAppDispatch, useAppSelector } from '@/store';
import { fetchArtworks, searchArtworks } from '@/store/slices/artworks';

const ArtCollectionSection = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(8);
  const [query, setQuery] = useState<string>('');

  const { loading, payload } = useAppSelector((state) => state.artwork);

  const fetchMoreArtworks = () => {
    const newlimit = limit + 4;
    setLimit(newlimit);

    setTimeout(() => {
      dispatch(fetchArtworks({ page, limit: newlimit }));
    }, 0);
  };

  const handleSearch = () => {
    if (query.length > 3) {
      dispatch(searchArtworks({ query }));
    }
  };

  const renderArtworks = () => {
    return payload?.data?.map((artwork) => {
      return (
        <div key={uuid()} className="col-span-12 col-span-lg-4 col-span-2xl-3">
          <ArtCard key={uuid()} artwork={artwork} />
        </div>
      );
    });
  };

  useEffect(() => {
    dispatch(fetchArtworks({ page, limit }));
  }, [dispatch]);

  useEffect(() => {
    handleSearch();
  }, [query]);

  return (
    <Fragment>
      <section id="arts" className="collection-section pdx-20 pdx-md-33">
        <div className="collection-section__header mgt-89">
          <div className="collection-section__header__content">
            <div className="collection-section__heading fw-bold">
              Art in the collection
            </div>

            <div className="collection-section__subheading">
              Browse a curated selection of art around the world, including
              museum exhibitions, gallery openings, upcoming and many more
            </div>
          </div>

          <div className="collection-section__actions">
            <SearchBar
              query={query}
              setQuery={setQuery}
              Icon={IoIosSearch}
              iconPosition="prepend"
            />
          </div>
        </div>

        {!loading && (
          <div className="collection-section__body mgt-50 grid gap-y-60 gap-x-md-33 grid-col-12">
            {renderArtworks()}
          </div>
        )}

        {loading && (
          <div className="mgt-50">
            <GridLoader />
          </div>
        )}

        <div className="grid place-items-center collection-section__footer">
          <Button
            title="Explore more"
            type="accent-inverse"
            Icon={<ArrowDarkRight />}
            classes={['collection-section__btn']}
            onClick={fetchMoreArtworks}
          />
        </div>

        <img
          src={FOOTER_SPIRAL}
          draggable={false}
          alt="spiral"
          className="collection-section__spiral"
        />
      </section>
    </Fragment>
  );
};

export { ArtCollectionSection as default };
