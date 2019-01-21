/**
 * @providesModule ReduxActions
 */

export const LOADER_SET = 'loader/SET';

export const loaderSet = state => ({
    type: LOADER_SET,
    state
});