/* This api.js file will be required for using the Twitch API so we can have a games page where I can pull most popular games on twitch. After doing some research, axios will be used, so will be imoprted*/

import axios from 'axios'


let api = axios.create({
    headers: {
        /* I have created a application on the twitch developers site so I can get a client ID*/
        'client-ID': '9qyx465jvhtz1uh6v8da7lftihmeem',

        /* After some extensive research on how to get a Access Token to be able to use the TWITCH API, I found the following site was very useful to get the Oauth(access) Token which is requrired to use this API */
        'Authorization': 'Bearer fd01u8eo957udo9v34oet31v52nmwe'
        
    }
})

export default api;