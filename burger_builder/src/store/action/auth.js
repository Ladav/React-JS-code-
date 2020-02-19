import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authSuccess = () => {
    return {
        type: actionTypes.AUTH_SUCCESS
    };
};
export const authFailed = () => {
    return {
        type: actionTypes.AUTH_FAILED
    };
};
export const authStart = (authData) => {
    return {
        type: actionTypes.AUTH_START,
        authData: authData
    };
};

export const auth = (email, pwd) => {
    return dispatch => {
        const authData = {
            token:{
                type: "service_account",
                project_id: "lets-react-df1ac",
                private_key_id: "87aa29686333022bf04c14b22b4fe49aa7205907",
                private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDJdZyMFCMqCCm8\nQMhlOHqtdFBLp8FB0vaEmnoc4uKkTANUp/+YpD7P/1xR2owlNxnQOb1/YvPjNDKy\n8w73ddnK3mxKydxnDns7DLFAgmT5dPPSqRr+Dj4RRv8HAillsma2RfHejO+ynwd\nyqJOtDKClc3qRr9J9GlvygFRhKHe9d9CD1F3CLOiIOs/BBRBOaKhzbnL/LfWxeUh\ndP1iGDB2soSe26y4oouMH9O3UZq43RfgwKfoz0cQZW4QhMtelqGyR9VeiNTWbmSp\n1s07VuLihLc9APt2hzNKppW2DQWN4AcAlVSTkP9ziQ1f6JqOii+Csb/2GY2bu3rn\n7H0nFwcHAgMBAAECggEAATTfnaUnOsK2wUZgDN8kOPK34mQcT7EcQdoM/ixLsDE2\nWeTxrm/ZYnSEkIbvDPACCxG1dVRZ4pP288Rp5AiEJ+diHaaKOe92F1moyi5DcWvQ\nc27egjkH2lDLpJxkXt2C0pcXQd4U/kEHMkR66V7B6K9N/ueykJZSpVU/4cWaFJRA\nqxxNDFzkXZ6vgcRoynp0ndvZX/ypZbmUpJM3p7EomOjWRAa93czvDSB6GtGbRhNP\nuiqIdH4xqAyluiNTLEZFZyJaidMM+GIXZYzYJkgkjoBclZPiPkiF9t2BRX6D5aSr\nkJ4jjAiDa3c3n880z4jkargVZoAi/EGqzUtW1O1wHQKBgQDv/LG0Kys98147qGRP\n4shyHJiJFGQWoc75ISAHezIZr4FHcen0hoVfUUEbs+fuji0SlML2qyyhIJCy3/SR\nJrA/+LC5BtymO0hOM1YGC/yotjSfFK9KMWZO1v67KQPU+vMJKkzcV3fwqJLcPW3g\nH0DtJO0LzW56iNYCaKLLGgqZUwKBgQDW5s/6IdXPWz3f4lZadHUKfGzNr2tgDtLP\nM599n+1mobtls/NriAMuJad0UJBrejQ50OBDUrxQVghnMS6ELnql8dc+JGodXXkQ\ngCEYoaDF+3Lux89dBgO06Wcxn8N43jbiQXEgZc0ai+6h8/Sd59D0Wi5JdulfINHd\nni09x7yA/QKBgQDV4qfaRHMopoNAtkaY8CznjtbfrT268gFOBhjOshynycR1kXAK\nz+2EUx2s+/1knnBLVCwivdJr1GNCGNmWmB2TFiki7puux70cfSJZB0vqbWGeukez\n3y0obPLgiaBxrCr46ytPYeFyqjshcNpBWnl6IWPnFfM14EikIu+cBhyWIwKBgBrB\n4mNikxyeX7XgmJ/qoCgOFf4GOXhcYCMsak9Z+lUtDgg7v7ND3CGCzrbM0S6QqLAK\nMeIwCwJ1s9YlaYVLxDmlQweZwRym5swHKBfJCBuek1Dn0AnlFdEQvqiPG+eQw4So\nYU2HX2JOygegOHTwyDOkht7ez2/oxjix2TA4DmCBAoGBAOiQVxUzHUQk+pWuUH7L\nImaKT7JRO4w43l3hcejqN9TZAI/S0QNhs4vPOJIuyjyB05TpHK/wb6xei4HEB0HM\nw8+576m/C3UFIFa8QhLSjDi7qUbjVVCFa9DiTDL48GS0N5rOHdM+3VKXp7KJdEyc\nFMdMK5tHn5UutzLxoniJ+9aE\n-----END PRIVATE KEY-----\n",
                client_email: "firebase-adminsdk-xegwl@lets-react-df1ac.iam.gserviceaccount.com",
                client_id: "106548879138856780326",
                auth_uri: "https://accounts.google.com/o/oauth2/auth",
                token_uri: "https://oauth2.googleapis.com/token",
                auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
                client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xegwl%40lets-react-df1ac.iam.gserviceaccount.com"
              },
            returnSecureToken: true
        }
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyC01itR9yOO2T8DsCXJmlWHd8sna6iWtIo', authData)
            .then(res => {
                console.log(res)
                dispatch(authStart(res.data));
            })
            .catch(err => {
                console.log(err)
                dispatch(authFailed(err));
            })
    };
};
