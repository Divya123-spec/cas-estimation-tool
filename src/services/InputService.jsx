import { baseUrl, baseUrlSPG } from "./ApiEndpoint";
import axios from "axios";

let headersConfig = "";

function authenticationToken() {
  let token = "";
  token = window.localStorage.getItem("auth2");
  headersConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
}
function authenticationTokenFetch() {
  let token = "";
  token = window.localStorage.getItem("auth2");
  headersConfig = {
    headers: new Headers({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    }),
  };
}
const inputService = {
  userLoginData: (TokenAcess) => {
    let url = baseUrl + "user/validateAccessAndFetchUserDetails";
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          accessToken: TokenAcess,
        },
      }),
    });
  },
  userDataDropDown: () => {
    authenticationToken();
    let url = baseUrl + "estimate/dropDownValues";
    return axios.get(url, headersConfig);
  },
  nonLaborCostStub: () => {
    authenticationToken();
    let url = baseUrl + "estimate/nonLaborCostStub";
    return axios.get(url, headersConfig);
  },

  addInputData: (userData) => {
    authenticationToken();
    let url = baseUrl + "estimate/createNewEstimate";
    return axios.post(url, userData, headersConfig);
  },

  addOutputData: (userData) => {
    authenticationToken();
    // let url = baseUrl + "estimate/calculateOutput";
    //testing
    let url = baseUrl + "estimate/calculateOutputAndSave";
    return axios.post(url, userData, headersConfig);
  },

  myEstimateData: (userData) => {
    authenticationToken();
    let url = baseUrl + "estimate/fetchMyEstimates";
    return axios.post(url, userData, headersConfig);
  },

  addOutputDataSave: (userData) => {
    authenticationToken();
    // headersConfig={headers: { "Content-Type": "application/json",'Authorization': `Bearer ${""}` }}
    let url = baseUrl + "estimate/saveOutput";
    return axios.post(url, userData, headersConfig);
  },

  sendForReviewData: (reviwerData) => {
    authenticationToken();
    let url = baseUrl + "estimate/sendForReview";
    return axios.post(url, reviwerData, headersConfig);
  },
  getDashBoardData: (userData) => {
    authenticationToken();
    let url = baseUrl + "estimate/fetchMyEstimates";
    return axios.post(url, userData, headersConfig);
  },
  getSavedEstimate: (esitmateId) => {
    authenticationToken();
    let url = baseUrl + "estimate/estimateById/" + esitmateId;
    return axios.get(url, headersConfig);
  },

  ///pdf dashboard--- used for the pdf data on dashboard

  getpdfdashboarddata: (estimateId) => {
    authenticationToken();
    let url = baseUrl + "estimate/fetchEstimateById/" + estimateId;
    return axios.get(url, headersConfig);
  },

  ///pdf dashboard

  fetchAllActiveReviewers: (userData) => {
    authenticationToken();
    let url = baseUrl + "user/fetchAllActiveReviewers";
    return axios.post(url, userData, headersConfig);
  },
  sendForRework: (userData) => {
    authenticationToken();
    let url = baseUrl + "estimate/sendForRework";
    return axios.post(url, userData, headersConfig);
  },
  sendForApprove: (userData) => {
    authenticationToken();
    let url = baseUrl + "estimate/approve";
    return axios.post(url, userData, headersConfig);
  },
  WeightedUtilizationInHours: () => {
    authenticationToken();
    let url = baseUrl + "ams/monthlyWeightedUtilizationInHours";
    return axios.get(url, headersConfig);
  },
  calculateTicketDistributionPercentageAndBaselineHoursForL2: (inputData) => {
    authenticationToken();
    let url =
      baseUrl +
      "refgeneral/calculateTicketDistributionPercentageAndBaselineHoursForL2";
    return axios.post(url, inputData, headersConfig);
  },
  calculateMinEnhWtHrsAndAdhocActivityWtPercentageAndYearOneBaselineTestingFTEs:
    (inputData) => {
      authenticationToken();
      let url =
        baseUrl +
        "ams/calculateMinEnhWtHrsAndAdhocActivityWtPercentageAndYearOneBaselineTestingFTEs";
      return axios.post(url, inputData, headersConfig);
    },
  calculateClientCloudLandscapeAPI: (inputData) => {
    authenticationToken();
    let url = baseUrl + "cloudAndComplexity/calculateClientCloudLandscape";
    return axios.post(url, inputData, headersConfig);
  },
  // Migration flow getFetch API
  getestimateForMigrationById: (estimateId) => {
    authenticationToken();
    //let url= baseUrl+'estimate/estimateForMigrationById/estimate:f761f09ea72c2deeab33847f1d0f3748'
    let url = baseUrl + "estimate/estimateForMigrationById/" + estimateId;
    return axios.get(url, headersConfig);
  },
  deleteData: (deleteId) => {
    authenticationToken();
    //let url = `https://estimation-services-local.wdc1a.ciocloud.nonprod.intranet.ibm.com/estimate/deleteEstimateById/${deleteId}`;
    let url = baseUrl + "estimate/deleteEstimateById/" + deleteId;
    return axios.delete(url, headersConfig);
  },
  //Feedback Api
  Feedbackdata: (feedbackData) => {
    authenticationToken();
    let url = baseUrl + "user/feedback";
    return axios.post(url, feedbackData, headersConfig);
  },
  exportDataFetchROM: (estimateId, filename) => {
    let token = "";
    token = window.localStorage.getItem("auth2");
    // authenticationTokenFetch();
    let url = baseUrl + "estimate/exportYear1ROMCostSummary/" + estimateId;
    // let url = 'https://casm-estimation-api-dev.wdc1a.ciocloud.nonprod.intranet.ibm.com/estimate/exportYear1ROMCostSummary'
    // return axios.get(url, headersConfig)

    fetch(url, {
      method: "get",
      headers: new Headers({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }),
    })
      .then((response) => {
        if (response.status != 200) {
          return "error";
        } else {
          return response.blob();
        }
      })
      .then((blob) => {
        if (blob == "error") {
          return "error";
        } else {
          return URL.createObjectURL(blob);
        }
      })
      .then((uril) => {
        if (uril == "error") {
          alert("Oops ! something went wrong Please try again.");
          return "error";
        } else {
          var link = document.createElement("a");
          link.href = uril;
          link.download = filename + ".xlsx";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      });
  },
  exportDataFetchOutput: (estimateId, filename) => {
    let token = "";
    token = window.localStorage.getItem("auth2");
    // authenticationTokenFetch();
    let url = baseUrl + "estimate/exportOutputEffort/" + estimateId;
    // let url = 'https://casm-estimation-api-dev.wdc1a.ciocloud.nonprod.intranet.ibm.com/estimate/exportYear1ROMCostSummary'
    // return axios.get(url, headersConfig)

    fetch(url, {
      method: "get",
      headers: new Headers({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }),
    })
      .then((response) => {
        if (response.status != 200) {
          return "error";
        } else {
          return response.blob();
        }
      })
      .then((blob) => {
        if (blob == "error") {
          return "error";
        } else {
          return URL.createObjectURL(blob);
        }
      })
      .then((uril) => {
        if (uril == "error") {
          alert("Oops ! something went wrong Please try again.");
          return "error";
        } else {
          var link = document.createElement("a");
          link.href = uril;
          link.download = filename + ".xlsx";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      })
      .catch(() => {
        alert("Oops ! something went wrong Please try again.");
        return "error";
      });
  },
  exportDataGenerateStaffing: (estimationId, filename, props) => {
    let token = "";
    token = window.localStorage.getItem("auth2");
    // authenticationTokenFetch();
    let url =
      baseUrlSPG + "estimate/exportStaffingPlanGenerator/" + estimationId;

    fetch(url, {
      method: "get",
      headers: new Headers({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }),
    })
      .then((response) => {
        //dynamic file name from API
        filename = response.headers
          .get("content-disposition")
          .split("filename=")[1]
          .trim();
        if (response.status != 200) {
          return "error";
        } else {
          return response.blob();
        }
      })
      .then((blob) => {
        if (blob == "error") {
          return "error";
        } else {
          return URL.createObjectURL(blob);
        }
      })
      .then((uril) => {
        props.hideScreenLoader();
        if (uril == "error") {
          alert("Oops ! something went wrong Please try again.");
          return "error";
        } else {
          var link = document.createElement("a");
          link.href = uril;
          // FileName coming from API along with extension
          link.download = filename;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          props.showGeneratestaffingPopup();
        }
      })
      .catch(() => {
        props.hideScreenLoader();
        alert("Oops ! something went wrong Please try again.");
        return "error";
      });
  },
  fetchDataForOpptNo: (inputDataFetchNo) => {
    let inputData = {
      data: {
        OPP_NBR: inputDataFetchNo,
      },
    };
    authenticationToken();
    let url = baseUrl + "estimate/fetchDataForOpptNo";
    return axios.post(url, inputData, headersConfig);
  },
};

export default inputService;
