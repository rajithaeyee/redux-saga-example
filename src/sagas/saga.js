
import { takeEvery,takeLatest, delay, put } from 'redux-saga/effects';

function* incrementAsync(){
    yield delay(1000);
    yield put({type:'INCREMENT_ASYNC'});
}

export function* watchIncrement(){
 yield takeEvery('INCREMENT', incrementAsync);
 //yield takeLatest('INCREMENT', incrementAsync);
}
