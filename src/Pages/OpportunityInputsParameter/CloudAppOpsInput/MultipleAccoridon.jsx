import React from "react"
import { Checkbox } from 'carbon-components-react';
import "./MultipleAccoridon.scss"
import { CheckmarkOutline16, CloseOutline16 } from '@carbon/icons-react';
import { englishValue } from "../../../Utils/CommonFunc";

const MultipleAccoridon = (props) => {
  const id = props.id;
  const oppApp = ["reHostPercentage", "rePlatformRefactorPercentage", "reArchitectReBuildPercentage", "saasPercentage"]
  const [L1, L2, L3, L4, Min] = [id.appliedToL1, id.appliedToL2, id.appliedToL3, id.appliedToL4, id.appliedToMinorEnh]

  let userData = window.localStorage.getItem('userData');
  userData = JSON.parse(userData)
 
  let readOnlyStatus = false;
  if (props.userestimateState.state === 'InReview' || props.userestimateState.state === 'Approved') {
      readOnlyStatus = true;
  } else if (props.userestimateState.reviewerEmail === userData.email || props.userestimateState.state === "ReWork") {
      readOnlyStatus = true;
  }
  return (<div className="multipleMain">
    {/* 1st row */}
    {readOnlyStatus?<>
      <Checkbox checked={id.enabled} labelText={`Enabled`}
      id={id.rowId}
    />
    </>:<> <Checkbox checked={id.enabled} labelText={`Enabled`}
      onChange={(event) => props.handleClick(event, id)}
      id={id.rowId}
    /></>}
   
    {/* <Checkbox checked={id.enabled} labelText={`Enabled`} id={id.rowId}
    /> */}
    {/* 2nd row */}
    <div className={id.enabled ? "opaEnable" : "opa"}>
      <div
        className="optional"
      //  style={{ flexDirection: "row", fontSize: "12px", marginBottom: "15px" }}
      >
        <>
          {L1 ? <CheckmarkOutline16 fill={id.enabled ? "#42BE65" : "grey"} /> : <CloseOutline16 fill={id.enabled ? "red" : "grey"} />}
          <span className="applicable">{englishValue('appliedToL1')}</span>

          {L2 ? <CheckmarkOutline16 fill={id.enabled ? "#42BE65" : "grey"} /> : <CloseOutline16 fill={id.enabled ? "red" : "grey"} />}
          <span className="applicable">{englishValue('appliedToL2')}</span>

          {L3 ? <CheckmarkOutline16 fill={id.enabled ? "#42BE65" : "grey"} /> : <CloseOutline16 fill={id.enabled ? "red" : "grey"} />}
          <span className="applicable">{englishValue('appliedToL3')}</span>

          {L4 ? <CheckmarkOutline16 fill={id.enabled ? "#42BE65" : "grey"} /> : <CloseOutline16 fill={id.enabled ? "red" : "grey"} />}
          <span className="applicable">{englishValue('appliedToL4')}</span>

          {Min ? <CheckmarkOutline16 fill={id.enabled ? "#42BE65" : "grey"} /> : <CloseOutline16 fill={id.enabled ? "red" : "grey"} />}
          <span className="applicable">{englishValue('appliedToMinorEnh')}</span>

        </>

      </div>
      {/* 3rd row */}
      <p className="dis">{englishValue('distributionCloudApplication')}</p>
    
    {/* 4th row */}
      <div className="refractorContent">
        {oppApp.map(idt =>
          <div className="refractorContentPercentage">
            <span className="">{englishValue(idt)}</span>
            <span className="">{id[idt]}</span>
          </div>
        )}
      </div>
 {/* Blended percentage */}
      <div className="d-flex">
        <span className="blenPer">{englishValue('BlendedPercentage')}</span>
        <span className="blenSpan"></span>

        <div className="blen-content">
          <span className="l1">{englishValue('L1')}</span>
          <span className="l1" >{id.blendedEffortsDistributionPercentage.blendedEffortsForL1}%</span>
        </div>
        <div className="blen-content">
          <span className="l2">{englishValue('L2')}</span>
          <span className="l2" >{id.blendedEffortsDistributionPercentage.blendedEffortsForL2}%</span>
        </div>
        <div className="blen-content">
          <span className="l3" >{englishValue('L3')}</span>
          <span className="l3" >{id.blendedEffortsDistributionPercentage.blendedEffortsForL3}%</span>
        </div>
        <div className="blen-content">
          <span className="l4" >{englishValue('l4')}</span>
          <span className="l4">{id.blendedEffortsDistributionPercentage.blendedEffortsForL4}%</span>
        </div>
        <div className="blen-content">
          <span className="minor" >{englishValue('MinorEnhancements')}</span>
          <span className="minor" >{id.blendedEffortsDistributionPercentage.blendedEffortsForMinorEnh}%</span>
        </div>
      </div>
    </div>
  </div>
  )
}
export default MultipleAccoridon