import { selectorFamily, atom} from 'recoil';
import axios from "axios";

export const packageAtom = atom({
    key : 'packageAtom',
    default:null
})

export const packageListAtom = atom({
  key:'packageListAtom',
  default:null
})

export const packageListSelector = selectorFamily({
    key: 'packageListSelector',
    get:  (url) => async () => {
       const response = await axios.get(url);
       if (response.data.success) {
         return response.data.data.packageList;
       }else{
         throw response.data.error;
       }
     }
 });
 