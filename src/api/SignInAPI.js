const signInAPI = {
    adminInfo: {
        emailId: 'admin@gmail.com',
        password: '123',
    },

    userInfos: [
        {
            emailId: 'admin1@gmail.com',
            password: '345',
        },
        {
            emailId: 'admin2@gmail.com',
            password: '678',
        },
    ],
    async verifyAdminUserInfo ({emailId, password}) {
        return new Promise((resolve, reject)=> {
            setTimeout(()=> {
            if (this.adminInfo.emailId === emailId && this.adminInfo.password === password) {
                resolve({message: 'succeed'});
            } else {
                reject({message: 'error'});
            }
        }, 1000);
     } );
    },  

    async verifyRegularUserInfo ({emailId, password}) {
        return new Promise((resolve, reject)=> {
            setTimeout(()=> {
                for(let i=0; i < this.userInfos.length; i++){
                    if(this.userInfos[i].emailId && this.userInfos[i].password === password ){
                        resolve({message: 'succeed'});
                        return;
                    } 
                }
                reject({message: 'error'});
            }, 1000);
        });
    }, 
    thisTest() {
        console.log(this);
    }
}
//testing
//signInAPI.verifyAdminUserInfo({emailId:'admin@gmail.com', password:'123'}).then(response =>console.log(response))
//signInAPI.verifyAdminUserInfo({emailId:'admin@gmail.com', password:1234}).then(response =>console.log(response)).catch(e=>console.log(e))