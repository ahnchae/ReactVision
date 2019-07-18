import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import axios from 'axios';
import { GET_GROUP_CODE_LIST, GET_CODE_LIST, GET_FOR_CODE_DETAIL } from "actionTypes/ActionTypes";
import { carryGroupCodeList, carryCodeList, carryForCodeDetail } from "actions/Code";

const getGroupCodeListAxios = async () =>{
    //console.log("sagas/Code.js getGroupCodeList() start...");
    return await axios({
        method:"POST",
        url:"/code/getGroupCodeList",
    })
    .then(response => response.data)
    .catch(error => console.log(error))
}

const getCodeListAxios = async (search) =>{
    return await axios({
        method:"POST",
        url:"/code/getCodeList",
        data : search
    })
    .then(response => response.data)
    .catch(error => console.log(error))
}

function* getGroupCodeList(){
    //console.log("sagas/Code.js getGroupCodeList() 실행");
    const groupCodeList = yield call(getGroupCodeListAxios);
    yield put(carryGroupCodeList(groupCodeList));
}

function* getCodeList(action){
    const codeList = yield call(getCodeListAxios, action.payload);
    yield put(carryCodeList(codeList));
}

function* getForCodeDetail(action){
    const listForCodeDetail = yield call(getCodeListAxios, action.payload);
    yield put(carryForCodeDetail(listForCodeDetail));
}

export function* getCodeListSaga(){
    console.log("/sagas/Code.js getCodeListSaga() 실행☆")
    yield takeEvery(GET_CODE_LIST, getCodeList);
}

export function* getGroupCodeListSaga(){
    //console.log("/sagas/Code.js getGroupCodeListSaga() 실행");
    yield takeEvery(GET_GROUP_CODE_LIST, getGroupCodeList);
}

export function* getForCodeDetailSaga(){
    yield takeEvery(GET_FOR_CODE_DETAIL, getForCodeDetail)
}

export default function* rootSaga(){
    console.log("/sagas/Code.js rootSaga() 실행")
    yield all([fork(getGroupCodeListSaga), 
               fork(getCodeListSaga),
               fork(getForCodeDetailSaga)
        ]);
}