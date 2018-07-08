import * as ReadableApi from '../util/ApiProvider'

export const restorePassword = (uuid, password, confirmPassword, history) => async dispatch => {
  ReadableApi.restorePassword(uuid, password, confirmPassword).then((val) => {
    history.replace(`/app/restoreSuccess`)
  }).catch((reason) => {
    history.push('/app/restoreFailed');
  })
};
