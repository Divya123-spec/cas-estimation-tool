import React, { PureComponent } from 'react';
 import './UserEstimate.scss';
import {
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableCell,
    TableContainer,
} from 'carbon-components-react';
import EstimateModal from './EstimateModal'



class UserEstimates extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
    }
    //Dashboard data with all OPS id and also UserEstimate Modal
    render() {
        return (
            <>
                <TableContainer>
                    <EstimateModal {...this.props}></EstimateModal>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableHeader >Name</TableHeader>
                                <TableHeader >Id</TableHeader>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow >
                                <TableCell>Lavi</TableCell>
                                <TableCell>3</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
         
            </>
        );
    }
}

UserEstimates.propTypes = {

};

export default UserEstimates;
