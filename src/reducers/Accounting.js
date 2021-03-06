import {
    GET_VENDOR_LIST, 
    CARRY_VENDOR_LIST, 
    ADD_VENDOR, 
    GET_VENDOR, 
    CARRY_VENDOR, 
    UPDATE_VENDOR, 
    GET_CARD_LIST, 
    CARRY_CARD_LIST,
    ADD_CARD,
    GET_CARD,
    CARRY_CARD,
    GET_ACCOUNT_LIST,
    CARRY_ACCOUNT_LIST,
    ADD_ACCOUNT,
    CLEAN_STORE_STATE,
    GET_VENDOR_BANK,
    GET_VENDOR_ADDRESS,
    CARRY_VENDOR_BANK,
    CARRY_VENDOR_ADDRESS,
    UPDATE_CARD,
    GET_CHECK_ACCOUNT_LIST,
    CARRY_CHECK_ACCOUNT_LIST,
    GET_ACCOUNT,
    CARRY_ACCOUNT,
    CARRY_STATEMENT_LIST,
    CARRY_STATEMENT,
    CARRY_SALARY_LIST,
    CARRY_DUPLICATE_SALARYDATE,
    CARRY_SALARY,
    CARRY_SALARY_BOOK_LIST,
    CARRY_ANALYZE_SALARY_BOOK_LIST,
} from'../actionTypes/ActionTypes';

const INIT_STATE = {
    loader: false,
};

export default (state = INIT_STATE, action) => {
    switch(action.type){

        case GET_VENDOR_LIST : {
            return{
                ...state
            }
        }

        case CARRY_VENDOR_LIST : {
            return{
                ...state,
                VendorList: action.payload
            }
        }

        case ADD_VENDOR : {
            return{
                ...state
            }
        }

        case GET_VENDOR : {
            return{
                ...state
            }
        }

        case CARRY_VENDOR : {
            return{
                ...state,
                vendorInfo : action.payload
            }
        }

        case UPDATE_VENDOR : {
            return{
                ...state
            }
        }

        case GET_CARD_LIST : {
            return{
                ...state
            }
        }

        case CARRY_CARD_LIST : {
            return{
                ...state,
                cardList: action.payload
            }
        }
        
        case ADD_CARD : {
            return{
                ...state
            }
        }
        
        case GET_CARD : {
            return{
                ...state
            }
        }

        case CARRY_CARD : {
            return{
                ...state,
                cardInfo : action.payload
            }
        }
        
        case GET_ACCOUNT_LIST : {
            return{
                ...state
            }
        }

        case CARRY_ACCOUNT_LIST : {
            return{
                ...state,
                accountList: action.payload
            }
        }        
        
        case ADD_ACCOUNT : {
            return{
                ...state
            }
        }

        //원하는 store의 state값 날리기
        case CLEAN_STORE_STATE : {
            return{
                ...state,
                [action.payload]:null
            }
        }

        case GET_VENDOR_BANK : {
            return{
                ...state
            }
        }

        case CARRY_VENDOR_BANK : {
            return{
                ...state,
                vendorBank : action.payload
            }
        }

        case GET_VENDOR_ADDRESS : {
            return{
                ...state
            }
        }

        case CARRY_VENDOR_ADDRESS : {
            return{
                ...state,
                vendorAddress : action.payload
            }
        }

        case UPDATE_CARD : {
            return{
                ...state
            }
        }

        case GET_CHECK_ACCOUNT_LIST : {
            return{
                ...state
            }
        }

        case CARRY_CHECK_ACCOUNT_LIST : {
            return{
                ...state,
                checkAccountList: action.payload
            }
        }
        
        case GET_ACCOUNT : {
            return{
                ...state
            }
        }

        case CARRY_ACCOUNT : {
            return{
                ...state,
                accountInfo : action.payload
            }
        }

        case CARRY_STATEMENT_LIST : {
            return{
                ...state,
                statementList: action.payload
            }
        }

        case CARRY_STATEMENT : {
            return{
                ...state,
                statementInfo : action.payload
            }
        }

        case CARRY_SALARY_LIST : {
            return{
                ...state,
                salaryList: action.payload
            }
        }

        case CARRY_DUPLICATE_SALARYDATE : {
            return{
                ...state,
                salaryDateResult: action.payload
            }
        }

        case CARRY_SALARY : {
            return{
                ...state,
                salaryInfo : action.payload
            }
        }

        case CARRY_SALARY_BOOK_LIST : {
            return{
                ...state,
                salaryBookList: action.payload
            }
        }

        case CARRY_ANALYZE_SALARY_BOOK_LIST : {
            return{
                ...state,
                analyzeSalaryBookList: action.payload
            }
        }

        default : {
            return{
                ...state
            }
        }
    }
}