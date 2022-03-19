import{PipeTransform, Pipe} from '@angular/core';



@Pipe({name:"orderBy"})
export class OrderBy implements PipeTransform{

    /**
     * 
     * @param arr array which needs to be sorted
     * @param column column name which is used for sorting
     * @param order oprder in which array has to be sorted
     */
    
    transform(arr:any[],column:string,order:string){

         //
        //no sorting will be done if column name is not mentioned
        //
        if(column==undefined){
            return arr;
        }
        let result:any[];
        if(order == "ascending")
            result=this.ascending(arr,column);
        else result = this.descending(arr,column);
        return result;
        }
        ascending(arr:any[],column:string){ //ascending method to sort the array in ascending order when clicked on the heading
            arr.sort((a:any,b:any)=>{
                if(a[column]>b[column]){
                    return 1;
                }
                return -1;
            });
            return arr;
        }

        descending(arr:any[],column:string){ //ascending method to sort the array in ascending order when clicked on the heading
            arr.sort((a:any,b:any)=>{
                if(a[column]<b[column]){
                    return 1;
                }
                return -1;
            });
            return arr;
        }
        
    
}