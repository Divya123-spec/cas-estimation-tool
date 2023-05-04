import * as actionTypes from '../actions/ActionType';

const initialState = {
    reviewerPopup : false,
    approvalSucessPopup:false,
    exportInProgressShow:false,
    exportReadyShow:false,
    migrationPopup:false,
    migrationButtonPopup:false,
    pdfapprovalPopup:false,
    migrationApproveButtonPopup:false,
    staffingPopup:false,
    reworkModal:false

};


const UserSavedEstimateReducer = (state, action) => {
    state = state || initialState;
    switch (action.type) {
        case actionTypes.USER_SAVED_DATA_ESTIMATE:
            return {
                ...state,
                savedEstimateData: action.data,
                };
        case  actionTypes.USER_DASHBOARD_DATA:{
            return {
                ...state,
                dashBoardData : action.data,
            }
        }
        case  actionTypes.USER_DASHBOARD_DATA_RESET:{
            return {
                ...state,
                dashBoardData : {},
            }
        }case  actionTypes.USER_SAVED_DATA_ESTIMATE_RESET:{
            return {
                ...state,
                savedEstimateData : {},
            }
        }
        case  actionTypes.USER_REVIEWER_DATA:{
            return {
                ...state,
                reviewers : action.data,
            }
        }

        // Migration flow reducers
        case  actionTypes.REVIEWER_POPUP_SHOW:{
            return {
                ...state,
                reviewerPopup : true,
            }
        }
        case  actionTypes.REVIEWER_POPUP_HIDE:{
            return {
                ...state,
                reviewerPopup :false,
            }
        }
        case  actionTypes.REVIEWER_SUCESS_POPUP_SHOW:{
            return {
                ...state,
                reviewerSucessPopup : true,
            }
        }
        case  actionTypes.REVIEWER_SUCESS_POPUP_HIDE:{
            return {
                ...state,
                reviewerSucessPopup :false,
            }
        }
        
        case  actionTypes.SENT_FOR_REWORK_POPUP_SHOW:{
            return {
                ...state,
                reworkPopup :true,
            }
        }
        case  actionTypes.SENT_FOR_REWORK_POPUP_HIDE:{
            return {
                ...state,
                reworkPopup :false,
            }
        }

        case  actionTypes.MIGRATION_POPUP_SHOW:{
            return {
                ...state,
                migrationPopup :true,
            }
        }

        case  actionTypes.MIGRATION_POPUP_HIDE:{
            return {
                ...state,
                migrationPopup :false,
            }
        }

        case  actionTypes.MIGRATIONBUTTON_POPUP_SHOW:{
            return {
                ...state,
                migrationButtonPopup :true,
            }
        }

        case  actionTypes.MIGRATIONBUTTON_POPUP_HIDE:{
            return {
                ...state,
                migrationButtonPopup :false,
            }
        }
        case  actionTypes.MIGRATIONAPPROVEBUTTON_POPUP_SHOW:{
            return {
                ...state,
                migrationApproveButtonPopup :true,
            }
        }

        case  actionTypes.MIGRATIONAPPROVEBUTTON_POPUP_HIDE:{
            return {
                ...state,
                migrationApproveButtonPopup :false,
            }
        }

        case  actionTypes.SEND_FOR_APPROVAL_POPUP_SHOW:{
            return {
                ...state,
                approvalPopup :true,
            }
        }
        case  actionTypes.SEND_FOR_APPROVAL_POPUP_HIDE:{
            return {
                ...state,
                approvalPopup :false,
            }
        }

        case  actionTypes.SEND_FOR_REWORK_MODAL_SHOW:{
            return {
                ...state,
                reworkModal :true,
            }
        }
        case  actionTypes.SEND_FOR_REWORK_MODAL_HIDE:{
            return {
                ...state,
                reworkModal :false,
            }
        }
        case  actionTypes.SEND_FOR_PDFAPPROVAL_POPUP_SHOW:{
            return {
                ...state,
                pdfapprovalPopup :true,
              
            }
            
        }
        case  actionTypes.SEND_FOR_PDFAPPROVAL_POPUP_HIDE:{

            return {
                ...state,
                pdfapprovalPopup :false,
            }
        }

        case  actionTypes.SEND_FOR_APPROVAL_SUCESS_POPUP_SHOW:{
            return {
                ...state,
                approvalSucessPopup : true,
            }
        }
        case  actionTypes.SEND_FOR_APPROVAL_SUCESS_POPUP_HIDE:{
            return {
                ...state,
                approvalSucessPopup :false,
            }
        }
        case  actionTypes.EXPORT_INPROGRESS_POPUP_SHOW:{

            return {
                ...state,
                exportInProgressShow :true,
                exportReadyShow :false
            }
        }
        case  actionTypes.EXPORT_READY_POPUP_SHOW:{
            return {
                ...state,
                exportReadyShow :true,
                exportInProgressShow :false,
            }
        }
        case  actionTypes.EXPORT_POPUP_RESET:{
            return {
                ...state,
                exportReadyShow :false,
                exportInProgressShow :false,
            }
        }
       // staffing popup
        case  actionTypes.STAFFING_POPUP_SHOW:{
            return {
                ...state,
                staffingPopup : true,
            }
        }
        case  actionTypes.STAFFING_POPUP_HIDE:{
            return {
                ...state,
                staffingPopup :false,
            }
        }
        default:
            return state;
    }   
};
export default UserSavedEstimateReducer;