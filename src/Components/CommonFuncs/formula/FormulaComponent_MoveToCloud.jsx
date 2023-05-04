export const moveToCloud_nonCloudAppsPercentagePlannedToMoveToCloudEachYear_C135 = (props, userInputData) => {
    //adding C137
    userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y1'] =
        parseFloat((((Number(userInputData['moveToCloud']['appsNotOnCloudAtStartOfYear']['y1'])) *
            (Number(userInputData['moveToCloud']['nonCloudAppsPercentagePlannedToMoveToCloudEachYear']['y1']))
        )/100).toFixed(2));
        moveToCloud_appsCountToBeMovingToCloudYoY_C137(props, userInputData);

}
export const moveToCloud_nonCloudAppsPercentagePlannedToMoveToCloudEachYear_D135 = (props, userInputData) => {
    //adding D137
    userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y2'] =
        parseFloat((((Number(userInputData['moveToCloud']['appsNotOnCloudAtStartOfYear']['y2'])) *
            (Number(userInputData['moveToCloud']['nonCloudAppsPercentagePlannedToMoveToCloudEachYear']['y2']))
        )/100).toFixed(2));
         moveToCloud_appsCountToBeMovingToCloudYoY_D137(props, userInputData);

}
export const moveToCloud_nonCloudAppsPercentagePlannedToMoveToCloudEachYear_E135 = (props, userInputData) => {
    //adding E137
    userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y3'] =
        parseFloat((((Number(userInputData['moveToCloud']['appsNotOnCloudAtStartOfYear']['y3'])) *
            (Number(userInputData['moveToCloud']['nonCloudAppsPercentagePlannedToMoveToCloudEachYear']['y3']))
        )/100).toFixed(2));
         moveToCloud_appsCountToBeMovingToCloudYoY_E137(props, userInputData);

}

export const moveToCloud_nonCloudAppsPercentagePlannedToMoveToCloudEachYear_F135 = (props, userInputData) => {
    //adding E137
    userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y4'] =
        parseFloat((((Number(userInputData['moveToCloud']['appsNotOnCloudAtStartOfYear']['y4'])) *
            (Number(userInputData['moveToCloud']['nonCloudAppsPercentagePlannedToMoveToCloudEachYear']['y4']))
        )/100).toFixed(2));
         moveToCloud_appsCountToBeMovingToCloudYoY_F137(props, userInputData);

}

export const moveToCloud_nonCloudAppsPercentagePlannedToMoveToCloudEachYear_G135 = (props, userInputData) => {
    //adding E137
    userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y5'] =
        parseFloat((((Number(userInputData['moveToCloud']['appsNotOnCloudAtStartOfYear']['y5'])) *
            (Number(userInputData['moveToCloud']['nonCloudAppsPercentagePlannedToMoveToCloudEachYear']['y5']))
        )/100).toFixed(2));
         moveToCloud_appsCountToBeMovingToCloudYoY_G137(props, userInputData);

}

export const moveToCloud_nonCloudAppsPercentagePlannedToMoveToCloudEachYear_H135 = (props, userInputData) => {
    //adding E137
    userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y6'] =
        parseFloat((((Number(userInputData['moveToCloud']['appsNotOnCloudAtStartOfYear']['y6'])) *
            (Number(userInputData['moveToCloud']['nonCloudAppsPercentagePlannedToMoveToCloudEachYear']['y6']))
        )/100).toFixed(2));
         moveToCloud_appsCountToBeMovingToCloudYoY_H137(props, userInputData);

}

export const moveToCloud_nonCloudAppsPercentagePlannedToMoveToCloudEachYear_I135 = (props, userInputData) => {
    //adding E137
    userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y7'] =
        parseFloat((((Number(userInputData['moveToCloud']['appsNotOnCloudAtStartOfYear']['y7'])) *
            (Number(userInputData['moveToCloud']['nonCloudAppsPercentagePlannedToMoveToCloudEachYear']['y7']))
        )/100).toFixed(2));
         moveToCloud_appsCountToBeMovingToCloudYoY_I137(props, userInputData);

}

export const moveToCloud_appsNotOnCloudAtStartOfYear_C136 = (props, userInputData) => {
    //adding C137
    userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y1'] =
        parseFloat((((Number(userInputData['moveToCloud']['nonCloudAppsPercentagePlannedToMoveToCloudEachYear']['y1'])) *
            (Number(userInputData['moveToCloud']['appsNotOnCloudAtStartOfYear']['y1']))
        )/100).toFixed(2));
        moveToCloud_appsCountToBeMovingToCloudYoY_C137(props, userInputData)
    //subtracting C139
    userInputData['moveToCloud']['appsTotalNotOnCloudByEndOfYear']['y1'] =
        parseFloat(((Number(userInputData['moveToCloud']['appsNotOnCloudAtStartOfYear']['y1'])) -
            (Number(userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y1']))
        ).toFixed(2));
        moveToCloud_appsTotalNotOnCloudByEndOfYear_C139(props, userInputData)
}
export const moveToCloud_appsCountToBeMovingToCloudYoY_C137 = (props, userInputData) => {
    //adding C138
    userInputData['moveToCloud']['appsTotalOnCloudByEndOfYear']['y1'] =
        parseFloat(((Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['total'])) +
            (Number(userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y1']))
        ).toFixed(2));
        moveToCloud_appsTotalOnCloudByEndOfYear_C138(props, userInputData)
    //subtracting C139
    userInputData['moveToCloud']['appsTotalNotOnCloudByEndOfYear']['y1'] =
        parseFloat(((Number(userInputData['moveToCloud']['appsNotOnCloudAtStartOfYear']['y1'])) -
            (Number(userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y1']))
        ).toFixed(2));
        moveToCloud_appsTotalNotOnCloudByEndOfYear_C139(props, userInputData)

}

export const moveToCloud_appsTotalOnCloudByEndOfYear_C138 = (props, userInputData) => {
    //adding D138
    userInputData['moveToCloud']['appsTotalOnCloudByEndOfYear']['y2'] =
        parseFloat(((Number(userInputData['moveToCloud']['appsTotalOnCloudByEndOfYear']['y1'])) +
            (Number(userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y2']))
        ).toFixed(2));
        moveToCloud_appsTotalOnCloudByEndOfYear_D138(props, userInputData) 

}
export const moveToCloud_appsTotalNotOnCloudByEndOfYear_C139 = (props, userInputData) => {
    //adding D136
    userInputData['moveToCloud']['appsNotOnCloudAtStartOfYear']['y2'] =
        parseFloat(((Number(userInputData['moveToCloud']['appsTotalNotOnCloudByEndOfYear']['y1']))
        ).toFixed(2));
        moveToCloud_appsNotOnCloudAtStartOfYear_D136(props, userInputData)
    //subtracting D139
    userInputData['moveToCloud']['appsTotalNotOnCloudByEndOfYear']['y2'] =
        parseFloat(((Number(userInputData['moveToCloud']['appsTotalNotOnCloudByEndOfYear']['y1'])) -
            (Number(userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y2']))
        ).toFixed(2));
        moveToCloud_appsTotalNotOnCloudByEndOfYear_D139(props, userInputData)
}

export const moveToCloud_appsNotOnCloudAtStartOfYear_D136 = (props, userInputData) => {
      //adding D137
      userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y2'] =
      parseFloat((((Number(userInputData['moveToCloud']['appsNotOnCloudAtStartOfYear']['y2'])) *
          (Number(userInputData['moveToCloud']['nonCloudAppsPercentagePlannedToMoveToCloudEachYear']['y2']))
      )/100).toFixed(2));
       moveToCloud_appsCountToBeMovingToCloudYoY_D137(props, userInputData);

  

}

export const moveToCloud_appsCountToBeMovingToCloudYoY_D137 = (props, userInputData) => {
    //adding D138
    userInputData['moveToCloud']['appsTotalOnCloudByEndOfYear']['y2'] =
        parseFloat(((Number(userInputData['moveToCloud']['appsTotalOnCloudByEndOfYear']['y1'])) +
            (Number(userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y2']))
        ).toFixed(2));
        moveToCloud_appsTotalOnCloudByEndOfYear_D138(props, userInputData)
    //subtracting D139
    userInputData['moveToCloud']['appsTotalNotOnCloudByEndOfYear']['y2'] =
        parseFloat(((Number(userInputData['moveToCloud']['appsTotalNotOnCloudByEndOfYear']['y1'])) -
            (Number(userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y2']))
        ).toFixed(2));
        moveToCloud_appsTotalNotOnCloudByEndOfYear_D139(props, userInputData)

}

export const moveToCloud_appsTotalOnCloudByEndOfYear_D138 = (props, userInputData) => {
    //adding E138
    userInputData['moveToCloud']['appsTotalOnCloudByEndOfYear']['y3'] =
        parseFloat(((Number(userInputData['moveToCloud']['appsTotalOnCloudByEndOfYear']['y2'])) +
            (Number(userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y3']))
        ).toFixed(2));
        moveToCloud_appsTotalOnCloudByEndOfYear_E138(props, userInputData)
}
export const moveToCloud_appsTotalNotOnCloudByEndOfYear_D139 = (props, userInputData) => {
    //adding E136
    userInputData['moveToCloud']['appsNotOnCloudAtStartOfYear']['y3'] =
        parseFloat(((Number(userInputData['moveToCloud']['appsTotalNotOnCloudByEndOfYear']['y2']))
        ).toFixed(2));
        moveToCloud_appsNotOnCloudAtStartOfYear_E136(props, userInputData);
    //subtracting E139
    userInputData['moveToCloud']['appsTotalNotOnCloudByEndOfYear']['y3'] =
        parseFloat(((Number(userInputData['moveToCloud']['appsTotalNotOnCloudByEndOfYear']['y2'])) -
            (Number(userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y3']))
        ).toFixed(2));
        moveToCloud_appsTotalNotOnCloudByEndOfYear_E139(props, userInputData);

}

export const moveToCloud_appsNotOnCloudAtStartOfYear_E136 = (props, userInputData) => {
    //adding E137
    userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y3'] =
    parseFloat((((Number(userInputData['moveToCloud']['appsNotOnCloudAtStartOfYear']['y3'])) *
        (Number(userInputData['moveToCloud']['nonCloudAppsPercentagePlannedToMoveToCloudEachYear']['y3']))
    )/100).toFixed(2));
     moveToCloud_appsCountToBeMovingToCloudYoY_E137(props, userInputData);



}

export const moveToCloud_appsCountToBeMovingToCloudYoY_E137 = (props, userInputData) => {
  //adding E138
  userInputData['moveToCloud']['appsTotalOnCloudByEndOfYear']['y3'] =
      parseFloat(((Number(userInputData['moveToCloud']['appsTotalOnCloudByEndOfYear']['y2'])) +
          (Number(userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y3']))
      ).toFixed(2));
      moveToCloud_appsTotalOnCloudByEndOfYear_E138(props, userInputData)
  //subtracting D139
  userInputData['moveToCloud']['appsTotalNotOnCloudByEndOfYear']['y3'] =
      parseFloat(((Number(userInputData['moveToCloud']['appsTotalNotOnCloudByEndOfYear']['y2'])) -
          (Number(userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y3']))
      ).toFixed(2));
      moveToCloud_appsTotalNotOnCloudByEndOfYear_E139(props, userInputData)

}

export const moveToCloud_appsTotalOnCloudByEndOfYear_E138 = (props, userInputData) => {
  //adding F138
  userInputData['moveToCloud']['appsTotalOnCloudByEndOfYear']['y4'] =
      parseFloat(((Number(userInputData['moveToCloud']['appsTotalOnCloudByEndOfYear']['y3'])) +
          (Number(userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y4']))
      ).toFixed(2));
      moveToCloud_appsTotalOnCloudByEndOfYear_F138(props, userInputData)
}
export const moveToCloud_appsTotalNotOnCloudByEndOfYear_E139 = (props, userInputData) => {
  //adding F136
  userInputData['moveToCloud']['appsNotOnCloudAtStartOfYear']['y4'] =
      parseFloat(((Number(userInputData['moveToCloud']['appsTotalNotOnCloudByEndOfYear']['y3']))
      ).toFixed(2));
      moveToCloud_appsNotOnCloudAtStartOfYear_F136(props, userInputData);
  //subtracting E139
  userInputData['moveToCloud']['appsTotalNotOnCloudByEndOfYear']['y4'] =
      parseFloat(((Number(userInputData['moveToCloud']['appsTotalNotOnCloudByEndOfYear']['y3'])) -
          (Number(userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y4']))
      ).toFixed(2));
      moveToCloud_appsTotalNotOnCloudByEndOfYear_F139(props, userInputData);
}


export const moveToCloud_appsNotOnCloudAtStartOfYear_F136 = (props, userInputData) => {
    //adding F137
    userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y4'] =
    parseFloat((((Number(userInputData['moveToCloud']['appsNotOnCloudAtStartOfYear']['y4'])) *
        (Number(userInputData['moveToCloud']['nonCloudAppsPercentagePlannedToMoveToCloudEachYear']['y4']))
    )/100).toFixed(2));
     moveToCloud_appsCountToBeMovingToCloudYoY_F137(props, userInputData);



}

export const moveToCloud_appsCountToBeMovingToCloudYoY_F137 = (props, userInputData) => {
  //adding F138
  userInputData['moveToCloud']['appsTotalOnCloudByEndOfYear']['y4'] =
      parseFloat(((Number(userInputData['moveToCloud']['appsTotalOnCloudByEndOfYear']['y3'])) +
          (Number(userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y4']))
      ).toFixed(2));
      moveToCloud_appsTotalOnCloudByEndOfYear_F138(props, userInputData)
  //subtracting F139
  userInputData['moveToCloud']['appsTotalNotOnCloudByEndOfYear']['y4'] =
      parseFloat(((Number(userInputData['moveToCloud']['appsTotalNotOnCloudByEndOfYear']['y3'])) -
          (Number(userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y4']))
      ).toFixed(2));
      moveToCloud_appsTotalNotOnCloudByEndOfYear_F139(props, userInputData)

}

export const moveToCloud_appsTotalOnCloudByEndOfYear_F138 = (props, userInputData) => {
  //adding G138
  userInputData['moveToCloud']['appsTotalOnCloudByEndOfYear']['y5'] =
      parseFloat(((Number(userInputData['moveToCloud']['appsTotalOnCloudByEndOfYear']['y4'])) +
          (Number(userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y5']))
      ).toFixed(2));
      moveToCloud_appsTotalOnCloudByEndOfYear_G138(props, userInputData)
}
export const moveToCloud_appsTotalNotOnCloudByEndOfYear_F139 = (props, userInputData) => {
  //adding G136
  userInputData['moveToCloud']['appsNotOnCloudAtStartOfYear']['y5'] =
      parseFloat(((Number(userInputData['moveToCloud']['appsTotalNotOnCloudByEndOfYear']['y4']))
      ).toFixed(2));
      moveToCloud_appsNotOnCloudAtStartOfYear_G136(props, userInputData);
  //subtracting G139
  userInputData['moveToCloud']['appsTotalNotOnCloudByEndOfYear']['y5'] =
      parseFloat(((Number(userInputData['moveToCloud']['appsTotalNotOnCloudByEndOfYear']['y4'])) -
          (Number(userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y5']))
      ).toFixed(2));
      moveToCloud_appsTotalNotOnCloudByEndOfYear_G139(props, userInputData);
}


//G


export const moveToCloud_appsNotOnCloudAtStartOfYear_G136 = (props, userInputData) => {
    //adding G137
    userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y5'] =
    parseFloat((((Number(userInputData['moveToCloud']['appsNotOnCloudAtStartOfYear']['y5'])) *
        (Number(userInputData['moveToCloud']['nonCloudAppsPercentagePlannedToMoveToCloudEachYear']['y5']))
    )/100).toFixed(2));
     moveToCloud_appsCountToBeMovingToCloudYoY_G137(props, userInputData);



}

export const moveToCloud_appsCountToBeMovingToCloudYoY_G137 = (props, userInputData) => {
  //adding G138
  userInputData['moveToCloud']['appsTotalOnCloudByEndOfYear']['y5'] =
      parseFloat(((Number(userInputData['moveToCloud']['appsTotalOnCloudByEndOfYear']['y4'])) +
          (Number(userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y5']))
      ).toFixed(2));
      moveToCloud_appsTotalOnCloudByEndOfYear_G138(props, userInputData)
  //subtracting G139
  userInputData['moveToCloud']['appsTotalNotOnCloudByEndOfYear']['y5'] =
      parseFloat(((Number(userInputData['moveToCloud']['appsTotalNotOnCloudByEndOfYear']['y4'])) -
          (Number(userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y5']))
      ).toFixed(2));
      moveToCloud_appsTotalNotOnCloudByEndOfYear_G139(props, userInputData)

}

export const moveToCloud_appsTotalOnCloudByEndOfYear_G138 = (props, userInputData) => {
  //adding H138
  userInputData['moveToCloud']['appsTotalOnCloudByEndOfYear']['y6'] =
      parseFloat(((Number(userInputData['moveToCloud']['appsTotalOnCloudByEndOfYear']['y5'])) +
          (Number(userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y6']))
      ).toFixed(2));
      moveToCloud_appsTotalOnCloudByEndOfYear_H138(props, userInputData)
}
export const moveToCloud_appsTotalNotOnCloudByEndOfYear_G139 = (props, userInputData) => {
  //adding H136
  userInputData['moveToCloud']['appsNotOnCloudAtStartOfYear']['y6'] =
      parseFloat(((Number(userInputData['moveToCloud']['appsTotalNotOnCloudByEndOfYear']['y5']))
      ).toFixed(2));
      moveToCloud_appsNotOnCloudAtStartOfYear_H136(props, userInputData);
  //subtracting H139
  userInputData['moveToCloud']['appsTotalNotOnCloudByEndOfYear']['y6'] =
      parseFloat(((Number(userInputData['moveToCloud']['appsTotalNotOnCloudByEndOfYear']['y5'])) -
          (Number(userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y6']))
      ).toFixed(2));
      moveToCloud_appsTotalNotOnCloudByEndOfYear_H139(props, userInputData);
}

//H

export const moveToCloud_appsNotOnCloudAtStartOfYear_H136 = (props, userInputData) => {
    //adding H137
    userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y6'] =
    parseFloat((((Number(userInputData['moveToCloud']['appsNotOnCloudAtStartOfYear']['y6'])) *
        (Number(userInputData['moveToCloud']['nonCloudAppsPercentagePlannedToMoveToCloudEachYear']['y6']))
    )/100).toFixed(2));
     moveToCloud_appsCountToBeMovingToCloudYoY_H137(props, userInputData);



}

export const moveToCloud_appsCountToBeMovingToCloudYoY_H137 = (props, userInputData) => {
  //adding H138
  userInputData['moveToCloud']['appsTotalOnCloudByEndOfYear']['y6'] =
      parseFloat(((Number(userInputData['moveToCloud']['appsTotalOnCloudByEndOfYear']['y5'])) +
          (Number(userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y6']))
      ).toFixed(2));
      moveToCloud_appsTotalOnCloudByEndOfYear_H138(props, userInputData)
  //subtracting H139
  userInputData['moveToCloud']['appsTotalNotOnCloudByEndOfYear']['y6'] =
      parseFloat(((Number(userInputData['moveToCloud']['appsTotalNotOnCloudByEndOfYear']['y5'])) -
          (Number(userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y6']))
      ).toFixed(2));
      moveToCloud_appsTotalNotOnCloudByEndOfYear_H139(props, userInputData)

}

export const moveToCloud_appsTotalOnCloudByEndOfYear_H138 = (props, userInputData) => {
  //adding I138
  userInputData['moveToCloud']['appsTotalOnCloudByEndOfYear']['y7'] =
      parseFloat(((Number(userInputData['moveToCloud']['appsTotalOnCloudByEndOfYear']['y6'])) +
          (Number(userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y7']))
      ).toFixed(2));
    
}
export const moveToCloud_appsTotalNotOnCloudByEndOfYear_H139 = (props, userInputData) => {
  //adding I136
  userInputData['moveToCloud']['appsNotOnCloudAtStartOfYear']['y7'] =
      parseFloat(((Number(userInputData['moveToCloud']['appsTotalNotOnCloudByEndOfYear']['y6']))
      ).toFixed(2));
      moveToCloud_appsNotOnCloudAtStartOfYear_I136(props, userInputData);
  //subtracting I139
  userInputData['moveToCloud']['appsTotalNotOnCloudByEndOfYear']['y7'] =
      parseFloat(((Number(userInputData['moveToCloud']['appsTotalNotOnCloudByEndOfYear']['y6'])) -
          (Number(userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y7']))
      ).toFixed(2));
}


//I

export const moveToCloud_appsNotOnCloudAtStartOfYear_I136 = (props, userInputData) => {
    //adding I137
    userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y7'] =
    parseFloat((((Number(userInputData['moveToCloud']['appsNotOnCloudAtStartOfYear']['y7'])) *
        (Number(userInputData['moveToCloud']['nonCloudAppsPercentagePlannedToMoveToCloudEachYear']['y7']))
    )/100).toFixed(2));
     moveToCloud_appsCountToBeMovingToCloudYoY_I137(props, userInputData);



}

export const moveToCloud_appsCountToBeMovingToCloudYoY_I137 = (props, userInputData) => {
  //adding I138
  userInputData['moveToCloud']['appsTotalOnCloudByEndOfYear']['y7'] =
      parseFloat(((Number(userInputData['moveToCloud']['appsTotalOnCloudByEndOfYear']['y6'])) +
          (Number(userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y7']))
      ).toFixed(2));
  //subtracting I139
  userInputData['moveToCloud']['appsTotalNotOnCloudByEndOfYear']['y7'] =
      parseFloat(((Number(userInputData['moveToCloud']['appsTotalNotOnCloudByEndOfYear']['y6'])) -
          (Number(userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y7']))
      ).toFixed(2));

}

