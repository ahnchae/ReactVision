import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import axios from 'axios';
import { GET_BRANCH_LIST, GET_BRANCH_DETAIL , ADD_BRANCH, GET_LOCAL_LIST} from 'actionTypes/ActionTypes';
import { carryBranchList, carryBranchDetail, addBranch, getBranchList, carryLocalList } from 'actions/index';

const getBranchListRequest = async (search) => {
    return await axios({
        method:"POST",
        url:"/bs/getBranchList",
        data:search
    })
    .then(response => response.data)
    .catch(error => console.log(error))
}

const getBranchDetailRequest = async (branchNo) => {
    return await axios({
         method:"GET",
         url:"/bs/getBranch/"+branchNo,
    })
    .then(response => response.data)
    .catch(error => console.log(error))
}

const getLocalListRequest = async () => {
    console.log("getLocalList :::::: ")
    return await axios({
        method:"GET",
        url:"/bs/getLocalList"
    })
    .then(response => response.data)
    .catch(error => console.log(error))
}

const addBranchRequest = async (data) => {
    return await axios({
        method:"POST",
        url:"/bs/addBranch",
        data: data
    })
    .then(response => response.data)
    .catch(error => console.log(error))
}





function* getBranchListFn({payload}){
   const brachList = yield call(getBranchListRequest, payload);
   yield put(carryBranchList(brachList));
}

function* getBranchDetailFn({payload}){
    const branch = yield call(getBranchDetailRequest, payload);
    yield put(carryBranchDetail(branch));
}

function* getLocalListFn(){
    const localList = yield call(getLocalListRequest);
    yield put(carryLocalList(localList));
}

function* addBranchFn({payload}){
    yield call(addBranchRequest, payload);
    yield put(getBranchList());
}




export function* getBranchListSaga(){
    yield takeEvery(GET_BRANCH_LIST, getBranchListFn);
}

export function* getBranchDetailSaga(){
    yield takeEvery(GET_BRANCH_DETAIL, getBranchDetailFn);
}

export function* getLocalListSaga(){
    yield takeEvery(GET_LOCAL_LIST, getLocalListFn);
}

export function* addBranchSaga(){
    yield takeEvery(ADD_BRANCH, addBranchFn);
}

export default function* rootSaga(){
    yield all([fork(getBranchListSaga),
                fork(getBranchDetailSaga),
                fork(addBranchSaga),
                fork(getLocalListSaga)]);
}