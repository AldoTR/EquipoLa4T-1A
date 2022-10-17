export function desviacion(array:number[]) {
    var total=0, res, numDatos, item,entero;
    numDatos = array.length;
    for (item = 0; item < numDatos; item++){
        total += array[item];
    }
    res = total/numDatos;

    return res;
}