interface LabelValue {
    readonly readonlyX: number,
    label: string,
    size: number,
    flag?: boolean
}

function printLabel(labelObj: LabelValue) {
    console.log(labelObj.label)
    console.log(labelObj.size)
    console.log(labelObj.flag)
}

let myObj = { size: 10, label: 'woshilabel', readonlyX: 2 }

printLabel(myObj)
