{
    // mapped types

    const arrayOfNumbers: number[] = [1, 2, 3, 4, 5, 6];
    // const arrayOfStrings: string[] = ["1", "2", "3", "4", "5", "6"];
    const arrayOfStrings : string[] = arrayOfNumbers.map((num) => num.toString());
    // console.log(arrayOfStrings);


    type Area ={
        height: number;
        width: number;
    }
    // type AreaString ={
    //     height: string;
    //     width: string;
    // }
    type AreaString = {
        [key in keyof Area]: string;
    }








}