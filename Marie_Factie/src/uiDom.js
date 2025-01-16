import { fetchData } from "./apiService"


export async function PlayGame() {

    const fact = await fetchData();
   
    document.getElementById('dataCountries').innerHTML = fact.text;
    
}
 