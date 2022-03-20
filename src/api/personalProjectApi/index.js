const emailReg =
  /^(?:(?!.*?[.]{2})[a-zA-Z0-9](?:[a-zA-Z0-9.+!%-]{1,64}|)|\"[a-zA-Z0-9.+!% -]{1,64}\")@[a-zA-Z0-9][a-zA-Z0-9.-]+(.[a-z]{2,}|.[0-9]{1,})$/;

export const personalProjectApi = {
  users: {
    'user1@gmail.com': {
      email: 'user1@gmail.com',
      password: 'user1',
    },
    'user2@gmail.com': {
      email: 'user2@gmail.com',
      password: 'user2',
    },
    "admin": {
      email: "admin",
      password: "admin",
    },
  },
  signIn(pro) {
    
    const email = pro.email;
    const password = pro.passWord;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!email || !this.users[email] ) {
          reject({
            message: 'User is not existed !',
            status: false,
          });
        } else if (this.users[email].password !== password) {
          reject({ message: 'Password is not correct !', status: false });
        } else {
          resolve({
            json() {
              if (email === "admin") {
                return Promise.resolve({
                  message: "admin",
                  status: true,
                });
              } else {
                return Promise.resolve({
                  message: "Login succeed",
                  status: true,
                });
              }
            },
          });
        }
      }, 1000);
    });
  },
  signUp(pro) {
    const email = pro.email;
    const password = pro.passWord;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!email || !emailReg.test(email)) {
          reject({
            message: 'Email is not valid !',
            status: false,
          });
        } else if (!password) {
          reject({
            message: 'Password is not valid !',
            status: false,
          });
        } else if (this.users[email]) {
          reject({
            message: 'User is existed !',
            status: false,
          });
        } else {
          this.users[email] = {
            email,
            password,
          };
          resolve({
            json() {
              return Promise.resolve({
                message: 'Sign up succeed',
                status: true,
              });
            },
          });
        }
      }, 1000);
    });
  },

  reSetPW(email) {
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        if(!email || !emailReg.test(email) || !this.users[email]){
          reject({
            message:"email is not exited!",
            status:false,
          })
        }else{
          resolve({
            json() {
              return Promise.resolve({
                message:"Reset Password succeed!",
                status:true,
              })
            }
          })
        }
      }, 1000);
    })

  }
};