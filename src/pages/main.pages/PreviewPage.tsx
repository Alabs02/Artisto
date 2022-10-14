import React, { Fragment, useEffect } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';

// ICONS
import { ArrowLeft } from '@/assets/icons';

// STATIC IMAGES
import { FOOTER_SPIRAL, ELLIPSE_IMG } from '@/assets/images';

// COMPONENTS
import { NavBar } from '@/components/navigation';
import { IconButton, Button, ShareButton } from '@/components/core';

// STORE
import { fetchArtwork } from '@/store/slices/artworks';
import { useAppDispatch, useAppSelector } from '@/store';

const PreviewPage = (): JSX.Element => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { fetching, artworkPayload } = useAppSelector((state) => state.artwork);

  const goBack = () => {
    navigate('/');
  };

  const renderImgSrc = (src: string) => {
    return src === null || src === undefined
      ? 'data:image/gif;base64,R0lGODlhBAAFAPQAAHdtan91b4x5eIx/fZl/d4l+gJKNj52PjISLlo2TnZydpZyepp+iqLC1vL/CxsDBxsTJ0MXO1M7V2tfa3gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAEAAUAAAURoMI4DxRJ04IkTWEAg3AERAgAOw=='
      : src;
  };

  const renderData = (data: any) => {
    return data === null || data === undefined ? 'No Data' : data;
  };

  useEffect(() => {
    if (id?.length) {
      dispatch(fetchArtwork({ id: parseInt(id, 10) }));
    }
  }, [dispatch]);

  return (
    <Fragment>
      <div className="preview-page">
        <NavBar />

        <div className="preview-page__body mgt-96 pdx-20 pdx-md-48">
          <div className="preview-page__panel mgb-30">
            <IconButton onClick={goBack} Icon={<ArrowLeft />} />

            <ShareButton />
          </div>

          {fetching && (
            <div className="grid gap-x-40 grid-col-12">
              <div className="col-span-12 col-span-lg-4 col-span-2xl-3">
                <div
                  className="ssc ssc-square"
                  style={{
                    height: 400,
                    borderTopLeftRadius: 100,
                    borderBottomRightRadius: 100,
                  }}
                ></div>
              </div>

              <div className="col-span-12 col-span-lg-8 col-span-2xl-9">
                <div className="ssc-wrapper">
                  <div className="ssc-head-line wf-90 mgb-30"></div>
                  <div className="ssc-line wf-95 mgb-10"></div>
                  <div className="ssc-line wf-90 mgb-10"></div>
                  <div className="ssc-line wf-85 mgb-10"></div>
                  <div className="ssc-line wf-80 mgb-10"></div>
                  <div className="ssc-line wf-75 mgb-10"></div>
                  <div className="ssc-line wf-70 mgb-10"></div>
                  <div className="ssc-line wf-65 mgb-10"></div>
                  <div className="ssc-line wf-60 mgb-10"></div>
                  <div className="ssc-line wf-50 mgb-10"></div>
                  <div className="ssc-line wf-45 mgb-10"></div>
                  <div className="ssc-line wf-30"></div>

                  <div className="mgt-30 d-flex">
                    <div
                      className="ssc-square h-60  wf-30 mgr-30"
                      style={{
                        borderTopRightRadius: 30,
                        borderBottomLeftRadius: 30,
                      }}
                    ></div>
                    <div className="ssc-line wf-30 mbs"></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {!fetching && (
            <div className="grid gap-x-40 grid-col-12">
              <div className="col-span-12 col-span-lg-3">
                <div className="preview-page__card">
                  <img
                    src={renderImgSrc(artworkPayload.data?.thumbnail?.lqip)}
                    alt={renderData(artworkPayload.data?.thumbnail?.alt_text)}
                  />
                </div>
              </div>

              <div className="col-span-12 col-span-lg-9">
                <div className="preview-page__heading mgb-20 mgt-30 mgt-md-0">
                  {renderData(artworkPayload.data?.title)}
                </div>

                <div className="preview-page__copy">
                  {renderData(artworkPayload.data?.credit_line)}
                </div>

                <div className="preview-page__footer">
                  <Button
                    title={'Explore arts'}
                    type={'accent-inverse'}
                    classes={['preview-page__btn mgr-lg-44']}
                    onClick={goBack}
                  />

                  <NavLink to="/" className="btn-link text-white">
                    Explore arts
                  </NavLink>
                </div>
              </div>
            </div>
          )}

          <div className="grid h-100"></div>
        </div>

        <img
          src={ELLIPSE_IMG}
          draggable={false}
          alt="footer ellipse"
          className="preview-page__ellipse"
        />

        <img
          src={FOOTER_SPIRAL}
          draggable={false}
          alt="footer spiral"
          className="preview-page__spiral"
        />
      </div>
    </Fragment>
  );
};

export { PreviewPage as default };
