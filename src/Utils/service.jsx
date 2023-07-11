export function objectsToLabel(data){
    const options= data.map((value)=>{
        return {
            label:value.productName,
            value:value
        }
    })
    console.log(options)
    return options
}