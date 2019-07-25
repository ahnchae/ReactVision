import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import axios from 'axios';
import { carryHRCardList,
         carryAppointList, 
         getAppointList, 
         carrySimpleHRCard, 
         getHRCardList,
         carryWorkAttitudeList,
         carryWorkAttitudeCodeList,
         getWorkAttitudeList,
         getWorkAttitudeCodeList,
         carryDepartmentList, 
         getDepartmentList} from 'actions/index';
import { GET_HRCARD_LIST, 
         GET_APPOINT_LIST, 
         ADD_APPOINTMENT, 
         GET_SIMPLE_HRCARD_BY_EMPLOYEENO, 
         ADD_HRCARD,
         GET_WORKATTITUDE_LIST,
         GET_WORKATTITUDE_CODE_LIST,
         ADD_WORKATTITUDE,
         UPDATE_APPOINTMENT,
         ADD_WORKATTITUDE_CODE,
         GET_DEPARTMENT_LIST,
         ADD_DEPARTMENT,
         CONVERT_DEPART_USAGE_STATUS,
         UPDATE_WORK_ATTITUDE, 
         UPDATE_WORK_ATTITUDE_CODE,} from "actionTypes/ActionTypes";

const updateWorkAttitudeCodeRequest = async (_data) => {
    await axios({
        method:"POST",
        url:"/hr/modifyWorkAttitudeCode",
        data:_data
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
}

const updateWorkAttitudeRequest = async (_data) => {
    await axios({
        method:"POST",
        url:"/hr/modifyWorkAttitude",
        data:_data
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
}

const convertDepartUsageRequest = async (_data) => {
    await axios({
        method:"POST",
        url:"/hr/convertDepartmentUsageStatus",
        data:_data
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
}

const addDepartmentRequest = async (_data) => {
    await axios({
        method:"POST",
        url:"/hr/addDepartment",
        data:_data
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
}

const getDepartmentListRequest = async (_data) => {
    return await axios({
        method:"POST",
        url:"/hr/getDepartmentList",
        data:_data
    })
    .then(response => response.data)
    .catch(error => console.log(error))
}

const addWorkAttitudeCodeRequest = async (_data) => {
    await axios({
        method:"POST",
        url:"/hr/addWorkAttitudeCode",
        data:_data
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
}

const updateAppointmentRequest = async (_data) => {
    await axios({
        method:"POST",
        url:"/hr/modifyAppointment",
        data:_data
    })
    .then(response => console.log(response))
    .catch(error => console.log(error));
}

const addWorkAttitudeRequest = async (_data) => {
    await axios({
        method:"POST",
        url:"/hr/addWorkAttitude",
        data:_data
    })
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
}

const getWorkAttitudeCodeListRequest = async (search) => {
    return await axios({
        method:"POST",
        url:"/hr/getWorkAttitudeCodeList",
        data: search
    })
    .then(response => response.data)
    .catch(error => console.log(error))
}

const getWorkAttitude = async (search) => {
    return await axios({
        method:"POST",
        url:"/hr/getWorkAttitudeList",
        data:search
    })
    .then(response => response.data)
    .catch(error => console.log(error))
}

const addHRCardRequest = async (_data) => {
    await axios({
        method:"POST",
        url:"/hr/addHumanResourceCard",
        data:_data
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
}

const getSimpleHRCardDetailRequest = async (employeeNo) => {
    return await axios({
        method: "GET",
        url: "/hr/getSimpleHumanResourceCardDetail/"+employeeNo
    })
    .then(response => response.data)
    .catch(error => console.log(error))
}

const getHRCardListRequest = async (search) => {
    return await axios({
        method:"POST",
        url:"/hr/getHumanResourceCardList",
        data:search
    })
    .then(response => response.data)
    .catch(error => console.log(error));
}

const addAppointmentRequest = async (_data) => {
    await axios({
        method:"POST",
        url:"/hr/addAppointment",
        data:_data
    })
    .then(response => console.log(response))
    .catch(error => console.log(error));
}

const getAppointListRequest = async (search) => {
    return await axios({
        method:"POST",
        url:"/hr/getAppointmentList",
        data:search
    })
    .then(response => response.data)
    .catch(error => console.log(error));
}

function* updateWorkAttitudeCode({payload}){
    yield call(updateWorkAttitudeCodeRequest, payload);
    yield put(getWorkAttitudeCodeList({searchKeyword:null}));
}

function* updateWorkAttitudeFn({payload}){
    yield call(updateWorkAttitudeRequest, payload);
    yield put(getWorkAttitudeList({searchKeyword:null}));
}

function* convertDepartUsageFn({payload}){
    yield call(convertDepartUsageRequest, payload);
    yield put(getDepartmentList({searchKeyword:null}));
}

function* addDepartmentFn({payload}){
    yield call(addDepartmentRequest, payload);
    yield put(getDepartmentList({searchKeyword:null}));
}

function* getDepartmentListFn({payload}){
    const departList = yield call(getDepartmentListRequest, payload);
    yield put(carryDepartmentList(departList));
}

function* addWorkAttitudeCodeFn({payload}){
    yield call(addWorkAttitudeCodeRequest, payload);
    yield put(getWorkAttitudeCodeList({searchKeyword:null}));
}

function* updateAppointmentFn({payload}){
    yield call(updateAppointmentRequest, payload);
    yield put(getAppointList({searchKeyword:null}));
}

function* addWorkAttitudeFn({payload}){
    yield call(addWorkAttitudeRequest, payload);
    yield put(getWorkAttitudeList({searchKeyword:null}));
}

function* getWorkAttitudeCodeListFn({payload}){
    const workAttitudeCodeList = yield call(getWorkAttitudeCodeListRequest, payload);
    yield put(carryWorkAttitudeCodeList(workAttitudeCodeList));
}

function* getWorkAttitudeListFn({payload}){
    const workAttitudeList = yield call(getWorkAttitude, payload);
    yield put(carryWorkAttitudeList(workAttitudeList));
}

function* addHRcardFn({payload}){
    yield call(addHRCardRequest, payload);
    yield put(getHRCardList({searchKeyword:null}))
}

function* getSimpleHRCardDetailFn({payload}){
    const SimpleHRCard = yield call(getSimpleHRCardDetailRequest, payload);
    yield put(carrySimpleHRCard(SimpleHRCard))
}

function* getHRCardListFn({payload}){
    const HRCardList = yield call(getHRCardListRequest, payload);
    yield put(carryHRCardList(HRCardList));
}

function* addAppointmentFn({payload}){
    yield call(addAppointmentRequest, payload);
    yield put(getAppointList({searchKeyword:null}))
}

function* getAppointListFn({payload}){
    console.log(payload);
    const appointList = yield call(getAppointListRequest, payload);
    yield put(carryAppointList(appointList));
}

export function* updateWorkAttitudeCodeSaga(){
    yield takeEvery(UPDATE_WORK_ATTITUDE_CODE, updateWorkAttitudeCode);
}

export function* updateWorkAttitudeSaga(){
    yield takeEvery(UPDATE_WORK_ATTITUDE, updateWorkAttitudeFn);
}

export function* convertDepartUsageSaga(){
    yield takeEvery(CONVERT_DEPART_USAGE_STATUS, convertDepartUsageFn);
}

export function* addDepartmentSaga(){
    yield takeEvery(ADD_DEPARTMENT, addDepartmentFn);
}

export function* getDepartmentListSaga(){
    yield takeEvery(GET_DEPARTMENT_LIST, getDepartmentListFn);
}

export function* addWorkAttitudeCodeSaga(){
    yield takeEvery(ADD_WORKATTITUDE_CODE, addWorkAttitudeCodeFn);
}

export function* updateAppointmentSaga(){
    yield takeEvery(UPDATE_APPOINTMENT, updateAppointmentFn);
}

export function* addWorkAttitudeSaga(){
    yield takeEvery(ADD_WORKATTITUDE, addWorkAttitudeFn);
}

export function* getWorkAttitudeCodeListSaga(){
    yield takeEvery(GET_WORKATTITUDE_CODE_LIST, getWorkAttitudeCodeListFn);
}

export function* getWorkAttitudeListSaga(){
    yield takeEvery(GET_WORKATTITUDE_LIST, getWorkAttitudeListFn);
}

export function* addHRCardSaga(){
    yield takeEvery(ADD_HRCARD, addHRcardFn);
}

export function* getSimpleHRCardDetailSaga(){
    yield takeEvery(GET_SIMPLE_HRCARD_BY_EMPLOYEENO, getSimpleHRCardDetailFn);
}

export function* getHRCardListSaga(){
    yield takeEvery(GET_HRCARD_LIST, getHRCardListFn);
}

export function* addAppointmentSaga(){
    yield takeEvery(ADD_APPOINTMENT, addAppointmentFn);
}

export function* getAppointListSaga(){
    yield takeEvery(GET_APPOINT_LIST, getAppointListFn)
}

export default function* rootSaga(){
    yield all([
            fork(getHRCardListSaga),
            fork(addAppointmentSaga),
            fork(getAppointListSaga),
            fork(getSimpleHRCardDetailSaga),
            fork(addHRCardSaga),
            fork(getWorkAttitudeListSaga),
            fork(getWorkAttitudeCodeListSaga),
            fork(addWorkAttitudeSaga),
            fork(updateAppointmentSaga),
            fork(addWorkAttitudeCodeSaga),
            fork(getDepartmentListSaga),
            fork(addDepartmentSaga),
            fork(convertDepartUsageSaga),
            fork(updateWorkAttitudeSaga),
            fork(updateWorkAttitudeCodeSaga)]);
}