import { useMemo } from 'react';
import { useWindowSize } from 'react-use';

const breakpoints = {
  tablet: 768,
  desktop: 992,
  widescreen: 1200,
  fullhd: 1408,
};

const useViewport = () => {
  const { width, height } = useWindowSize();

  const viewport = useMemo(() => {
    const isMobile = width < breakpoints.tablet || height < 500;

    return {
      isMobile,
      isTablet: !isMobile && width >= breakpoints.tablet,
      isTabletOnly:
        !isMobile && width < breakpoints.desktop && width >= breakpoints.tablet,
      isDesktop: !isMobile && width >= breakpoints.desktop,
      isDesktopOnly:
        !isMobile
        && width < breakpoints.widescreen
        && width >= breakpoints.desktop,
      isWidescreen: !isMobile && width >= breakpoints.widescreen,
      isWidescreenOnly:
        !isMobile
        && width < breakpoints.fullhd
        && width >= breakpoints.widescreen,
      isFullhd: !isMobile && width >= breakpoints.fullhd,
    };
  }, [height, width]);

  return viewport;
};

export { useViewport };
