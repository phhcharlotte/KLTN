import auth from "./modules/auth";
import thirdParty from "./modules/third-party";
import company from "./modules/company";
import upload from "./modules/upload";
import masterData from "./modules/master-data";
import securityGuard from "./modules/security-guard";
import project from "./modules/project";
import suppliers from "./modules/suppliers";
import scoringSetting from "./modules/scoring-setting";
import operationLog from "./modules/operation-log";
import monthlyEvaluation from "./modules/monthly-evaluation";
import selfAppraisal from "./modules/self-appraisal";
import reportEvaluation from "./modules/report-evaluation";
import home from "./modules/home";
import notifications from "./modules/notifications";
import notificationList from "./modules/notification-list";

export default ($axios, app) => ({
  auth: auth($axios, app),
  thirdParty: thirdParty($axios, app),
  company: company($axios, app),
  upload: upload($axios, app),
  masterData: masterData($axios, app),
  securityGuard: securityGuard($axios, app),
  suppliers: suppliers($axios, app),
  project: project($axios, app),
  scoringSetting: scoringSetting($axios, app),
  operationLog: operationLog($axios, app),
  monthlyEvaluation: monthlyEvaluation($axios, app),
  selfAppraisal: selfAppraisal($axios, app),
  reportEvaluation: reportEvaluation($axios, app),
  home: home($axios, app),
  notifications: notifications($axios, app),
  notificationList: notificationList($axios, app),
});
