export const getUrlToFetchContent = (url) => {
  if (!url) {
    return '/home';
  }

  return `/${url.split('/')[1]}`;
};

export const isPreview = (path) => path.indexOf('preview') > 0;
