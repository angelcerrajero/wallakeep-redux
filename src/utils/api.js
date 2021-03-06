import axios from 'axios';
const API_URL = `http://localhost:3001/apiv1/anuncios?`


export const api = () => {
    
  return {

    getTagsAds: async (query) => {
        
        const endPoint = `http://localhost:3001/apiv1/anuncios?tag=${query}`
        const response = await axios.get(endPoint);
      return response.data.results;

    },
    
    getAds: async (query) => {
        const endPoint = `http://localhost:3001/apiv1/anuncios`
        const response = await axios.get(endPoint);
      return response.data.results;

    },

    getAdsbySearch: async (name, price, tagSelected, venta) => {
        
        let endPoint = `${API_URL}`
        
        if(tagSelected){
          endPoint = `${API_URL}tag=${tagSelected}`
          
        }if(price){
          endPoint = `${endPoint}&price=0-${price}`
          
           
        }if(name){
          endPoint = `${endPoint}&name=${name}`
          
        }if(venta){
          endPoint = `${endPoint}&venta=${venta}`
          
        }
        // console.log(endPoint)
        const response = await axios.get(endPoint);
      return response.data.results;

    },

    findAds: async (query) => {
        
        const endPoint = `http://localhost:3001/apiv1/anuncios?name=${query}`;
        
        const response = await axios.get(endPoint);
      return response.data.results;
    },

    findAdByID: async (id) => {
        const endPoint = `http://localhost:3001/apiv1/anuncios/${id}`;
        const response = await axios.get(endPoint);
      return response.data.result;
        
      },
      
      getTags: async () => {
        const endPoint = `http://localhost:3001/apiv1/tags`
        
        const response = await axios.get(endPoint);
        return response.data.results;
        

    },

    editAdvert: async (id, advert) => {
      const endPoint = `http://localhost:3001/apiv1/anuncios/${id}`;
      console.log('enpoint de edit es: ', endPoint)
			const res = await axios({
        method: 'put',
        url: endPoint,
        data: advert
      });
      return res;
        
    },
    
    newAdvert: async (advert) => {
      console.log(advert)
      const endPoint = `http://localhost:3001/apiv1/anuncios`;
      // if(advert.venta === "true"){
      //   advert.venta = true;
      // }else{
      //   advert.venta = false;
      // }
      
			const res = await axios({
        method: 'post',
        url: endPoint,
        data: advert
      });
      return res.data;
    }


  }

}

export default api;
