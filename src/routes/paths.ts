function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_HOMEPAGE = '/';


export const PATH_PAGE = {
  page404: '/404',
  page500: '/500',
  components: '/components',
};

export const PATH_HOMEPAGE = {
  root: ROOTS_HOMEPAGE,
  general: {
    app: path(ROOTS_HOMEPAGE, '/app'),
  },
  projekte: path(ROOTS_HOMEPAGE, '/projekte'),
  ausbildung: path(ROOTS_HOMEPAGE, '/ausbildung')
};
