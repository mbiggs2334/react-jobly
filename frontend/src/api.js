import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get", header = {}) {
    this.token = localStorage.getItem('bearer_token');
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { authorization: `Bearer ${JoblyApi.token}`, ...header };
    const params = (method === "get")
        ? data
        : {};
    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get list of all jobs */
  static async getJobs() {
    let res = await this.request(`jobs`);
    return res;
  }

  static async authUser({username, password}){
    let res = await this.request("auth/token", {username, password}, 'post', {withCredentials: true});
    return res;
  }

  static async editUserInfo(data){
    let userInfo = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email
    };
    let res = await this.request(`users/${data.username}`, userInfo, 'patch');
    return res;
  }

  static async getUserInfo(username){
    let res = await this.request(`users/${username}`);
    return res;
  }

  static async applyToJob(username, jobId){
    let res = await this.request(`users/${username}/jobs/${jobId}`, {} , 'post');
    return res;
  }

  static async signUpUser(data){
    let res = await this.request(`auth/register`, data, 'post');
    return res;
  }
  
}

// for now, put token ("testuser" / "password" on class)
JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

    export default JoblyApi;