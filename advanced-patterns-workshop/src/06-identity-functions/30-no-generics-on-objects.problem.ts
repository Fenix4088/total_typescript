/**
 * fetchers is an object where you can optionally
 * pass keys that match the route names.
 *
 * BUT - how do we prevent the user from passing
 * fetchers that don't exist in the routes array?
 *
 * We'll need to change this to a function which takes
 * in the config as an argument.
 *
 * Desired API:
 *
 * const config = makeConfigObj(config);
 */



type Config<TRoutes extends readonly string[]> = {
  routes: TRoutes;
  fetchers: Record<TRoutes[number], () => any>;
};

function makeConfigObj<const TRoutes extends readonly string[]>(config: Config<TRoutes>) {
  return config;
}



export const configObj = makeConfigObj({
  routes: ["/", "/about", "/contact"],
  fetchers: {
    // @ts-expect-error
    "/does-not-exist": () => {
      return {};
    },
  },
});
