export const ams_annualNumberOfTickets_I11 = (props, userInputData) => {

    //adding inScopeTicketVolumeMonthly y1 (ams) I12
    userInputData['ams']['ticketsDistribution']['inScopeTicketVolumeMonthly']['y1'] =
        parseInt((Number(userInputData['ams']['ticketsDistribution']['inScopeTicketVolumeAnnual']['y1']) /
            (12)).toFixed(2));


}
export const ams_annualNumberOfTickets_J11 = (props, userInputData) => {

    //adding inScopeTicketVolumeMonthly y2 (ams) J12
    userInputData['ams']['ticketsDistribution']['inScopeTicketVolumeMonthly']['y2'] =
        parseInt((Number(userInputData['ams']['ticketsDistribution']['inScopeTicketVolumeAnnual']['y2']) /
            (12)).toFixed(2));



}
export const ams_annualNumberOfTickets_K11 = (props, userInputData) => {

    //adding inScopeTicketVolumeMonthly y3 (ams) K12
    userInputData['ams']['ticketsDistribution']['inScopeTicketVolumeMonthly']['y3'] =
        parseInt((Number(userInputData['ams']['ticketsDistribution']['inScopeTicketVolumeAnnual']['y3']) /
            (12)).toFixed(2));

}

export const ams_annualNumberOfTickets_L11 = (props, userInputData) => {
    //adding inScopeTicketVolumeMonthly y4 (ams) L12
    userInputData['ams']['ticketsDistribution']['inScopeTicketVolumeMonthly']['y4'] =
        parseInt((Number(userInputData['ams']['ticketsDistribution']['inScopeTicketVolumeAnnual']['y4']) /
            (12)).toFixed(2));

}
export const ams_annualNumberOfTickets_M11 = (props, userInputData) => {
    //adding inScopeTicketVolumeMonthly y5 (ams) M12
    userInputData['ams']['ticketsDistribution']['inScopeTicketVolumeMonthly']['y5'] =
        parseInt((Number(userInputData['ams']['ticketsDistribution']['inScopeTicketVolumeAnnual']['y5']) /
            (12)).toFixed(2));

}

export const ams_annualNumberOfTickets_N11 = (props, userInputData) => {
    //adding inScopeTicketVolumeMonthly y6 (ams) N12
    userInputData['ams']['ticketsDistribution']['inScopeTicketVolumeMonthly']['y6'] =
        parseInt((Number(userInputData['ams']['ticketsDistribution']['inScopeTicketVolumeAnnual']['y6']) /
            (12)).toFixed(2));

}

export const ams_annualNumberOfTickets_O11 = (props, userInputData) => {
    //adding inScopeTicketVolumeMonthly y6 (ams) O12
    userInputData['ams']['ticketsDistribution']['inScopeTicketVolumeMonthly']['y7'] =
        parseInt((Number(userInputData['ams']['ticketsDistribution']['inScopeTicketVolumeAnnual']['y7']) /
            (12)).toFixed(2));

}

export const ams_annualNumberOfTickets_J10 = (props, userInputData) => {

    //adding inScopeTicketVolumeAnnual y2 (ams) J11
    userInputData['ams']['ticketsDistribution']['inScopeTicketVolumeAnnual']['y2'] =
        parseFloat(((Number(userInputData['ams']['ticketsDistribution']['annualNumberOfTickets']['y2']) -
            Number(userInputData['ams']['ticketsDistribution']['descopedTickets']['y2']))
            + Number(userInputData['ams']['ticketsDistribution']['batchJobsTickets']['y2'])
        ).toFixed(2));

    ams_annualNumberOfTickets_J11(props, userInputData)
}
export const ams_annualNumberOfTickets_K10 = (props, userInputData) => {

    //adding inScopeTicketVolumeAnnual y3 (ams) K11
    userInputData['ams']['ticketsDistribution']['inScopeTicketVolumeAnnual']['y3'] =
        parseFloat(((Number(userInputData['ams']['ticketsDistribution']['annualNumberOfTickets']['y3'])
            - Number(userInputData['ams']['ticketsDistribution']['descopedTickets']['y3']))
            + Number(userInputData['ams']['ticketsDistribution']['batchJobsTickets']['y3'])
        ).toFixed(2));

    ams_annualNumberOfTickets_K11(props, userInputData)

}

export const ams_annualNumberOfTickets_L10 = (props, userInputData) => {

    //adding inScopeTicketVolumeAnnual y4 (ams) L11
    userInputData['ams']['ticketsDistribution']['inScopeTicketVolumeAnnual']['y4'] =
        parseFloat(((Number(userInputData['ams']['ticketsDistribution']['annualNumberOfTickets']['y4']) - Number(userInputData['ams']['ticketsDistribution']['descopedTickets']['y4']))
            + Number(userInputData['ams']['ticketsDistribution']['batchJobsTickets']['y4'])
        ).toFixed(2));
    ams_annualNumberOfTickets_L11(props, userInputData)


}
export const ams_annualNumberOfTickets_M10 = (props, userInputData) => {

    //adding inScopeTicketVolumeAnnual y5 (ams) M11
    userInputData['ams']['ticketsDistribution']['inScopeTicketVolumeAnnual']['y5'] =
        parseFloat(((Number(userInputData['ams']['ticketsDistribution']['annualNumberOfTickets']['y5']) - Number(userInputData['ams']['ticketsDistribution']['descopedTickets']['y5']))
            + Number(userInputData['ams']['ticketsDistribution']['batchJobsTickets']['y5'])
        ).toFixed(2));

    ams_annualNumberOfTickets_M11(props, userInputData)

}

export const ams_annualNumberOfTickets_N10 = (props, userInputData) => {

    //adding inScopeTicketVolumeAnnual y6 (ams) N11
    userInputData['ams']['ticketsDistribution']['inScopeTicketVolumeAnnual']['y6'] =
        parseFloat(((Number(userInputData['ams']['ticketsDistribution']['annualNumberOfTickets']['y6']) - Number(userInputData['ams']['ticketsDistribution']['descopedTickets']['y6']))
            + Number(userInputData['ams']['ticketsDistribution']['batchJobsTickets']['y6'])
        ).toFixed(2));

    ams_annualNumberOfTickets_N11(props, userInputData)

}

export const ams_annualNumberOfTickets_O10 = (props, userInputData) => {

    //adding inScopeTicketVolumeAnnual y7 (ams) O11
    userInputData['ams']['ticketsDistribution']['inScopeTicketVolumeAnnual']['y7'] =
        parseFloat(((Number(userInputData['ams']['ticketsDistribution']['annualNumberOfTickets']['y7']) - Number(userInputData['ams']['ticketsDistribution']['descopedTickets']['y7']))
            + Number(userInputData['ams']['ticketsDistribution']['batchJobsTickets']['y7'])
        ).toFixed(2));

    ams_annualNumberOfTickets_O11(props, userInputData)

}


export const ams_annualNumberOfTickets_I8 = (props, userInputData) => {

    //adding inScopeTicketVolumeAnnual y1 (ams) I11
    userInputData['ams']['ticketsDistribution']['inScopeTicketVolumeAnnual']['y1'] = parseFloat(
        ((Number(userInputData['ams']['ticketsDistribution']['annualNumberOfTickets']['y1']) -
            Number(userInputData['ams']['ticketsDistribution']['descopedTickets']['y1']))
            + Number(userInputData['ams']['ticketsDistribution']['batchJobsTickets']['y1'])
        ).toFixed(2));
    ams_annualNumberOfTickets_I11(props, userInputData)
}
export const ams_annualNumberOfTickets_J8 = (props, userInputData) => {

    // adding inScopeTicketVolumeAnnual y2 (ams) J11
    userInputData['ams']['ticketsDistribution']['inScopeTicketVolumeAnnual']['y2'] = parseFloat(
        ((Number(userInputData['ams']['ticketsDistribution']['annualNumberOfTickets']['y2']) -
            Number(userInputData['ams']['ticketsDistribution']['descopedTickets']['y2']))
            + Number(userInputData['ams']['ticketsDistribution']['batchJobsTickets']['y2'])
        ).toFixed(2));

    ams_annualNumberOfTickets_J11(props, userInputData)
}
export const ams_annualNumberOfTickets_K8 = (props, userInputData) => {

    //adding inScopeTicketVolumeAnnual y3 (ams) K11
    userInputData['ams']['ticketsDistribution']['inScopeTicketVolumeAnnual']['y3'] = parseFloat(
        ((Number(userInputData['ams']['ticketsDistribution']['annualNumberOfTickets']['y3'])
            - Number(userInputData['ams']['ticketsDistribution']['descopedTickets']['y3']))
            + Number(userInputData['ams']['ticketsDistribution']['batchJobsTickets']['y3'])
        ).toFixed(2));

    ams_annualNumberOfTickets_K11(props, userInputData)

}

export const ams_annualNumberOfTickets_L8 = (props, userInputData) => {

    //adding inScopeTicketVolumeAnnual y4 (ams) L11
    userInputData['ams']['ticketsDistribution']['inScopeTicketVolumeAnnual']['y4'] = parseFloat(
        ((Number(userInputData['ams']['ticketsDistribution']['annualNumberOfTickets']['y4']) -
            Number(userInputData['ams']['ticketsDistribution']['descopedTickets']['y4']))
            + Number(userInputData['ams']['ticketsDistribution']['batchJobsTickets']['y4'])
        ).toFixed(2));
    ams_annualNumberOfTickets_L11(props, userInputData)


}
export const ams_annualNumberOfTickets_M8 = (props, userInputData) => {

    //adding inScopeTicketVolumeAnnual y5 (ams) M11
    userInputData['ams']['ticketsDistribution']['inScopeTicketVolumeAnnual']['y5'] = parseFloat(
        ((Number(userInputData['ams']['ticketsDistribution']['annualNumberOfTickets']['y5']) -
            Number(userInputData['ams']['ticketsDistribution']['descopedTickets']['y5']))
            + Number(userInputData['ams']['ticketsDistribution']['batchJobsTickets']['y5'])
        ).toFixed(2));

    ams_annualNumberOfTickets_M11(props, userInputData)

}

export const ams_annualNumberOfTickets_N8 = (props, userInputData) => {

    //adding inScopeTicketVolumeAnnual y6 (ams) N11
    userInputData['ams']['ticketsDistribution']['inScopeTicketVolumeAnnual']['y6'] = parseFloat(
        ((Number(userInputData['ams']['ticketsDistribution']['annualNumberOfTickets']['y6']) -
            Number(userInputData['ams']['ticketsDistribution']['descopedTickets']['y6']))
            + Number(userInputData['ams']['ticketsDistribution']['batchJobsTickets']['y6'])
        ).toFixed(2));

    ams_annualNumberOfTickets_N11(props, userInputData)

}
export const ams_annualNumberOfTickets_O8 = (props, userInputData) => {

    //adding inScopeTicketVolumeAnnual y7 (ams) N11
    userInputData['ams']['ticketsDistribution']['inScopeTicketVolumeAnnual']['y7'] = parseFloat(
        ((Number(userInputData['ams']['ticketsDistribution']['annualNumberOfTickets']['y7']) -
            Number(userInputData['ams']['ticketsDistribution']['descopedTickets']['y7']))
            + Number(userInputData['ams']['ticketsDistribution']['batchJobsTickets']['y7'])
        ).toFixed(2));

    ams_annualNumberOfTickets_O11(props, userInputData)

}


export const ams_annualNumberOfTickets_I9 = (props, userInputData) => {

    //adding inScopeTicketVolumeAnnual y1 (ams) I11
    userInputData['ams']['ticketsDistribution']['inScopeTicketVolumeAnnual']['y1'] = parseFloat(
        ((Number(userInputData['ams']['ticketsDistribution']['annualNumberOfTickets']['y1']) -
            Number(userInputData['ams']['ticketsDistribution']['descopedTickets']['y1']))
            + Number(userInputData['ams']['ticketsDistribution']['batchJobsTickets']['y1'])
        ).toFixed(2));

    ams_annualNumberOfTickets_I11(props, userInputData)
}
export const ams_annualNumberOfTickets_J9 = (props, userInputData) => {

    //adding inScopeTicketVolumeAnnual y2 (ams) J11
    userInputData['ams']['ticketsDistribution']['inScopeTicketVolumeAnnual']['y2'] = parseFloat(
        ((Number(userInputData['ams']['ticketsDistribution']['annualNumberOfTickets']['y2']) -
            Number(userInputData['ams']['ticketsDistribution']['descopedTickets']['y2']))
            + Number(userInputData['ams']['ticketsDistribution']['batchJobsTickets']['y2'])
        ).toFixed(2));

    ams_annualNumberOfTickets_J11(props, userInputData)
}
export const ams_annualNumberOfTickets_K9 = (props, userInputData) => {

    //adding inScopeTicketVolumeAnnual y3 (ams) K11
    userInputData['ams']['ticketsDistribution']['inScopeTicketVolumeAnnual']['y3'] =
        parseFloat(((Number(userInputData['ams']['ticketsDistribution']['annualNumberOfTickets']['y3'])
            - Number(userInputData['ams']['ticketsDistribution']['descopedTickets']['y3']))
            + Number(userInputData['ams']['ticketsDistribution']['batchJobsTickets']['y3'])
        ).toFixed(2));

    ams_annualNumberOfTickets_K11(props, userInputData)

}

export const ams_annualNumberOfTickets_L9 = (props, userInputData) => {

    //adding inScopeTicketVolumeAnnual y4 (ams) L11
    userInputData['ams']['ticketsDistribution']['inScopeTicketVolumeAnnual']['y4'] =
        parseFloat(((Number(userInputData['ams']['ticketsDistribution']['annualNumberOfTickets']['y4']) -
            Number(userInputData['ams']['ticketsDistribution']['descopedTickets']['y4']))
            + Number(userInputData['ams']['ticketsDistribution']['batchJobsTickets']['y4'])
        ).toFixed(2));
    ams_annualNumberOfTickets_L11(props, userInputData)


}
export const ams_annualNumberOfTickets_M9 = (props, userInputData) => {

    //adding inScopeTicketVolumeAnnual y5 (ams) M11
    userInputData['ams']['ticketsDistribution']['inScopeTicketVolumeAnnual']['y5'] =
        parseFloat(((Number(userInputData['ams']['ticketsDistribution']['annualNumberOfTickets']['y5']) -
            Number(userInputData['ams']['ticketsDistribution']['descopedTickets']['y5']))
            + Number(userInputData['ams']['ticketsDistribution']['batchJobsTickets']['y5'])
        ).toFixed(2));

    ams_annualNumberOfTickets_M11(props, userInputData)

}

export const ams_annualNumberOfTickets_N9 = (props, userInputData) => {

    //adding inScopeTicketVolumeAnnual y6 (ams) N11
    userInputData['ams']['ticketsDistribution']['inScopeTicketVolumeAnnual']['y6'] =
        parseFloat(((Number(userInputData['ams']['ticketsDistribution']['annualNumberOfTickets']['y6']) -
            Number(userInputData['ams']['ticketsDistribution']['descopedTickets']['y6']))
            + Number(userInputData['ams']['ticketsDistribution']['batchJobsTickets']['y6'])
        ).toFixed(2));

    ams_annualNumberOfTickets_N11(props, userInputData)

}
export const ams_annualNumberOfTickets_O9 = (props, userInputData) => {

    //adding inScopeTicketVolumeAnnual y7 (ams) O11
    userInputData['ams']['ticketsDistribution']['inScopeTicketVolumeAnnual']['y7'] =
        parseFloat(((Number(userInputData['ams']['ticketsDistribution']['annualNumberOfTickets']['y7']) -
            Number(userInputData['ams']['ticketsDistribution']['descopedTickets']['y7']))
            + Number(userInputData['ams']['ticketsDistribution']['batchJobsTickets']['y7'])
        ).toFixed(2));

    ams_annualNumberOfTickets_O11(props, userInputData)

}

export const ams_batchJobsTickets_I10 = (props, userInputData) => {

    //adding inScopeTicketVolumeAnnual y1 (ams) I11
    userInputData['ams']['ticketsDistribution']['inScopeTicketVolumeAnnual']['y1'] = parseFloat(
        ((Number(userInputData['ams']['ticketsDistribution']['annualNumberOfTickets']['y1']) -
            Number(userInputData['ams']['ticketsDistribution']['descopedTickets']['y1']))
            + Number(userInputData['ams']['ticketsDistribution']['batchJobsTickets']['y1'])
        ).toFixed(2));

    ams_annualNumberOfTickets_I11(props, userInputData)

    //adding J10 
    userInputData['ams']['ticketsDistribution']['batchJobsTickets']['y2'] =
        parseFloat(Number(userInputData['ams']['ticketsDistribution']['batchJobsTickets']['y1']).toFixed(2))
    ams_annualNumberOfTickets_J10(props, userInputData)
    //adding  k10
    userInputData['ams']['ticketsDistribution']['batchJobsTickets']['y3'] =
        parseFloat(Number(userInputData['ams']['ticketsDistribution']['batchJobsTickets']['y1']).toFixed(2))
    ams_annualNumberOfTickets_K10(props, userInputData)
    //adding L10
    userInputData['ams']['ticketsDistribution']['batchJobsTickets']['y4'] =
        parseFloat(Number(userInputData['ams']['ticketsDistribution']['batchJobsTickets']['y1']).toFixed(2))
    ams_annualNumberOfTickets_L10(props, userInputData)
    //adding M10
    userInputData['ams']['ticketsDistribution']['batchJobsTickets']['y5'] =
        parseFloat(Number(userInputData['ams']['ticketsDistribution']['batchJobsTickets']['y1']).toFixed(2))
    ams_annualNumberOfTickets_M10(props, userInputData)


    //adding N10
    userInputData['ams']['ticketsDistribution']['batchJobsTickets']['y6'] =
        parseFloat(Number(userInputData['ams']['ticketsDistribution']['batchJobsTickets']['y1']).toFixed(2))
    ams_annualNumberOfTickets_N10(props, userInputData)
    //adding O10
    userInputData['ams']['ticketsDistribution']['batchJobsTickets']['y7'] =
        parseFloat(Number(userInputData['ams']['ticketsDistribution']['batchJobsTickets']['y1']).toFixed(2))
    ams_annualNumberOfTickets_O10(props, userInputData)

}


export const ams_inScopeL1DistributionPercentage_I13 = (props, userInputData) => {
    userInputData['ams']['ticketsDistribution']['inScopeL1DistributionPercentage']['y2'] = parseFloat(
        (Number(userInputData['ams']['ticketsDistribution']['inScopeL1DistributionPercentage']['y1']))
            .toFixed(2));
    userInputData['ams']['ticketsDistribution']['inScopeL1DistributionPercentage']['y3'] = parseFloat(
        (Number(userInputData['ams']['ticketsDistribution']['inScopeL1DistributionPercentage']['y1']))
            .toFixed(2));

    userInputData['ams']['ticketsDistribution']['inScopeL1DistributionPercentage']['y4'] = parseFloat(
        (Number(userInputData['ams']['ticketsDistribution']['inScopeL1DistributionPercentage']['y1']))
            .toFixed(2));

    userInputData['ams']['ticketsDistribution']['inScopeL1DistributionPercentage']['y5'] = parseFloat(
        (Number(userInputData['ams']['ticketsDistribution']['inScopeL1DistributionPercentage']['y1']))
            .toFixed(2));

    userInputData['ams']['ticketsDistribution']['inScopeL1DistributionPercentage']['y6'] = parseFloat(
        (Number(userInputData['ams']['ticketsDistribution']['inScopeL1DistributionPercentage']['y1']))
            .toFixed(2));

    userInputData['ams']['ticketsDistribution']['inScopeL1DistributionPercentage']['y7'] = parseFloat(
        (Number(userInputData['ams']['ticketsDistribution']['inScopeL1DistributionPercentage']['y1']))
            .toFixed(2));


}
export const ams_inScopeL2DistributionPercentage_I14 = (props, userInputData) => {
    userInputData['ams']['ticketsDistribution']['inScopeL2DistributionPercentage']['y2'] =
        parseFloat((Number(userInputData['ams']['ticketsDistribution']
        ['inScopeL2DistributionPercentage']['y1'])).toFixed(2));

    userInputData['ams']['ticketsDistribution']['inScopeL2DistributionPercentage']['y3'] =
        parseFloat((Number(userInputData['ams']['ticketsDistribution']
        ['inScopeL2DistributionPercentage']['y1'])).toFixed(2));

    userInputData['ams']['ticketsDistribution']['inScopeL2DistributionPercentage']['y4'] =
        parseFloat((Number(userInputData['ams']['ticketsDistribution']
        ['inScopeL2DistributionPercentage']['y1'])).toFixed(2));

    userInputData['ams']['ticketsDistribution']['inScopeL2DistributionPercentage']['y5'] =
        parseFloat((Number(userInputData['ams']['ticketsDistribution']
        ['inScopeL2DistributionPercentage']['y1'])).toFixed(2));

    userInputData['ams']['ticketsDistribution']['inScopeL2DistributionPercentage']['y6'] =
        parseFloat((Number(userInputData['ams']['ticketsDistribution']
        ['inScopeL2DistributionPercentage']['y1'])).toFixed(2));

    userInputData['ams']['ticketsDistribution']['inScopeL2DistributionPercentage']['y7'] =
        parseFloat((Number(userInputData['ams']['ticketsDistribution']
        ['inScopeL2DistributionPercentage']['y1'])).toFixed(2));

}
export const ams_inScopeL3DistributionPercentage_I15 = (props, userInputData) => {

    userInputData['ams']['ticketsDistribution']['inScopeL3DistributionPercentage']['y2'] =
        parseFloat((Number(userInputData['ams']['ticketsDistribution']
        ['inScopeL3DistributionPercentage']['y1'])).toFixed(2));

    userInputData['ams']['ticketsDistribution']['inScopeL3DistributionPercentage']['y3'] =
        parseFloat((Number(userInputData['ams']['ticketsDistribution']
        ['inScopeL3DistributionPercentage']['y1'])).toFixed(2));

    userInputData['ams']['ticketsDistribution']['inScopeL3DistributionPercentage']['y4'] =
        parseFloat((Number(userInputData['ams']['ticketsDistribution']
        ['inScopeL3DistributionPercentage']['y1'])).toFixed(2));

    userInputData['ams']['ticketsDistribution']['inScopeL3DistributionPercentage']['y5'] =
        parseFloat((Number(userInputData['ams']['ticketsDistribution']
        ['inScopeL3DistributionPercentage']['y1'])).toFixed(2));


    userInputData['ams']['ticketsDistribution']['inScopeL3DistributionPercentage']['y6'] =
        parseFloat((Number(userInputData['ams']['ticketsDistribution']
        ['inScopeL3DistributionPercentage']['y1'])).toFixed(2));


    userInputData['ams']['ticketsDistribution']['inScopeL3DistributionPercentage']['y7'] =
        parseFloat((Number(userInputData['ams']['ticketsDistribution']
        ['inScopeL3DistributionPercentage']['y1'])).toFixed(2));

}
export const ams_inScopeL4DistributionPercentage_I16 = (props, userInputData) => {

    userInputData['ams']['ticketsDistribution']['inScopeL4DistributionPercentage']['y2'] =
        parseFloat((Number(userInputData['ams']['ticketsDistribution']
        ['inScopeL4DistributionPercentage']['y1'])).toFixed(2));

    userInputData['ams']['ticketsDistribution']['inScopeL4DistributionPercentage']['y3'] =
        parseFloat((Number(userInputData['ams']['ticketsDistribution']
        ['inScopeL4DistributionPercentage']['y1'])).toFixed(2));

    userInputData['ams']['ticketsDistribution']['inScopeL4DistributionPercentage']['y4'] =
        parseFloat((Number(userInputData['ams']['ticketsDistribution']
        ['inScopeL4DistributionPercentage']['y1'])).toFixed(2));

    userInputData['ams']['ticketsDistribution']['inScopeL4DistributionPercentage']['y5'] =
        parseFloat((Number(userInputData['ams']['ticketsDistribution']
        ['inScopeL4DistributionPercentage']['y1'])).toFixed(2));

    userInputData['ams']['ticketsDistribution']['inScopeL4DistributionPercentage']['y6'] =
        parseFloat((Number(userInputData['ams']['ticketsDistribution']
        ['inScopeL4DistributionPercentage']['y1'])).toFixed(2));

    userInputData['ams']['ticketsDistribution']['inScopeL4DistributionPercentage']['y7'] =
        parseFloat((Number(userInputData['ams']['ticketsDistribution']
        ['inScopeL4DistributionPercentage']['y1'])).toFixed(2));

}
export const ams_inScopeMinorEnchDistributionPercentage_I17 = (props, userInputData) => {
    userInputData['ams']['ticketsDistribution']['inScopeMinorEnchDistributionPercentage']['y2'] =
        parseFloat((Number(userInputData['ams']['ticketsDistribution']
        ['inScopeMinorEnchDistributionPercentage']['y1'])).toFixed(2));

    userInputData['ams']['ticketsDistribution']['inScopeMinorEnchDistributionPercentage']['y3'] =
        parseFloat((Number(userInputData['ams']['ticketsDistribution']
        ['inScopeMinorEnchDistributionPercentage']['y1'])).toFixed(2));

    userInputData['ams']['ticketsDistribution']['inScopeMinorEnchDistributionPercentage']['y4'] =
        parseFloat((Number(userInputData['ams']['ticketsDistribution']
        ['inScopeMinorEnchDistributionPercentage']['y1'])).toFixed(2));

    userInputData['ams']['ticketsDistribution']['inScopeMinorEnchDistributionPercentage']['y5'] =
        parseFloat((Number(userInputData['ams']['ticketsDistribution']
        ['inScopeMinorEnchDistributionPercentage']['y1'])).toFixed(2));

    userInputData['ams']['ticketsDistribution']['inScopeMinorEnchDistributionPercentage']['y6'] =
        parseFloat((Number(userInputData['ams']['ticketsDistribution']
        ['inScopeMinorEnchDistributionPercentage']['y1'])).toFixed(2));

    userInputData['ams']['ticketsDistribution']['inScopeMinorEnchDistributionPercentage']['y7'] =
        parseFloat((Number(userInputData['ams']['ticketsDistribution']
        ['inScopeMinorEnchDistributionPercentage']['y1'])).toFixed(2));


}


export const ams_ticketDistribution_annualNumberOfTickets_retiring_F40 = (props, userInputData) => {

    let h8general_monthlyTotalTicketsAssumed_F40 =
        parseFloat((
            (Number(userInputData['general']['monthlyTotalTicketsAssumed']['total'])) /
            (Number(userInputData['basicInfo']['numberOfAppsInScope'])
            )).toFixed(2));

    //adding annualNumberOfTicketsy1 (ams) I8
    userInputData['ams']['ticketsDistribution']['annualNumberOfTickets']['y1'] =
        parseFloat(((Number(h8general_monthlyTotalTicketsAssumed_F40)) *
            (Number(userInputData['basicInfo']['numberOfAppsInScope']))
            * (12)).toFixed(2));
    ams_annualNumberOfTickets_I8(props, userInputData)

    //adding annualNumberOfTicketsy2 (ams) J8
    userInputData['ams']['ticketsDistribution']['annualNumberOfTickets']['y2'] =
        parseFloat(((Number(h8general_monthlyTotalTicketsAssumed_F40)) *
            (Number(userInputData['basicInfo']['numberOfAppsInScopeY2']))
            * (12)).toFixed(2));

    ams_annualNumberOfTickets_J8(props, userInputData)

    //adding annualNumberOfTicketsy3 (ams) K8
    userInputData['ams']['ticketsDistribution']['annualNumberOfTickets']['y3'] =
        parseFloat(((Number(h8general_monthlyTotalTicketsAssumed_F40)) *
            (Number(userInputData['basicInfo']['numberOfAppsInScopeY3']))
            * (12)).toFixed(2));
    ams_annualNumberOfTickets_K8(props, userInputData)
    //adding annualNumberOfTicketsy4 (ams) L8
    userInputData['ams']['ticketsDistribution']['annualNumberOfTickets']['y4'] =
        parseFloat(((Number(h8general_monthlyTotalTicketsAssumed_F40)) *
            (Number(userInputData['basicInfo']['numberOfAppsInScopeY4']))
            * (12)).toFixed(2));;
    ams_annualNumberOfTickets_L8(props, userInputData)
    //adding annualNumberOfTicketsy5 (ams) M8
    userInputData['ams']['ticketsDistribution']['annualNumberOfTickets']['y5'] =
        parseFloat(((Number(h8general_monthlyTotalTicketsAssumed_F40)) *
            (Number(userInputData['basicInfo']['numberOfAppsInScopeY5']))
            * (12)).toFixed(2));

    ams_annualNumberOfTickets_M8(props, userInputData);

    //adding annualNumberOfTicketsy6 (ams) N8
    userInputData['ams']['ticketsDistribution']['annualNumberOfTickets']['y6'] =
        parseFloat(((Number(h8general_monthlyTotalTicketsAssumed_F40)) *
            (Number(userInputData['basicInfo']['numberOfAppsInScopeY6']))
            * (12)).toFixed(2));

    ams_annualNumberOfTickets_N8(props, userInputData);

    //adding annualNumberOfTicketsy7 (ams) O8
    userInputData['ams']['ticketsDistribution']['annualNumberOfTickets']['y7'] =
        parseFloat(((Number(h8general_monthlyTotalTicketsAssumed_F40)) *
            (Number(userInputData['basicInfo']['numberOfAppsInScopeY7']))
            * (12)).toFixed(2));

    ams_annualNumberOfTickets_O8(props, userInputData);

}