let baseUrlLocal = "";
let baseUrlSPGLocal =""
let basePort = window.location.origin;
// API host in PROD Environment
if (basePort === "https://hcmestimator.dal1a.cirrus.ibm.com") {
    baseUrlLocal = "https://hcm-estimation-api-prod.dal1a.cirrus.ibm.com/";
    baseUrlSPGLocal = "https://hcm-spg-api-prod.dal1a.cirrus.ibm.com/";
}// API host in STAGING Environment to validate PROD build before rollout in PROD
else if (basePort === "https://hcmestimatorstaging.dal1a.ciocloud.nonprod.intranet.ibm.com") {
    baseUrlLocal = "https://hcm-estimation-api-staging.dal1a.ciocloud.nonprod.intranet.ibm.com/";
    baseUrlSPGLocal= "https://hcm-spg-api-staging.dal1a.ciocloud.nonprod.intranet.ibm.com/";
}
export const baseUrl = baseUrlLocal;
export const baseUrlSPG = baseUrlSPGLocal;