export async function fetchData(){
    try {
           const response = await fetch ('https://uselessfacts.jsph.pl/api/v2/facts/random');
           return await response.json();
       }catch (error){
           console.error('Error al obtener los datos globales', error);
       }
}