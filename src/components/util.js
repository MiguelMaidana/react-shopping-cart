export default function formarCurrency(num){
    return "$" + Number(num.toFixed(1)).toLocaleString() + " "
}