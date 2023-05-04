// import React from "react";
// import {
//   DataTable,
//   Table,
//   TableHead,
//   TableRow,
//   TableHeader,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TextInput,
//   TooltipIcon,
// } from "carbon-components-react";
// import {
//   englishValue,
//   infoValue,
//   currencyCoverter,
//   ErrorValue,
//   warningValue,
// } from "../../Utils/CommonFunc";
// import "../../Pages/OpportunityInputsParameter/CloudAppOpsInput/MultipleAccoridon.scss";
// import HelperText from "./HelperText";
// import "./TableInput.scss";
// import percentageIdentificationJSON from "../../Json/percentageIdentificationJSON.json";
// import {
//   CheckmarkFilled16,
//   WarningFilled16,
//   ErrorFilled16,
// } from "@carbon/icons-react";
// //Table to display Data
// const displayData = { ...percentageIdentificationJSON.general };
// const TableInput = (props) => {
//   let userData = window.localStorage.getItem("userData");
//   userData = JSON.parse(userData);
//   let readOnlyStatus = false;
//   if (props.UserState === "InReview" || props.UserState === "Approved") {
//     readOnlyStatus = true;
//   } else if (
//     props.UserEmail === userData.email ||
//     props.UserState === "ReWork"
//   ) {
//     readOnlyStatus = true;
//   }
//   let valueRange = "";

//   var sr;
//   var HeaderTitle;

//   return (
//     <DataTable rows={props.rows} headers={props.headers}>
//       {({ rows, headers, getHeaderProps, getTableProps }) => (
//         <TableContainer title={HeaderTitle} description={props.description}>
//           <Table {...getTableProps()}>
//             <TableHead>
//               <TableRow>
//                 {headers.map((header) => {
//                   if (header.length !== 0) {
//                     return (
//                       <TableHeader {...getHeaderProps({ header })}>
//                         {header}
//                       </TableHeader>
//                     );
//                   } else {
//                     return (
//                       <TableHeader
//                         className="headingStart"
//                         {...getHeaderProps({ header })}
//                       ></TableHeader>
//                     );
//                   }
//                 })}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {props.rows.map((tds) => {
//                 if (tds[0] !== "uiStatus") {
//                   if (typeof tds[1] == "number") {
//                     return (
//                       <TableRow>
//                         <TableCell className="labelrow">
//                           {englishValue(tds[0])}
//                         </TableCell>
//                         <TableCell>{tds[1]}</TableCell>
//                       </TableRow>
//                     );
//                   } else {
//                     return (
//                       <TableRow>
//                         {Object.keys(tds[1]).map((key) => {
//                           let valText = "";
//                           if (tds[1][key] !== "") {
//                             valText = `${tds[1][key]}%`;
//                           }
//                           if (key !== "uiStatus") {
//                             if (
//                               tds[0].includes("Percentage") &&
//                               key !== "range"
//                             ) {
//                               if (displayData[tds[0]]) {
//                                 if (
//                                   Object.keys(displayData[tds[0]].fields)
//                                     .length !== 0
//                                 ) {
//                                   let textVal;
//                                   if (displayData[tds[0]].fields[key]) {
//                                     textVal = `${tds[1][key]}%`;
//                                   } else {
//                                     textVal = `${tds[1][key]}`;
//                                   }
//                                   if (
//                                     tds[1]["uiStatus"]["editableStatus"][key]
//                                   ) {
//                                     sr =
//                                       props.idTitle + "_" + tds[0] + "_" + key;
//                                     console.log("id", sr);
//                                     return (
//                                       <TableCell key={key}>
//                                         {props.FocusFlag &&
//                                         props.FocusValueIdFlag == sr ? (
//                                           <TextInput
//                                             // id="estimate-title"
//                                             type="text"
//                                             labelText=""
//                                             id={sr}
//                                             onBlur={props.handlerChange}
//                                             name={key}
//                                             value={tds[1][key]}
//                                             readOnly={readOnlyStatus}
//                                             onChange={props.handlerChangeData}
//                                             onFocus={props.handlerFocus}
//                                           />
//                                         ) : (
//                                           <TextInput
//                                             // id="estimate-title"
//                                             type="text"
//                                             labelText=""
//                                             id={sr}
//                                             onBlur={props.handlerChange}
//                                             name={key}
//                                             value={textVal}
//                                             readOnly={readOnlyStatus}
//                                             onChange={props.handlerChangeData}
//                                             onFocus={props.handlerFocus}
//                                           />
//                                         )}
//                                       </TableCell>
//                                     );
//                                   }
//                                 } else {
//                                   if (
//                                     tds[1]["uiStatus"]["editableStatus"][key]
//                                   ) {
//                                     sr =
//                                       props.idTitle + "_" + tds[0] + "_" + key;
//                                     return (
//                                       <TableCell key={key}>
//                                         {props.FocusFlag &&
//                                         props.FocusValueIdFlag == sr ? (
//                                           <TextInput
//                                             // id="estimate-title"
//                                             type="text"
//                                             labelText=""
//                                             id={sr}
//                                             name={key}
//                                             onBlur={props.handlerChange}
//                                             value={tds[1][key]}
//                                             readOnly={readOnlyStatus}
//                                             onChange={props.handlerChangeData}
//                                             onFocus={props.handlerFocus} // value={valText}
//                                           />
//                                         ) : (
//                                           <TextInput
//                                             // id="estimate-title"
//                                             type="text"
//                                             labelText=""
//                                             id={sr}
//                                             name={key}
//                                             onBlur={props.handlerChange}
//                                             value={valText}
//                                             readOnly={readOnlyStatus}
//                                             onChange={props.handlerChangeData}
//                                             onFocus={props.handlerFocus} // value={valText}
//                                           />
//                                         )}
//                                       </TableCell>
//                                     );
//                                   } else {
//                                     return (
//                                       <TableCell className="nonEdtible-class">
//                                         {valText}
//                                       </TableCell>
//                                     );
//                                   }
//                                 }
//                               } else {
//                                 if (tds[1]["uiStatus"]["editableStatus"][key]) {
//                                   sr = props.idTitle + "_" + tds[0] + "_" + key;
//                                   return (
//                                     <TableCell key={key}>
//                                       {props.FocusFlag &&
//                                       props.FocusValueIdFlag == sr ? (
//                                         <TextInput
//                                           // id="estimate-title"
//                                           type="text"
//                                           onBlur={props.handlerChange}
//                                           labelText=""
//                                           id={sr}
//                                           name={key}
//                                           value={tds[1][key]}
//                                           readOnly={readOnlyStatus}
//                                           onChange={props.handlerChangeData}
//                                           onFocus={props.handlerFocus}
//                                         />
//                                       ) : (
//                                         <TextInput
//                                           // id="estimate-title"
//                                           type="text"
//                                           onBlur={props.handlerChange}
//                                           labelText=""
//                                           id={sr}
//                                           name={key}
//                                           value={valText}
//                                           readOnly={readOnlyStatus}
//                                           onChange={props.handlerChangeData}
//                                           onFocus={props.handlerFocus}
//                                         />
//                                       )}
//                                     </TableCell>
//                                   );
//                                 } else if (
//                                   props.idTitle === "general" &&
//                                   (tds[0] === "sumTotalAMS" ||
//                                     tds[0] === "sumTotalGeneral" ||
//                                     tds[0] === "sumTotalCloudApps")
//                                 ) {
//                                   if (tds[1][key] == 100.0) {
//                                     return (
//                                       <TableCell className="nonEdtible-class ">
//                                         {valText}
//                                       </TableCell>
//                                     );
//                                   } else {
//                                     return (
//                                       <TableCell className="nonEdtible-class errorSumValidation">
//                                         {valText}
//                                       </TableCell>
//                                     );
//                                   }
//                                 } else {
//                                   return (
//                                     <TableCell className="nonEdtible-class">
//                                       {valText}
//                                     </TableCell>
//                                   );
//                                 }
//                               }
//                             } else {
//                               if (tds[1]["uiStatus"]["editableStatus"][key]) {
//                                 sr = props.idTitle + "_" + tds[0] + "_" + key;

//                                 return (
//                                   <TableCell key={key}>
//                                     <TextInput
//                                       // id="estimate-title"
//                                       type="text"
//                                       labelText=""
//                                       id={sr}
//                                       onBlur={props.handlerChange}
//                                       name={key}
//                                       value={tds[1][key]}
//                                       readOnly={readOnlyStatus}
//                                       onChange={props.handlerChangeData}
//                                     />
//                                   </TableCell>
//                                 );
//                               }
//                             }
//                           }
//                         })}
//                       </TableRow>
//                     );
//                   }
//                 }
//               })}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       )}
//     </DataTable>
//   );
// };
// export default TableInput;
