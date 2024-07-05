import signUpData from "./signUpData";

export default class Validator {
        private formData : signUpData | null = null;

        constructor(formdata: signUpData) {
            this.formData = formdata;
          }
        
        
          allFilled(): [boolean , string] {
            if(this.formData){
                Object.entries(this.formData).forEach(([key , value]) => {
                    if(!value){
                        return [false , `${key} is required!`]
                    }});
            }
            return [true , ""]
          }

        isValidEmail(): [boolean , string] {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(this.formData){
                if (emailPattern.test(this.formData.email)){
                    return [true , ""]
                }else {
                    return [false , "The email is not in a proper format!"]
                }
            }

            return [false , "no form data"]
          }
        
          confimPassword(Cpassword : string) : [boolean , string] {
            if(this.formData){
                if(this.formData.password == Cpassword){
                    return [true , ""]
                }else{
                    return [false , "password has to match!"]
                }
            }
            return [false , "no form data"]
          }
    
}