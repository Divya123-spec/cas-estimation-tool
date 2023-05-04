import English from "../Json/English.json"
import ErrorCode from "../Json/ErrorCode.json"

export const randomID = () => {
    return Math.random() * 100;
}

//Convert Currency
export const currencyCoverter = (monetary_value) => {
    let currencyValue = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(monetary_value);
    // return currencyValue.slice(0, currencyValue.length - 3)
    // //for space
    // let currency=currencyValue.toString().split('$')[1];
    // // return currencyValue.slice(0, currencyValue.length - 3)
    // return "$ "+currency;
    return currencyValue
}
export const errorCodeMsg = (code) => {
    const dict = { ...ErrorCode }
    return dict[code];
}
export const englishValue = (id) => {
    const dict = { ...English }
    if (typeof (dict[id]) === "object") {
        return dict[id].label
    }
    else {
        return dict[id];
    }
}
export const infoValue = (id) => {
    const dict = { ...English }
    if (typeof (dict[id]) === "object") {
        return dict[id].text
    }
    else {
        return "";

    }
}
export const ErrorValue = (id) => {
    const dict = { ...English }
    if (typeof (dict[id]) === "object") {
        return dict[id].errorText
    }
    else {
        return "";

    }
}
export const warningValue = (id) => {
    const dict = { ...English }
    if (typeof (dict[id]) === "object") {
        return dict[id].warningText
    }
    else {
        return "";

    }
}
export const getPdfPrintValue = (value) => {
    if (value === undefined || value.length === 0)
        return "N/A";
    else
        return value;
}
export const getPdfPercentPrintValue = (value) => {
    if (value === undefined || value.length === 0)
        return "N/A";
    else
        return "" + value + "%";
}
export const getPdfDecimalPrintValue = (value) => {
    if (value === undefined || value.length === 0)
        return "N/A";
    else
        return "" + value + "";
}
export const NumberValidation = (value) => {
    var numbers = /^([0-9]{1,5})*(\.)?([0-9][0-9]?)?$/;
    if (numbers.test(value) && (value <= 99999 && value >= 0)) {
        return true;
    }
    else {
        return false;
    }
}
export const NumberValidationPercentage = (value) => {
    var numbers = /^([0-9]{1,2})*(\.)?([0-9][0-9]?)?$/;
    if (numbers.test(value) && (value <= 100 && value >= 0)) {
        return true;
    }
    else {
        return false;
    }

}

export const OnlyAllowNumberValidationFivedeigits = (value) => {
    // var numbers = /^([0-9]{1,5})$/;
    var numbers = /^[0-9]*$/;
    if (numbers.test(value) && (value <= 99999 && value >= 0)) {
        return true;
    }
    else {
        return false;
    }
}

export const OnlyAllowNumberValidation = (e, value) => {
    const numbers = /^[0-9]*$/;
    // const exp = /^[0-9]{1,16}$/;
    // return exp.test(String(str));    
    if (numbers.test(value)) {
        return true;
    }
    else {
        return false;
    }
}
export const DateBackendFormat = (date) => {
    const transitionDate = new Date(date);
    let transitionDateNew = transitionDate.getFullYear() + '-' + (transitionDate.getMonth() + 1) + '-' + transitionDate.getDate() + "T" + transitionDate.getHours() + ':' + transitionDate.getMinutes() + ':' + transitionDate.getSeconds() + '.' + transitionDate.getMilliseconds() + 'Z';
    return transitionDateNew;
}
export const DateFormatLocalString = (date) => {
    const transitionDate = new Date(date.split('T')[0]);
    let transitiondateNew = transitionDate.toLocaleDateString();
    return transitiondateNew;
}

//rearranging of rows
export const arrCoversionOrder = (originalArr, orderArr) => {
    let newOrderedArr = [];
    orderArr.forEach((ele) => {
        originalArr.forEach((e) => {
            if (ele == e[0]) {
                newOrderedArr.push(e);
            }
        });
    });
    return newOrderedArr;
};
//rearrangng of rows AMS utilization
export const arrangeRows = (originalArr, orderArr) => {
    let newObj = {}
    orderArr.forEach(element => {
        for (const key in (originalArr)) {
            if (key.includes(element)) {
                newObj[key] = originalArr[key]
            }
        }
    });
    return newObj;
}

//rearranging of columns
export const arrangeColumn = (originalArr, orderArr) => {
    let arrangedColumns = originalArr.map((firstarr) => {
        let newobjArrange = {};

        orderArr.forEach(element => {
            for (let key in firstarr[1]) {
                if (element == key) {
                    newobjArrange[key] = firstarr[1][key]
                }
            }
        });
        firstarr[1] = newobjArrange;
        return firstarr
    })

    return arrangedColumns;

}
//arrange columns for AIOPS
export const arrangeColumnAIOPS = (originalArr, orderArr) => {
    let arrangedColumns = originalArr.map((firstarr) => {
        let newobjArrange = {};
        orderArr.forEach(element => {
            if(firstarr[0]==='aiOpsObservabilityToolDefaultSelection'){
                newobjArrange = firstarr[1];
            }else if(firstarr[0]==='aiOpsArmToolDefaultSelection'){
                newobjArrange= firstarr[1];
            }else {
                for (let key in firstarr[1]) {
                    if (element == key) {
                        newobjArrange[key] = firstarr[1][key]
                    }
                }
            }
        });
        firstarr[1] = newobjArrange;
        return firstarr
    })

    return arrangedColumns;

}

  //rearranging of columns in loud landscape
export const CloudlandscapeData=(originalArr, orderArr)=>{

    let newArr=[];

    orderArr.forEach(newele=>{
        originalArr.forEach(orgEle=>{
            if(orgEle.includes(newele)){
               newArr.push(orgEle) 
            }
        })
    })
    return newArr;
}
