import React from 'react';
import { DataTable, Table, TableHead, TableRow, TableHeader, TableBody, TableCell, TableContainer, TextInput } from 'carbon-components-react';
import { englishValue, infoValue ,currencyCoverter} from "../../Utils/CommonFunc";
import { CheckmarkOutline12 } from './Icons';
import  "../../Pages/OpportunityInputsParameter/CloudAppOpsInput/MultipleAccoridon.scss"
import HelperText from './HelperText';

import percentageIdentificationJSON from '../../Json/percentageIdentificationJSON.json';
//Table to display Data
const displayData = { ...percentageIdentificationJSON.general }
const TableInputStatic = (props) => {

var sr;
    return (
        <DataTable rows={props.rows} headers={props.headers}>
            {({ rows, headers, getHeaderProps, getTableProps }) => (
                <TableContainer
                    title={props.title}
                    description={props.description}
                >
                    <Table {...getTableProps()}>
                        <TableHead>
                            <TableRow>
                                {headers.map((header) => {
                                    if (header.length !== 0) {
                                        return (
                                            <TableHeader {...getHeaderProps({ header })}>
                                                {header}
                                            </TableHeader>
                                        )
                                    }
                                    else {
                                        return (
                                            <TableHeader className="headingStart" {...getHeaderProps({ header })}>
                                            </TableHeader>
                                        )
                                    }
                                })}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.rows.map(tds => {
                                if (tds[0] !== 'uiStatus') {
                                    if (typeof (tds[1]) == 'number') {
                                        return (
                                            <TableRow>
                                                <TableCell className='labelrow'>{englishValue(tds[0])}</TableCell>
                                                <TableCell >{tds[1]}</TableCell>
                                            </TableRow>
                                        )
                                    }
                                    else {
                                        return (
                                            <TableRow>
                                                {props.title === 'YoY Tickets' ?
                                                    <>
                                                        <TableCell className='labelrow'>
                                                            <span>{englishValue(tds[0])}</span>
                                                        </TableCell>
                                                    </>
                                                    :
                                                    <>
                                                        <TableCell className='iconRow'>
                                                            {Object.keys(tds[1].uiStatus.iconStatus).length !== 0 ?
                                                                <CheckmarkOutline12 />
                                                                :
                                                                ''
                                                            }
                                                        </TableCell>
                                                        <TableCell className='labelrow'>
                                                            <h6>{englishValue(tds[0])}</h6>
                                                            {tds[0]==='totalTestFTEInSolutionCountDistribution'?<>
                                                            {Number(tds[1].total)<5?
                                                            <>
                                                             <HelperText helperTextVal='IGNITE will not be activated for < 5 FTE '></HelperText>
                                                            </>
                                                            :
                                                            <>
                                                             <HelperText helperTextVal='IGNITE will be activated'></HelperText>
                                                            </>
                                                            }
                                                            </>:<>
                                                                {infoValue(tds[0]) !== "" ?
                                                                <HelperText helperTextVal={infoValue(tds[0])}></HelperText>
                                                                : ""}
                                                            </>}
                                                           
                                                        </TableCell>

                                                    </>

                                                }

                                                {Object.keys(tds[1]).map((key) => {
                                                    let valText='';
                                                    if(tds[1][key]!==''){
                                                        valText = `${tds[1][key]}%`
                                                    }
                                                    if (key !== 'uiStatus') {
                                                        if (tds[0].includes('Percentage') && key !== 'range' 
                                                        || tds[0] === 'additionalADCapacityHrsDistribution') {
                                                            if (displayData[tds[0]]) {
                                                                if (Object.keys(displayData[tds[0]].fields).length !== 0) {
                                                                    let textVal;
                                                                    if (displayData[tds[0]].fields[key]) {
                                                                        textVal = `${Number(tds[1][key]).toFixed(2)}%`
                                                                    }
                                                                    else {
                                                                        textVal = `${Number(tds[1][key]).toFixed(2)}`
                                                                    }
                                                                    if (tds[1]['uiStatus']['editableStatus'][key]) {
                                                                    sr=props.idTitle+'_'+tds[0]+'_'+key;
                                                                        return <TableCell key={key} >
                                                                            <TextInput
                                                                                id="estimate-title"
                                                                                type='text'
                                                                                labelText=''
                                                                                placeholder={sr}
                                                                                onBlur={props.handlerChange}
                                                                                name={key}
                                                                                defaultValue={textVal}
                                                                                readOnly
                                                                            />

                                                                        </TableCell>;
                                                                    }
                                                                    else {
                                                                        return <TableCell className="nonEdtible-class" >{textVal}</TableCell>;
                                                                    }
                                                                }
                                                                else {
                                                                    if (tds[1]['uiStatus']['editableStatus'][key]) {
                                                                       sr=props.idTitle+'_'+tds[0]+'_'+key;
                                                                        return <TableCell key={key} >
                                                                            <TextInput
                                                                                id="estimate-title"
                                                                                type='text'
                                                                                labelText=''
                                                                                placeholder={sr}
                                                                                name={key}
                                                                                onBlur={props.handlerChange}    
                                                                                defaultValue={valText} 
                                                                                readOnly                                                                           // value={valText}
                                                                            />

                                                                        </TableCell>;
                                                                    }
                                                                    else {
                                                                    return <TableCell className="nonEdtible-class" >{valText}</TableCell>;
                                                                    }
                                                                }
                                                            }
                                                            else {
                                                                if (tds[1]['uiStatus']['editableStatus'][key]) {
                                                                    sr=props.idTitle+'_'+tds[0]+'_'+key;
                                                                    return <TableCell key={key} >
                                                                        <TextInput
                                                                            id="estimate-title"
                                                                            type='text'
                                                                            onBlur={props.handlerChange}
                                                                            labelText=''
                                                                            placeholder={sr}
                                                                            name={key}
                                                                            defaultValue={valText}
                                                                            readOnly
                                                                        />

                                                                    </TableCell>;
                                                                }
                                                                else {
                                                                    return <TableCell className="nonEdtible-class" >{valText}</TableCell>;
                                                                }
                                                            }


                                                        }
                                                        else {
                                                            if (tds[1]['uiStatus']['editableStatus'][key]) { 
                                                                sr=props.idTitle+'_'+tds[0]+'_'+key;
                                                                return <TableCell key={key} >
                                                                    <TextInput
                                                                        id="estimate-title"
                                                                        type='text'
                                                                        labelText=''
                                                                        placeholder={sr}
                                                                        onBlur={props.handlerChange}
                                                                        name={key}
                                                                        defaultValue={tds[1][key]}
                                                                        readOnly
                                                                    />

                                                                </TableCell>;
                                                            }
                                                            else {
                                                                if(tds[0]==='typicalCostDistribution_USD'&& key !== 'range' ){
                                                                    return <TableCell className="nonEdtible-class" >{currencyCoverter(tds[1][key])}</TableCell>;
                                                                }
                                                                  if(typeof(tds[1][key])=='number'){
                                                                    return <TableCell className="nonEdtible-class" >{Number(tds[1][key]).toFixed(2)}</TableCell>;  
                                                                }else{
                                                                    return <TableCell className="nonEdtible-class" >{tds[1][key]}</TableCell>;
                                                                }
                                                               
                                                            }
                                                        }
                                                    }
                                                })}
                                            </TableRow>
                                        )
                                    }
                                }
                            }
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </DataTable>
    );
}
export default TableInputStatic;
