import React, { FC } from 'react';
import Sharer from 'sharer';

// COMPONENTS
import { IconButton } from '@/components/core';

// ICONS
import { ShareIcon } from '@/assets/icons';

const ShareButton = () => {
  const handleShare = () => {
    const Share = new Sharer();

    Share.run();
  };

  return <IconButton onClick={handleShare} Icon={<ShareIcon />} />;
};

export { ShareButton as default };
