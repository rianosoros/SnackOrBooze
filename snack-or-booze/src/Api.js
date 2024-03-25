import axios from "axios";

const BASE_API_URL = "http://localhost:3002";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {

  static async getSnacks() {
    const snacks = await axios.get(`${BASE_API_URL}/snacks`);
    return snacks.data;
  }

  static async getDrinks() {
    const drinks = await axios.get(`${BASE_API_URL}/drinks`);
    return drinks.data;
  }

  static async addItem(formData, type) {
    try {
      const { name, description, recipe, serve } = formData;
      const url = `${BASE_API_URL}/${type}`;
      console.log('Constructed URL:', url);
      const newItem = await axios.post(url, {
        name,
        description,
        recipe,
        serve
      });
      return newItem.data;
    } catch (error) {
      throw new Error(`Error adding ${type}: ${error.message}`);
    }
  }
  

}

export default SnackOrBoozeApi;
