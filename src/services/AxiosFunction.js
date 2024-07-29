import Axios from 'axios';
import token from '../constant/Token';

// import api from "../constant/Api_url";


// get request using Axios
export const getData = async (api, body) => {
    const res = await Axios.request({
        method: 'GET',
        url: api,
        headers: {
            Authorization: "Bearer " + token,
        },
        // params: body,
    });
    return await res.data;
};

// post request using Axios

export const postData = async (api, body) => {
    const responseData = await Axios.request({
        method: 'POST',
        url: api,
        headers: {
            Authorization: "Bearer " + token,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: body,
    });
    return await responseData.data;

};

export const jazzCashData = async (api, body) => {
    const responseData = await Axios.request({
        method: 'POST',
        url: api,
        headers: {
            Authorization: "Bearer " + `HLfcBdJ2S9UmfbTgg1KXYYdef93mhqMFau0DrgBgY60dLhh0bAqd8h6kLbHReA8M`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: body,
    });
    return await responseData.data;

};

// put request using Axios
export const updateData = async (api, body) => {
    const res = await Axios.request({
        method: 'PUT',
        url: api,
        // headers: {
        //     Authorization: "Bearer " + localStorage.getItem("token"),
        // },
        data: body,
    });
    return await res.data;
};


// delete request using Axios
export const deleteData = async (api, body) => {
    const res = await Axios.request({
        method: 'DELETE',
        url: api,
        // headers: {
        //     // 'Content-Type': 'application/json',
        //     Authorization: "Bearer " + localStorage.getItem("token"),
        // },
        data: body,
    });
    return await res.data;
};