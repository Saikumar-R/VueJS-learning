import {ref} from 'vue'
export default function useCounter(){
    const count = ref(0)
    const incrementCounter =()=>{
        return count.value ++;
    }
    return{
        count,
        incrementCounter
    }
}