export class Utilitary {
    public static sumValues(myArray: number[]) {
        let total = 0;
        for (let j = 0; j < myArray.length; j++) {
            total += myArray[j];
        }
        return total;
    }
}